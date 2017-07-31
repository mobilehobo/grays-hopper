import React from "react";
import {connect} from 'react-redux';

const SingleOrder = (props) => {

	const selectedOrder = props.order;

		if (!selectedOrder) return <p> loading... </p>;
		const createdAt = new Date(selectedOrder.created_at).toString();

		return (
			<div className='col-lg-12'>
				<div className="row">

					<div className='col-lg-12'>
						<h1 className='title'>Order Id: {selectedOrder.id}</h1>
					</div>
					<div className='col-lg-12'>
						<h1 className='title'>Placed at: {createdAt}</h1>
					</div>
					<h2>Items</h2>
					{ selectedOrder.orderItems.map(orderItem => {
						return (
							<div className='col-lg-12' key={orderItem.id}>
								<h3 className='title'>{orderItem.quantity}x {orderItem.beer.name} @ ${orderItem.beer.price} -> ${orderItem.beer.price*orderItem.quantity}</h3>
							</div>
						)
					 })
				  }
				</div>
			</div>
		)
}

const mapStateToProps = storeState => ({
	orders: storeState.orders
})

export default connect(mapStateToProps)(SingleOrder)
