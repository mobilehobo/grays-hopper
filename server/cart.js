'use strict';

const db = require('APP/db');
const CartItem = db.model('cartItem');
const Beer = db.model('beer');

module.exports = require('express')
	.Router()
	.get('/', (req, res, next) => {
		CartItem.findAll({
			where: {
				user_id: req.params.id
			},
			include: [Beer]
		})
			.then(cartItem => res.json(cartItem))
			.catch(next);
	})
	.post('/', (req, res, next) => {
		CartItem.create(req.body)
			.then(addedItem => {
				res.json(addedItem);
			})
			.catch(next);
	})
	.put('/', (req, res, next) => {
		CartItem.update(req.body, {
			where: {
				user_id: req.params.id
			},
			include: [Beer],
			returning: true
		})
			.then(([_, item]) => {
				res.json(item);
			})
			.catch(next);
	})
	.delete('/', (req, res, next) => {
		CartItem.destroy({
			where: {
				$and: [
					{ beer_id: req.body.beer_id },
					{ user_id: req.body.user_id }
				]
			}
		}).then(() => {
			res.sendStatus(204);
		});
	});
