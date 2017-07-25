'use strict';

const db = require('APP/db');
const User = db.model('users');

const { mustBeLoggedIn, forbidden } = require('./auth.filters');

module.exports = require('express')
  .Router()
  .get()
  .post('/', (req, res, next) =>
    User.create(req.body).then(user => res.status(201).json(user)).catch(next)
  )
  .get('/:id', mustBeLoggedIn, (req, res, next) =>
    User.findById(req.params.id).then(user => res.json(user)).catch(next)
  )
  .put('/:id', (req, res, next) => {
    User.update(req.body, {
      where: {
        id: req.params.id
      },
      returning: true
    })
      .then(updatedUser => {
        res.json(updatedUser);
      })
      .catch(next);
  })
  .delete('/:id', (req, res, next) => {
    User.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => {
      res.sendStatus(200);
    });
  });
