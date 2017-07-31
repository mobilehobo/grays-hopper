import React from 'react'
import BeerItems from './BeerItems'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { Row, Col, Carousel } from 'react-bootstrap'

const AllBeers = (props) => {
    const beerList = props.beers

    if (!beerList) return <p> loading... </p>
    return (

        <Col md={12}>
            <Col md={12}>
                <h3 className='title'> All Beers </h3>
            </Col>

            <BeerItems />
        </Col>
    )
}

const mapStateToProps = storeState => ({
    beers: storeState.beers,
})

export default connect(mapStateToProps)(AllBeers)

