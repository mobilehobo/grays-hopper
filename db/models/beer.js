'use strict';

const sequelize = require('sequelize');
  // { STRING, VIRTUAL, ENUM } = require("sequelize"); <-- incude me!!! -- KHGR
 
module.exports = db => {
  return db.define(
    'beer', // consistency!!!! -- KHGR
    {
      name: {
        type: sequelize.STRING,
        allowNull: false,
        validate: { notEmpty: true } // consistency!!!! -- KHGR
      },

      price: { type: sequelize.INTEGER, allowNull: false }, // DECIMAL(10,2) -- KHGR
      description: {
        type: sequelize.TEXT,
        allowNull: false,
        validate: { notEmpty: true }
      },

      inventory: { type: sequelize.INTEGER, allowNull: false }, // min, defaultValue -- KHGR
      imageURL: {
        type: sequelize.STRING,
        defaultValue:
          'https://www.crafthounds.com/wp-content/uploads/2016/11/No-Image-Available.png',
        validate: { notEmpty: true }
      },

      ibu: { type: sequelize.INTEGER, allowNull: false }, // min -- KHGR
      abv: { type: sequelize.DOUBLE, allowNull: false }, // min/max -- KHGR
      beerType: { type: sequelize.STRING, allowNull: false }, // assume enum or another table that is associated to beers -- KHGR
      beerSubType: { type: sequelize.STRING, allowNull: false }, // ACTION ITEM -- KHGR

      country: { // assume this would go to enum, and I understand why you wouldn't right now -- KHGR
        type: sequelize.STRING,
        allowNull: false,
        validate: { notEmpty: true }
      }
    },
    {
      getterMethods: {
        priceRating: function(){
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

module.exports.associations = (Beer, { Cart, ParentCompany, Tag }) => {
  Beer.belongsTo(ParentCompany);
  Beer.belongsToMany(Tag, { through: 'BeerTag' });
  Beer.hasMany(Cart, { onDelete: 'cascade' });
};
