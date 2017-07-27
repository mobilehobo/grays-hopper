"use strict";

const sequelize = require("sequelize");

module.exports = db =>
  db.define("cart", { // rename to cartItem -- KHGR
    quantity: {
      type: sequelize.INTEGER,
      allowNull: false,
      validate: {
        min: 1
      }
    }
  });
  // add attribute for sessionId to associate non-logged in users -- KHGR
// associated to product and user, I would like to see association; not necessary -- KHGR