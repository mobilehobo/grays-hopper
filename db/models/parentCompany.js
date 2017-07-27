"use strict";

const sequelize = require("sequelize");

module.exports = db =>
  db.define("parentCompany", {
    name: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  });

// same as tags with associations -- KHGR