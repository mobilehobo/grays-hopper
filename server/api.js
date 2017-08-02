'use strict';

const api = (module.exports = require('express').Router());

api
	.get('/', (req, res, next) => {
		// Update views
		req.session.views = (req.session.views || 0) + 1;
	})
	.get('/heartbeat', (req, res) => res.send({ ok: true }))
	.use('/auth', require('./auth'))
	.use('/users', require('./users'))
	.use('/beers', require('./beer'))
	.use('/breweries', require('./parentCompany'));

// No routes matched? 404.
api.use((req, res) => res.status(404).end());
