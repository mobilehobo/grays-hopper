import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { Nav, NavItem, NavDropdown, MenuItem, Navbar } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const navBar = (props) => {

    const breweryList = props.breweries
    const beerList = props.beers

    const typesList = [];
    beerList.forEach(beer=>{
        if (!typesList.includes(beer.beerType)){
            typesList.push(beer.beerType)
        }
    })

    const countriesList = [];
    beerList.forEach(beer=>{
        if (!countriesList.includes(beer.country)){
            countriesList.push(beer.country)
        }
    })

    return (
        <div>
            <Row>
                <Col md={12}>
                    <Navbar>
                        <Nav>
                            <LinkContainer to={'/login'}>
                                <NavItem eventKey={1} href="#"> Login </NavItem>
                            </LinkContainer>
                            <NavItem> Cart </NavItem>
                            <LinkContainer to={`/users/1/orders`}>
                                {
                                    // hardcoded to user 1
                                }
                                <NavItem>
                                    Orders
                                </NavItem>
                            </LinkContainer>


                        </Nav>
                    </Navbar>
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    <img width='100%' src="/firedup.gif" />
                </Col>
            </Row>


            <Row>
                <Col md={12}>
                    <Navbar>
                        <Nav>
                            <LinkContainer to='/'>
                            <NavItem>Home</NavItem>
                            </LinkContainer>
                            <NavDropdown title="Breweries" id="basic-nav-dropdown">
                                {
                                    breweryList.map(brewery => {
                                        return (
                                            <LinkContainer to={`/breweries/${brewery.id}`} key={brewery.id}>
                                                <MenuItem >
                                                    {brewery.name}
                                                </MenuItem>
                                            </LinkContainer>
                                        )
                                    })
                                }
                            </NavDropdown>
                            <NavDropdown title="Types" id="basic-nav-dropdown">
                                {
                                    typesList.map(type => {
                                        return (
                                            <LinkContainer to={`/types/${type}`} key={type}>
                                                <MenuItem >
                                                    {type}
                                                </MenuItem>
                                            </LinkContainer>
                                        )
                                    })
                                }
                            </NavDropdown>
                            <NavDropdown title="Countries" id="basic-nav-dropdown">
                                {
                                    countriesList.map(country => {
                                        return (
                                            <LinkContainer to={`/countries/${country}`} key={country}>
                                                <MenuItem >
                                                    {country}
                                                </MenuItem>
                                            </LinkContainer>
                                        )
                                    })
                                }
                            </NavDropdown>
                        </Nav>
                    </Navbar>
                </Col>
            </Row>
        </div>
    )
}

const mapStateToProps = storeState => ({
    beers: storeState.beers,
    breweries: storeState.breweries,
})

export default connect(mapStateToProps)(navBar)
