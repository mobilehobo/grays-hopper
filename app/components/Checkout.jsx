import React from 'react';
import { connect } from 'react-redux';
import { Button, Glyphicon } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import UserCart from './UserCart';
import { createNewOrder } from '../reducers/order';

const Checkout = ({ createNewOrder, history }) => {
	return (
		<div>
			<h3 className='title'> Checkout </h3>
			<UserCart checkout="true" />
			<Button onClick={() => {
				createNewOrder()
					.then(() => history.push('/orders'))
			}
			} bsSize="large" bsStyle="success">Place Order</Button>
		</div>
	);
};

const mapDispatchToProps = { createNewOrder };

export default withRouter(connect(null, mapDispatchToProps)(Checkout));
