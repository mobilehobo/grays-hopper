import React from 'react'
import BeerItem from './BeerItem'
import {Link} from 'react-router-dom'

export default class AllBeers extends React.Component {
    render() {
        const beerList = this.props.beerList

        return (
            <div className='col-lg-12'>
                
                <h3> Featured </h3>
                <h3> All Beers </h3>

                <BeerItem beerList={beerList} />
            </div>

        )
    }
}