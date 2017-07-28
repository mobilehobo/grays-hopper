import React from 'react'
import BeerItems from './BeerItems'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import { Row, Col } from 'react-bootstrap'

const AllBeers = () => {
        return (
            <Col md={12}>
                <h3 className='title'> All Beers </h3>
                <BeerItems />
            </Col>
        )
    }

export default AllBeers
