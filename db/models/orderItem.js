'use strict';

const { STRING, DECIMAL, INTEGER, VIRTUAL, BOOLEAN } = require('sequelize');

module.exports = db =>
db.define('orderItem', {
	price: {
		type: DECIMAL(10, 2),
		allowNull: false,
		validate: {
			min: 0
		}
	},

	quantity: {
		type: INTEGER,
		allowNull: false,
		validate: {
			min: 1
		}
	},

	// orderId: {
	// 	type: INTEGER,
	// 	allowNull: false,
	// 	validate: {
	// 		min: 1
	// 	}
	// }
});

module.exports.associations = (OrderItem, { User, Beer, Cart, Order }) => {

	OrderItem.belongsTo(User);
	OrderItem.belongsTo(Beer);
	OrderItem.belongsTo(Order);
};
