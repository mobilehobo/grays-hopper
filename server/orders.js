'use strict';

const db = require('APP/db');
const Order = db.model('order');
const CartItem = db.model('cartItem');
const OrderItem = db.model('orderItem');
const Beer = db.model('beer');
const Bluebird = require('bluebird');

module.exports = require('express')
	.Router()
	.get('/', (req, res, next) => {
		Order.findAll({
			where: {
				user_id: req.userId
			},
			include: [{
				model: OrderItem,
					include: [{
						model: Beer
					}]
			}]
		})
			.then(orders => res.json(orders))
			.catch(next);
	})
	.get('/:orderId', (req, res, next) => {
		const orderId = req.params.orderId
		Order.findById(orderId,
			{ include: [{
				model: OrderItem,
					include: [{
						model: Beer
					}]
			}]
		})
			.then(order => res.json(order))
			.catch(next);
	})
	.post('/', (req, res, next) => {
		const userId = req.userId;
		let orderId;
		const userObj = {user_id: +userId}
		Order.create(userObj)
			.then(newOrder => {
				orderId = newOrder.id;
				return CartItem.findAll({ where: {
					user_id: +userId
				},
				include: [Beer]})
			})
				.then((cartItems) => {
					const promises = [];
					for (let item in cartItems) {
						let itemObj = {
							quantity: cartItems[item].quantity,
							price: cartItems[item].beer.price,
							user_id: cartItems[item].user_id,
							beer_id: cartItems[item].beer_id,
							order_id: orderId
						};

						promises.push(OrderItem.create(itemObj))
					}
					return Bluebird.all(promises)
				})
				.then(() => {
					return CartItem.destroy({
						where: {
							user_id: userId
						}
					})
				})
					.then(destroyedCartItem => {
						res.status(204).end();
					})
			.catch(next)
	})
	.put('/', (req, res, next) => {
		Order.update(req.body, {
			where: {
				user_id: req.params.id
			},
			include: [Beer],
			returning: true
		})
			.then(updatedOrder => {
				res.json(updatedOrder);
			})
			.catch(next);
	})
	.delete('/', (req, res, next) => {
		Order.destroy({
			where: {
				user_id: req.params.id
			}
		}).then(() => {
			res.sendStatus(200);
		});
	})


