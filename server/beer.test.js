const request = require('supertest'),
  { expect } = require('chai'),
  db = require('APP/db'),
  app = require('./start'),
  Beer = db.model('beer');

import chai from 'chai';
import supertest from 'supertest-as-promised';
import sinon from 'sinon';

/* global describe it before afterEach */

describe('HTTP Server', () => {
  let agent;
  beforeEach('Set up agent for testing', () => {
    agent = supertest(app);
  });

  describe('api routes', () => {
    let obama;
    let biden;
    beforeEach('Seed users', () => {
      const beers = [{ name: 'Xefef Xefef' }, { name: 'Profe Foerk' }];
      return Beer.bulkCreate(beers, { returning: true }).then(createdUsers => {
        obama = createdUsers[0].id;
        biden = createdUsers[1].id;
      });
    });

    // let obamaFirstMessage;
    // let bidenFirstMessage;
    // let obamaSecondMessage;
    // beforeEach('Seed messages', () => {
    //   const messages = [
    //     {
    //       toId: biden,
    //       fromId: obama,
    //       body: 'HEYOOOOOOO'
    //     },
    //     {
    //       toId: obama,
    //       fromId: biden,
    //       body: 'WAAASSUUUUPP??'
    //     },
    //     {
    //       toId: biden,
    //       fromId: obama,
    //       body: 'nmu?'
    //     }
    //   ];

    //   return Message.bulkCreate(messages, { returning: true }).then(createdMessages => {
    //     obamaFirstMessage = createdMessages[0].id;
    //     bidenFirstMessage = createdMessages[1].id;
    //     obamaSecondMessage = createdMessages[2].id;
    //   });
    // });

    describe('beers', () => {
      it('serves up all beers on request to GET /', () => {
        return agent.get('/beers').expect(200).then(res => {
          expect(res.body).to.be.an('array');
          expect(res.body.length).to.be.equal(2);
          expect(res.body).to.contain.a.thing.with('id', obama);
          expect(res.body).to.contain.a.thing.with('id', biden);
        });
      });

      it('updates a user at PUT /{{usersId}}, sending a 201 response', () => { // I think POST 201
        return agent
          .put(`/users/${obama}`)
          .send({
            email: 'potus@hotmail.com'
          })
          .expect(201)
          .then(res => {
            return User.findById(obama);
          })
          .then(user => {
            expect(user.email).to.be.equal('potus@hotmail.com');
          });
      });
    });
  });
});
