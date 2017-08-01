import React from 'react';
import { connect } from 'react-redux';
import { ListGroup, Grid, Row, Col, ButtonToolbar, Button, Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import UserCartItem from './UserCartItem';
import { fetchUserCart } from '../reducers/cart';

class UserCart extends React.Component {
	componentDidMount() {
		this.props.fetchUserCart(this.props.match.params.userId);
	}

	render() {
		const userId = this.props.match.params.userId;
		const cart = this.props.cart;

		if (!cart) return <p>Loading...</p>;

		return (
			<div>
				<ListGroup>
					{cart.map(item => (<UserCartItem key={item.id} item={item} />))}
				</ListGroup>
				<LinkContainer to="/checkout">
					<Button bsSize="large" bsStyle="success">Checkout <Glyphicon glyph="shopping-cart" /> </Button>
				</LinkContainer>
			</div>
		);
	}
};

const mapStateToProps = state => ({ cart: state.cart });

const mapDispatchToProps = { fetchUserCart };

export default connect(mapStateToProps, mapDispatchToProps)(UserCart);
