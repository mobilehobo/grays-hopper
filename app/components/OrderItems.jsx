import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Clearfix } from 'react-bootstrap';

import { fetchAllOrdersById } from '../reducers/order';
import SingleOrder from './SingleOrder';

class OrderItems extends Component {
	componentDidMount() {
		this.props.fetchAllOrdersById();
	}

	render() {
		const orderList = this.props.orders;
		if (!orderList) return <p> loading... </p>;
		let rows = 0;

		return (
			<Row>
				{orderList.map(order => {
					rows++;
					return (
						<div>
							<Col lg={4}>
								<SingleOrder order={order} />
							</Col>
							{rows % 3 === 0 && <Clearfix visibleLgBlock />}
						</div>
					);
				})}
			</Row>
		);
	}
}

const mapStateToProps = storeState => ({
	orders: storeState.orders
});

const mapDispatchToProps = { fetchAllOrdersById };

export default connect(mapStateToProps, mapDispatchToProps)(OrderItems);
