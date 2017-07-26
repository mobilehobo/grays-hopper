import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import NavBar from "./NavBar.jsx"
import AllBeers from './AllBeers.jsx'

export default class App extends React.Component {
    render() {
        return (
            <div id='app'>
            <NavBar/>
            <Router>
                <Switch>
                    <Route path='/' render={()=> <AllBeers/>} />
                </Switch>
            </Router>
            </div>
        )

    }
}