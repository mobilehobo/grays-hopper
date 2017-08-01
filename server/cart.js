'use strict';

const db = require('APP/db');
const CartItem = db.model('cartItem');
const Beer = db.model('beer');

module.exports = require('express')
	.Router()
	.get('/', (req, res, next) => {
		CartItem.findAll({
			where: {
				user_id: req.body.user_id
			},
			include: [Beer]
		})
			.then(cart => {
				res.json(cart);
			})
			.catch(next);
	})
	.post('/', (req, res, next) => {
		CartItem.create(req.body, {
			include: [Beer]
		})
			.then(cartItem => CartItem.findById(cartItem.id, { include: [Beer] }))
			.then(data => res.json(data))
			.catch(next);
	})
	.put('/', (req, res, next) => {
		CartItem.update(req.body, {
			where: {
				beer_id: req.body.beer_id,
				user_id: req.body.user_id
			},
			returning: true,
			plain: true,
			include: [Beer]
		})
			.then(([_, item]) => item)
			.then(cartItem => CartItem.findById(cartItem.id, { include: [Beer] }))
			.then(data => res.json(data))
			.catch(next);
	})
	.delete('/:beerId', (req, res, next) => {
		CartItem.destroy({
			where: {
				$and: [
					{ beer_id: req.params.beerId },
					{ user_id: req.body.user_id }
				]
			}
		}).then(() => {
			res.sendStatus(204);
		});
	});
