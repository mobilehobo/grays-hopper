"use strict";

const sequelize = require("sequelize");

module.exports = db =>
  db.define("tag", {
    name: {
      type: sequelize.STRING,
      allowNull: false,
      validate: { notEmpty: true } // consistent styling -- KHGR
    }
  });
// I like seeing them both ways because it is self-documenting and useful here -- KHGR 