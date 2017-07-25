"use strict";

const sequelize = require("sequelize");

module.exports = db =>
  db.define("cart", {
    quantity: sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 1
    }
  });
