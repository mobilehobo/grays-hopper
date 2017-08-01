import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { connect } from 'react-redux'

import NavBar from "./NavBar.jsx"
import AllBeers from './AllBeers.jsx'
import SingleBeer from './SingleBeer.jsx'
import SingleBrewery from './SingleBrewery.jsx'

import AllOrders from './AllOrders.jsx'
import UserCartWCheckout from './UserCartWCheckout'
import Checkout from './Checkout'
import SingleCountry from './SingleCountry.jsx'
import SingleType from './SingleType.jsx'
import Login from './Login.jsx'
import SignupLogin from './SignupLogin.jsx'

import { fetchAllBeers } from '../reducers/beer.jsx'
import { fetchAllBreweries } from '../reducers/parentCompany.jsx'

export class App extends React.Component {

    componentDidMount() {
        this.props.loadAllBeers();
        this.props.loadAllBreweries();
    }

    render() {
        return (

            <Router>
                <div id='app'>
                    <NavBar />
                    <Switch>
                        <Route exact path='/' component={AllBeers} />
                        <Route path='/beers/:beerId' component={SingleBeer} />
                        <Route path='/login' component={SignupLogin} />
                        <Route path='/breweries/:breweryId' component={SingleBrewery} />
												<Route path='/cart' component={UserCartWCheckout} />
												<Route path='/checkout' component={Checkout} />
                        <Route path='/orders' component={AllOrders} />
                        <Route path='/types/:typeName' component={SingleType} />
                        <Route path='/countries/:countryName' component={SingleCountry} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

const mapStateToProps = storeState => ({
    beers: storeState.beers,
    breweries: storeState.breweries,
})

const mapThunksToProps = dispatch => ({
    loadAllBeers: () => dispatch(fetchAllBeers()),
    loadAllBreweries: () => dispatch(fetchAllBreweries())
})

export default connect(mapStateToProps, mapThunksToProps)(App)
