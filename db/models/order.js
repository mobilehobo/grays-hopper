'use strict';

const { STRING, ENUM } = require('sequelize');

module.exports = db =>
	db.define('order', {
		status: {
			type: ENUM('open', 'created', 'processing', 'cancelled', 'completed'),
			defaultValue: 'open'
		},

		address: STRING
	});

module.exports.associations = (Order, { User, OrderItem }) => {
	Order.belongsTo(User);
	Order.hasMany(OrderItem);
};
