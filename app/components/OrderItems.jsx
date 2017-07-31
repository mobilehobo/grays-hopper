import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { fetchAllOrdersById } from '../reducers/order'
import SingleOrder from './SingleOrder';

class OrderItems extends Component {
	componentDidMount() {
		this.props.fetchAllOrdersById(1) // hardcoded to user id 1
	}

	render() {
		const orderList = this.props.orders;
		if (!orderList) return <p> loading... </p>

		return (
			<div className='row'>
				{orderList.map(order => {
					return (
						<div key={order.id} className='col-lg-4'>
							<SingleOrder order={order} />
						</div>
					)
				})}
			</div>
		)
	}
}

const mapStateToProps = storeState => ({
	orders: storeState.orders
})

const mapDispatchToProps = { fetchAllOrdersById }

export default connect(mapStateToProps, mapDispatchToProps)(OrderItems)
