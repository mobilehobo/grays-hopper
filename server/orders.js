'use strict';

const db = require('APP/db');
const Order = db.model('orderItem');
const Beer = db.model('beer');

module.exports = require('express')
	.Router()
	.get('/', (req, res, next) => {
		Order.findAll({
			where: {
				user_id: req.params.id
			},
			include: [Beer]
		})
			.then(orders => res.json(orders))
			.catch(next);
	})
	.get('/:orderId', (req, res, next) => {
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
	});
