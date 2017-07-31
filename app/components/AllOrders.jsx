import React from 'react'
import OrderItems from './OrderItems'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { Row, Col } from 'react-bootstrap'

const AllOrders = () => {
        return (
            <Col md={12}>
                <h3 className='title'> All Orders </h3>
                <OrderItems />
            </Col>
        )
    }

export default AllOrders
