'use strict';

const { STRING, DOUBLE, INTEGER, VIRTUAL, BOOLEAN } = require('sequelize');

module.exports = db =>
	db.define('order', { // orderItem -- KHGR
		price: {
			type: DOUBLE, // DECIMAL(10,2) -- KHGR
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
		orderId: { // not needed, associate to order table you make -- KHGR
			type: INTEGER,
			allowNull: false,
			validate: {
				min: 1
			}
		}
	});

// Order table needed with status 'processing', 'shipping', 'delivered'. Address to identify non-logged-inable users -- KHGR

module.exports.associations = (Order, { User, Beer, Cart }) => {
	Order.placeOrder = function(user) { // write some comment that this isn't an association (maybe put it under associations) -- KHGR
		console.log(user); // kill this -- KHGR
		let createdRows = 0;
		User.findOne({ // findById(id, {include: {}}) -- KHGR
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
				const orderId = 1; // this will be unneccessary with order table -- KHGR
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
						.then(() => { // delete me -- KHGR
							createdRows++;
						});
				});
			});
		return createdRows; // not needed -- KHGR
	};
	Order.belongsTo(User);
	Order.belongsTo(Beer);
};
