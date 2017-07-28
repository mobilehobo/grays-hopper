import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { connect } from 'react-redux'

import NavBar from "./NavBar.jsx"
import AllBeers from './AllBeers.jsx'
import SingleBeer from './SingleBeer.jsx'

import { fetchAllBeers } from '../reducers/beer.jsx'

export class App extends React.Component {

    componentDidMount() {
        this.props.loadAllBeers();
    }

    render() {
        return (

            <Router>
                <div id='app'>
                    <NavBar />
                    <Switch>
                        <Route exact path='/' component={AllBeers} />
                        <Route exact path='/beers/:beerId' component={SingleBeer} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

const mapStateToProps = storeState => ({
    beers: storeState.beers,
})

const mapThunksToProps = dispatch => ({
    loadAllBeers: () => dispatch(fetchAllBeers()),
})

export default connect(mapStateToProps, mapThunksToProps)(App)