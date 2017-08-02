/* global describe it before afterEach beforeEach xit xdescribe */

const request = require('supertest-as-promised'),
	{ expect } = require('chai'),
	db = require('APP/db'),
	app = require('./start'),
	agent = request.agent(app),
	Beer = db.model('beer'),
	Tag = db.model('tag'),
	BeerTag = db.model('BeerTag'),
	ParentCompany = db.model('parentCompany'),
	Bluebird = require('bluebird');

// import chai from 'chai';
// import supertest from 'supertest-as-promised';
// import sinon from 'sinon';

describe('Beer routes', () => {
	before('Await database sync', () => db.didSync);

	let beer1, beer2;
	let parentCompany;
	let tag1, tag2;

	beforeEach(() =>
		ParentCompany.create({
			name: 'Busch'
		})
			.then(result =>
				parentCompany = result)
			.then(() =>
				Tag.create({
					name: 'Crisp'
				}))
			.then(result => tag1 = result)
			.then(() =>
				Tag.create({
					name: 'Smooth'
				}))
			.then(result => tag2 = result)
			.then(() =>
				Beer.create({
					name: 'Slightly Flavored Water',
					price: 4,
					description: 'Pretty much water with some alcohol in it',
					inventory: 50,
					ibu: 6,
					abv: 3.5,
					beerType: 'Lager',
					beerSubType: 'Water Lager',
					country: 'Murica',
					parent_company_id: parentCompany.id
				}))
			.then(result => beer1 = result)
			.then(() =>
				Beer.create({
					name: 'Flavored Water',
					price: 5,
					description: 'Pretty much water with a little more alcohol in it',
					inventory: 50,
					ibu: 8,
					abv: 5.5,
					beerType: 'Lager',
					beerSubType: 'Water Lager',
					country: 'Murica',
					parent_company_id: parentCompany.id
				}))
			.then(result => beer2 = result)
			.then(() =>
				BeerTag.create({
					beer_id: beer1.id,
					tag_id: tag2.id
				}))
			.then(() =>
				BeerTag.create({
					beer_id: beer2.id,
					tag_id: tag1.id
				}))
	);

	afterEach('Clear the tables', () => db.truncate({ cascade: true }));

	describe('GET routes', () => {
		it('should get all beers when going to /api/beers', () =>
			agent.get('/api/beers')
				.expect(200)
				.expect(res => {
					expect(res.body).to.be.an.instanceOf(Array);
					expect(res.body).to.have.length(2);
				}));

		it('should include the parent companies', () =>
			agent.get('/api/beers')
				.expect(200)
				.expect(res => {
					for (let beer in res.body) {
						expect(res.body[beer].parentCompany.name).to.not.be.equal(undefined);
					}
				}));

		it('should include the relevant tags', () =>
			agent.get('/api/beers')
				.expect(200)
				.expect(res => {
					for (let beer in res.body) {
						expect(res.body[beer].tags).to.be.an.instanceOf(Array);
						expect(res.body[beer].tags).to.be.length(1);
						expect(res.body[beer].tags[0]).to.not.be.equal(undefined);
					}
				}));

		xit('should get a single beer when going to /api/beer/:id', () =>
			agent.get(`/api/beers/${beer1.id}`)
				.expect(200)
				.expect(res => {
					expect(res.body).to.be.an.instanceOf(Object);
					expect(res.body.name).to.be.equal(beer1.name);
				}));
	});

	describe('POST route', () => {
		it('should make a new beer when posting to /api/beer/', () =>
			agent.post('/api/beers')
				.send({
					name: 'Fransiskaner',
					price: 6,
					description: 'Delicious hefe-weiss beer with hints of nuts and banana',
					inventory: 20,
					ibu: 8,
					abv: 5.6,
					beerType: 'Lager',
					beerSubType: 'Heffeweissen',
					country: 'Germany',
					parent_company_id: parentCompany.id
				})
				.expect(200)
				.expect(res => {
					expect(res.body).to.not.be.equal(undefined);
					expect(res.body.name).to.be.equal('Fransiskaner');
				}));
	});
});
