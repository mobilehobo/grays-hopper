'use strict';

const sequelize = require('sequelize');

module.exports = db => {
	return db.define('beer', {
		name: {
			type: sequelize.STRING,
			allowNull: false,
			validate: { notEmpty: true }
		},

		price: {
			type: sequelize.DECIMAL(10, 2),
			allowNull: false
		},

		description: {
			type: sequelize.TEXT,
			allowNull: false,
			validate: { notEmpty: true }
		},

		inventory: {
			type: sequelize.INTEGER,
			allowNull: false,
			validate: { min: 0 }
		},

		imageURL: {
			type: sequelize.STRING,
			defaultValue:
			'https://www.crafthounds.com/wp-content/uploads/2016/11/No-Image-Available.png',
			validate: { notEmpty: true }
		},

		ibu: {
			type: sequelize.INTEGER,
			allowNull: false,
			validate: { min: 0 }
		},

		abv: {
			type: sequelize.DOUBLE,
			allowNull: false,
			validate: { min: 0 }
		},

		beerType: {
			type: sequelize.ENUM('Ale', 'Pilsner', 'Lager', 'Stout', 'Porter', 'Pale Ale'),
			allowNull: false
		},

		beerSubType: {
			type: sequelize.STRING,
			allowNull: false
		},

		country: {
			type: sequelize.STRING,
			allowNull: false,
			validate: { notEmpty: true }
		}
	},
	{
		getterMethods: {
			priceRating: function() {
				let price = this.price;
				switch (price) {
					case price <= 2:
					return 1;
					case price <= 4:
					return 2;
					case price <= 6:
					return 3;
					case price <= 8:
					return 4;
					case price > 8:
					return 5;
					default:
					return 0;
				}
			}
		}
	}
	);
};

module.exports.associations = (Beer, { CartItem, ParentCompany, Tag }) => {
	Beer.belongsTo(ParentCompany);
	Beer.belongsToMany(Tag, { through: 'BeerTag' });
	Beer.hasMany(CartItem, { onDelete: 'cascade' });
};
