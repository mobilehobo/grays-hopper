import React from 'react';
import { connect } from 'react-redux';
import { ListGroup, Grid, Row, Col, ButtonToolbar, Button, Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import UserCartItem from './UserCartItem';
import { fetchUserCart } from '../reducers/cart';

class UserCart extends React.Component {
	componentDidMount() {
		this.props.fetchUserCart();
	}

	render() {
		const cart = this.props.cart;
		const checkout = this.props.checkout;
		const total = cart.reduce((sum, item) => {
			return sum + Number((item.beer.price * item.quantity).toFixed(2));
		}, 0.0).toFixed(2);

		if (!cart) return <p>Loading...</p>;

		return (
			<div>
				<ListGroup>
					{cart.map(item => (<UserCartItem key={item.id} item={item} checkout={checkout} />))}
				</ListGroup>
				{checkout && <h3>Order Total: ${total}</h3>}
			</div>
		);
	}
};

const mapStateToProps = storeState => ({ cart: storeState.cart, user: storeState.auth });

const mapDispatchToProps = { fetchUserCart };

export default connect(mapStateToProps, mapDispatchToProps)(UserCart);
