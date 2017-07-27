'use strict';

const express = require('express');
const router = express();
const db = require('APP/db');
const Beer = db.model('beer');
const ParentCompany = db.model('parentCompany');
const Tag = db.model('tag');

module.exports = require('express')
	.Router()
	.get('/', (req, res, next) => {
		Beer.findAll({
			include: [ParentCompany, Tag]
		})
			.then(beers => {
				res.json(beers);
			})
			.catch(next);
	})
	.get('/:id', (req, res, next) => {
		Beer.findById(req.params.id)
			.then(oneBeer => {
				if (!oneBeer) res.sendStatus(404);
				else res.json(oneBeer);
			})
			.catch(next);
	})
	.post('/', (req, res, next) => {
		Beer.create(req.body)
			.then(newBeer => {
				res.json(newBeer);
			})
			.catch(next);
	})
	.put('/:id', (req, res, next) => {
		Beer.update(req.body, {
			where: {
				id: req.params.id
			},
			returning: true
		}).then(updatedBeer => {
			res.json(updatedBeer).catch(next);
		});
	})
	.delete('/:id', (req, res, next) => {
		Beer.destroy({
			where: {
				id: req.params.id
			}
		}).then(() => {
			res.sendStatus(200);
		});
	});
