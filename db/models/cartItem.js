'use strict';

const sequelize = require('sequelize');

module.exports = db =>
	db.define('cartItem', {
		quantity: {
			type: sequelize.INTEGER,
			allowNull: false,
			validate: {
				min: 1
			}
		}
	});

module.exports.associations = (CartItem, { Beer, User }) => {
	CartItem.belongsTo(User);
	CartItem.belongsTo(Beer);
};
