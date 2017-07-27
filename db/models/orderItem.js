'use strict';

const { STRING, DECIMAL, INTEGER, VIRTUAL, BOOLEAN } = require('sequelize');

module.exports = db =>
	db.define('orderItem', {
		price: {
			type: DECIMAL(10, 2)
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
		orderId: {
			type: INTEGER,
			allowNull: false,
			validate: {
				min: 1
			}
		}
	});

module.exports.associations = (OrderItem, { User, Beer, Cart, Order }) => {
	OrderItem.placeOrder = function(user) {
		console.log(user);
		let createdRows = 0;
		User.findOne({
			where: {
				id: user.id
			},
			include: [
				{
					model: Cart,
					where: { user_id: user.id }
				}
			]
		})
			.then(result => {
				const orderId = 1;
				console.log(result);
				result.cartItem.forEach(item => {
					console.log('item', item);
					OrderItem.create({
						price: 5.45,
						quantity: +item.quantity,
						orderId: orderId,
						beer_id: +item.beer_id,
						user_id: +user.id,
					})
						.then(() => {
							createdRows++;
						});
				});
			});
		return createdRows;
	};
	OrderItem.belongsTo(User);
	OrderItem.belongsTo(Beer);
	OrderItem.belongsTo(Order);
};
