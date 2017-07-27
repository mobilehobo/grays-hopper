/* global describe it before afterEach */

const db = require('APP/db'),
	{ Order, User } = db,
	{ expect } = require('chai');
const { seedEverything } = require('../seed');

describe('Order', () => {
	before('Await database sync', () => {
		return db.didSync
			.then(() => {
				return seedEverything();
			});
	});
	describe('placeOrder', () => {
		it('should place an order without error', () => {
			return User.findById(1)
				.then(user => {
					expect(Order.placeOrder(user)).to.equal(4);
				});
		});
	});
});
