"use strict";

const sequelize = require("sequelize");

module.exports = db =>
  db.define("cart", {
    quantity: {
      type: sequelize.INTEGER,
      allowNull: false,
      validate: {
        min: 1
      }
    }
  });
