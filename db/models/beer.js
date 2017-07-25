"use strict";

const sequelize = require("sequelize");

module.exports = db => {
  return db.define(
    "beer",
    {
      name: {
        type: sequelize.STRING,
        allowNull: false,
        validate: { notEmpty: true }
      },

      price: { type: sequelize.INTEGER, allowNull: false },
      description: {
        type: sequelize.TEXT,
        allowNull: false,
        validate: { notEmpty: true }
      },

      inventory: { type: sequelize.INTEGER, allowNull: false },
      imageURL: {
        type: sequelize.STRING,
        defaultValue:
          'https://www.crafthounds.com/wp-content/uploads/2016/11/No-Image-Available.png',
        validate: { notEmpty: true }
      },

      ibu: { type: sequelize.INTEGER, allowNull: false },
      abv: { type: sequelize.DOUBLE, allowNull: false },
      beerType: { type: sequelize.STRING, allowNull: false },

      country: {
        type: sequelize.STRING,
        allowNull: false,
        validate: { notEmpty: true }
      }
    },
    {
      getterMethods: {
        priceRating: () => {
          let price = this.getDataValue('price');
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
  Beer.belongsToMany(Tag, { through: "BeerTag" });
  Beer.hasMany(Cart, { onDelete: "cascade" });
};
