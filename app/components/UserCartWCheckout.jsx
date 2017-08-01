import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import UserCart from './UserCart';

const UserCartWCheckout = props => {
	return (
		<div>
			<h3 className='title'> Your Cart </h3>
			<UserCart />
			<LinkContainer to="/checkout">
				<Button bsSize="large" bsStyle="success">Checkout <Glyphicon glyph="shopping-cart" /> </Button>
			</LinkContainer>
		</div>
	);
};

export default UserCartWCheckout;
