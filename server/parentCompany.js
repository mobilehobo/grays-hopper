const express = require('express');
const router = express();
const db = require('APP/db');
const ParentCompany = db.model('parentCompany');

module.exports = require('express')
	.Router()
	.get('/', (req, res, next) => {
		ParentCompany.findAll({})
			.then(companies => {
				res.json(companies);
			})
			.catch(next);
	});
