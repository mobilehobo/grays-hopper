import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { connect } from 'react-redux'

import NavBar from "./NavBar.jsx"
import AllBeers from './AllBeers.jsx'

import {fetchAllBeers} from '../reducers/beer.jsx'

export class App extends React.Component {

    componentDidMount(){
        this.props.loadAllBeers();
    }

    render() {
        const beerList = this.props.beers;
        return (
            <div id='app'>
            <NavBar/>
            <Router>
                <Switch>
                    <Route path='/' render={()=> <AllBeers beerList = {beerList}/>} />
                </Switch>
            </Router>
            </div>
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