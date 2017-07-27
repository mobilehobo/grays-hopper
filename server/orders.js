'use strict';

const db = require('APP/db');
const Order = db.model('order');
const Beer = db.model('beer');

module.exports = require('express')
	.Router()
	.get('/', (req, res, next) => {
		// only want foundUser if admin -- otherwise use req.user.id (logged in individual)
		// let query = req.foundUser ? {user_id: req.foundUser} 
		Order.findAll({ // want the situation where admin sees all orders -- KHGR
			where: {
				/// query
				user_id: req.params.id
			},
			include: [Beer]
		})
			.then(orders => res.json(orders))
			.catch(next);
	})
	.get('/:orderId', (req, res, next) => { // self or admin -- KHGR
		Order.findOne({
			where: {
				orderId: req.params.orderId
			},
			include: [Beer]
		})
			.then(order => res.json(order))
			.catch(next);
	})
	.post('/', (req, res, next) => {
		Order.create(req.body)
			.then(newOrder => {
				res.json(newOrder);
			})
			.catch(next);
	})
	.put('/', (req, res, next) => { // what should be updateable and when and by whom? -- KHGR
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
	});
