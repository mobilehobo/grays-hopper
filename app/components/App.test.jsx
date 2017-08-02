/* global describe it beforeEach afterEach xit before xdescribe */

import React from 'react';
import chai, { expect } from 'chai';
chai.use(require('chai-enzyme')());
import { shallow } from 'enzyme';

const db = require('APP/db'),
	Beer = db.model('beer'),
	Tag = db.model('tag'),
	BeerTag = db.model('BeerTag'),
	ParentCompany = db.model('parentCompany');
import App from './App';
import actualStore from '../store';

describe('Main View and Routes', () => {
	before('Await database sync', () => db.didSync);

	let appWrapper;
	let beer1, beer2;
	let parentCompany;
	let tag1, tag2;

	beforeEach(() => {
		appWrapper = shallow(<App />, { context: { store: actualStore } });
	});

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

	describe('State Checks', () => {
		it('should start with an empty state', () => {
			const state = appWrapper.state().storeState;
			expect(state.beers).to.deep.equal([]);
		});

		describe('Did mount methods', () => {
			beforeEach(() => appWrapper.instance().componentDidMount());

			it('should load all beers when loaded', () => {
				const state = appWrapper.state().storeState;
				expect(state.beers).to.have.length(2);
			});
		});
	});
});
