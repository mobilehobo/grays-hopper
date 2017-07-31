import React from 'react';
import { connect } from 'react-redux';

import { fetchUserCart } from '../reducers/cart';

class UserCart extends React.Component {
	componentDidMount() {
		fetchUserCart();
	}

	render() {
		const cart = this.props.cart;
		if (!cart) return <p>Loading...</p>;

		return (
			<div>
				{	cart.map(item => (<UserCartItem item={item} />)) }
			</div>
		);
	}
};

const mapStateToProps = state => ({ cart: state.cart });

const mapDispatchToProps = { fetchUserCart };

export default connect(mapStateToProps, mapDispatchToProps)(UserCart);
