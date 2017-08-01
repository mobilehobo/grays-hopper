'use strict';

const db = require('APP/db');
const CartItem = db.model('cartItem');
const Beer = db.model('beer');

module.exports = require('express')
	.Router()
	.get('/', (req, res, next) => {
		CartItem.findAll({
			where: {
				user_id: req.session.passport.user.id
			},
			include: [Beer]
		})
			.then(cartItem => {
				res.json(cartItem);
			})
			.catch(next);
	})
	.post('/', (req, res, next) => {
		req.body.user_id = req.session.passport.user.id;
		CartItem.create(req.body)
			.then(addedItem => {
				res.json(addedItem);
			})
			.catch(next);
	})
	.put('/', (req, res, next) => {
		CartItem.update(req.body, {
			where: {
				user_id: req.session.passport.user.id
			},
			include: [Beer],
			returning: true
		})
			.then(([_, item]) => {
				res.json(item);
			})
			.catch(next);
	})
	.delete('/:beerId', (req, res, next) => {
		CartItem.destroy({
			where: {
				$and: [
					{ beer_id: req.params.beerId },
					{ user_id: req.session.passport.user.id }
				]
			}
		}).then(() => {
			res.sendStatus(204);
		});
	});
