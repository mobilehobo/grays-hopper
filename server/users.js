'use strict';

const db = require('APP/db');
const User = db.model('users');

const { mustBeLoggedIn, forbidden } = require('./auth.filters');

module.exports = require('express')
  .Router()
  // .param('id', (req, res, next, id)=> {
    // find user by id, handle errors, set req.foundUser = foundUser
  // })
  .use('/:id/cart', require('./orders')) // use cart -- KHGR
  .use('/:id/orders', require('./orders'))
  .get(
    '/', // styling -- KHGR
    // The forbidden middleware will fail *all* requests to list users.
    // Remove it if you want to allow anyone to list all users on the site.
    //
    // If you want to only let admins list all the users, then you'll
    // have to add a role column to the users table to support
    // the concept of admin users.
    // forbidden('listing users is not allowed'), // only admin -- KHGR
    assertAdmin,
    (req, res, next) => User.findAll().then(users => res.json(users)).catch(next)
  )
  .post('/', assertAdmin, (req, res, next) =>  
    User.create(req.body).then(user => res.status(201).json(user)).catch(next)
  )
  .get('/:id', mustBeLoggedIn, (req, res, next) => // selfOrAdmin
    User.findById(req.params.id).then(user => res.json(user)).catch(next)
  )
  .put('/:id', (req, res, next) => {
    User.update(req.body, {
      where: {
        id: req.params.id
      },
      returning: true
    })
      .then(updatedUser => { // spread class update method. you get an array. Make sure something was updated -- KHGR
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
      res.sendStatus(200); // 204 -- KHGR
    });
  });
