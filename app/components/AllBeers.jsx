import React from 'react'
import BeerItems from './BeerItems'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const AllBeers = () => {
        return (
            <div className='col-lg-12'>
                <h3 className='title'> All Beers </h3>
                <BeerItems />
            </div>
        )
    }

export default AllBeers
