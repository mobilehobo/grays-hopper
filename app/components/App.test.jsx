/* global describe it beforeEach xit */

import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';

import App from './App';
import actualStore from '../store';

describe('Main View and Routes', () => {
	let appWrapper;
	beforeEach(() => {
		appWrapper = shallow(<App />, { context: { store: actualStore } });
	});

	describe('Did mount methods', () => {
		beforeEach(() => {
			if (appWrapper.instance().componentDidMount) appWrapper.instance().componentDidMount();
		});

		xit('should start with an empty state', () => {
			const initialState = appWrapper.state();
			expect(initialState.beers).to.be.deep.equal([]);
		});

		xit('should load all beers when loaded', () => {

		});
	});
});
