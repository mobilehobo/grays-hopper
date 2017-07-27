'use strict';

const { STRING, DOUBLE, INTEGER, VIRTUAL, BOOLEAN } = require('sequelize');

module.exports = db =>
	db.define('order', {
		price: {
			type: DOUBLE,
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

module.exports.associations = (Order, { User, Beer, Cart }) => {
	Order.placeOrder = function(user) {
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
				result.cart.forEach(item => {
					console.log('item', item);
					Order.create({
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
	Order.belongsTo(User);
	Order.belongsTo(Beer);
};
