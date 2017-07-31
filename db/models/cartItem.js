"use strict";

const sequelize = require("sequelize");

module.exports = db =>
	db.define("cartItem", {
		quantity: {
			type: sequelize.INTEGER,
			allowNull: false,
			validate: {
				min: 1
			}
		}
	});

module.exports.associations = (CartItem, { Beer, User }) => {
	CartItem.belongsTo(User);
	CartItem.belongsTo(Beer);


	// // non-associations
	// Cart.placeOrder = function(user) {
	// 	console.log(user);
	// 	let createdRows = 0;
	// 	User.findById('user.id', {
	// 		include: [{
	// 			model: Cart,
	// 			where: { user_id: user.id }
	// 		}]
	// 	}
	// 	)
	// 	.then(result => {
	// 		const orderId = 1;
	// 		console.log(result);
	// 		result.cartItem.forEach(item => {
	// 			console.log('item', item);
	// 			Cart.create({
	// 				price: 5.45,
	// 				quantity: +item.quantity,
	// 				orderId: orderId,
	// 				beer_id: +item.beer_id,
	// 				user_id: +user.id,
	// 			})
	// 			.then(() => {
	// 				createdRows++;
	// 			});
	// 		});
	// 	});
	// 	return createdRows;
	// };


};
