import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Nav, NavItem, NavDropdown, MenuItem, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { logout } from '../reducers/auth';

const navBar = props => {
	const breweryList = props.breweries;
	const beerList = props.beers;

	const typesList = [];
	beerList.forEach(beer => {
		if (!typesList.includes(beer.beerType)) {
			typesList.push(beer.beerType);
		}
	});

	const countriesList = [];
	beerList.forEach(beer => {
		if (!countriesList.includes(beer.country)) {
			countriesList.push(beer.country);
		}
	});

	function showLogout() {
		return (
			<LinkContainer to={'/'} onClick={props.logout}>
				<NavItem eventKey={2} href="#">
					Logout
				</NavItem>
			</LinkContainer>
		);
	}

	function showOrders() {
		return (
			<LinkContainer to={'/orders'}>
				<NavItem eventKey={4} href="#">
					Orders
				</NavItem>
			</LinkContainer>
		);
	}

	function showLogin() {
		return (
			<LinkContainer to={'/login'}>
				<NavItem>Login/Sign Up</NavItem>
			</LinkContainer>
		);
	}

	return (
		<div>
			<Row>
				<Col md={12}>
					<img width="100%" src="/firedup.gif" />
				</Col>
			</Row>

			<Row>
				<Col md={12}>
					<Navbar>
						<Nav>
							<LinkContainer to="/">
								<NavItem>Home</NavItem>
							</LinkContainer>

							<NavDropdown title="Breweries" id="basic-nav-dropdown">
								{breweryList.map(brewery => {
									return (
										<LinkContainer to={`/breweries/${brewery.id}`} key={brewery.id}>
											<MenuItem>
												{brewery.name}
											</MenuItem>
										</LinkContainer>
									);
								})}
							</NavDropdown>

							<NavDropdown title="Types" id="basic-nav-dropdown">
								{typesList.map(type => {
									return (
										<LinkContainer to={`/types/${type}`} key={type}>
											<MenuItem>
												{type}
											</MenuItem>
										</LinkContainer>
									);
								})}
							</NavDropdown>

							<NavDropdown title="Countries" id="basic-nav-dropdown">
								{countriesList.map(country => {
									return (
										<LinkContainer to={`/countries/${country}`} key={country}>
											<MenuItem>
												{country}
											</MenuItem>
										</LinkContainer>
									);
								})}
							</NavDropdown>
						</Nav>
						<Nav pullRight>
							{props.user ? showLogout() : showLogin()}

							{props.user ? showOrders() : null}
							<LinkContainer to={'/cart'}>
								<NavItem eventKey={3} href="#">
									<span className="glyphicon glyphicon-shopping-cart" /> Cart
								</NavItem>
							</LinkContainer>
						</Nav>
					</Navbar>
				</Col>
			</Row>
		</div>
	);
};

const mapStateToProps = storeState => ({
	beers: storeState.beers,
	breweries: storeState.breweries,
	user: storeState.auth
});

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(navBar);
