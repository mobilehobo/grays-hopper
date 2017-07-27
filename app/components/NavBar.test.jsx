/* global describe it beforeEach */

import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';

import NavBar from './NavBar';

describe('Navbar', () => {
	describe('Links', () => {
		let navBarWrapper;
		beforeEach('Make NavBar wrapper', () => {
			navBarWrapper = shallow(<NavBar />);
		});

		it('should have 6 Main links', () => {
			expect(navBarWrapper.find('a')).to.have.length(6);
		});

		it('should have a login and cart link', () => {
			expect(navBarWrapper.find('a'))
		});
	});
});
