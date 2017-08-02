import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SingleOrder = props => {
	const selectedOrder = props.order;

	if (!selectedOrder) return <p> loading... </p>;

	const createdAt = new Date(selectedOrder.created_at).toString();
	let total = 0;

	return (
		<div className='col-lg-12'>
			<div className="row">

				<div className='col-lg-12'>
					<h1 className='title'>Order # {selectedOrder.id}</h1>
					<h1 className='title'>Status: {selectedOrder.status}</h1>
				</div>
				<div className='col-lg-12'>
					<h3 className='title'>Placed on: {createdAt}</h3>
					<hr />
				</div>

				<h3 className='title'><strong>
					Items:
						</strong></h3>
				{selectedOrder.orderItems.map(orderItem => {
					return (
						<div key={orderItem.id}>
							<h3 className='title'>
								{orderItem.quantity}x <Link to={`/beers/${orderItem.beer_id}`}>{orderItem.beer.name}</Link> @ ${orderItem.beer.price} ==> ${(orderItem.beer.price * orderItem.quantity).toFixed(2)}
							</h3>
							<div hidden>
								{total += orderItem.beer.price * orderItem.quantity}
							</div>
						</div>
					);
				})
				}
				<hr />
				<h4 className='title'><strong>
					Order Total ==> ${total.toFixed(2)}
				</strong></h4>
			</div>
		</div>
	);
};

const mapStateToProps = storeState => ({
	orders: storeState.orders
});

export default connect(mapStateToProps)(SingleOrder);
