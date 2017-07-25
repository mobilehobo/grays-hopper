"use strict";

const sequelize = require("sequelize");

module.exports = db =>
  db.define("tag", {
    name: {
      type: sequelize.STRING,
      allowNull: false,
      validate: { notEmpty: true }
    }
  });
