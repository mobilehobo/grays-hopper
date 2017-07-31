import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { Nav, NavItem, NavDropdown, MenuItem, Navbar } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const navBar = (props) => {

    const breweryList = props.breweries

    return (
        <div>
            <Row>
                <Col md={12}>
                    <Navbar>
                        <Nav>
                            <NavItem eventKey={1} href="#"> Login </NavItem>
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
                        </Nav>
                    </Navbar>
                </Col>
            </Row>
        </div>
    )
}

const mapStateToProps = storeState => ({
    breweries: storeState.breweries,
})

export default connect(mapStateToProps)(navBar)
