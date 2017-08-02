import React from 'react'
import SearchFilter from './SearchFilter'
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

            <SearchFilter />
        </Col>
    )
}

const mapStateToProps = storeState => ({
    beers: storeState.beers,
})

export default connect(mapStateToProps)(AllBeers)

