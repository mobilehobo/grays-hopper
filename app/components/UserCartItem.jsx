import React from 'react';
import { ListGroupItem, Media, Button, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';

import { removeBeerFromCart } from '../reducers/cart';

const UserCartItem = ({ item, userId, removeBeerFromCart }) => {
	return (
		<ListGroupItem>
			<Media>
				<Media.Left>
					<img width={100} height={100} src={item.beer.imageURL} alt={item.beer.name + ' picture in cart'} />
				</Media.Left>
				<Media.Body>
					<Media.Heading>{item.beer.name}</Media.Heading>
					<p>Quantity: {item.quantity}</p>
					<p>Price of items: ${item.beer.price * item.quantity}</p>
				</Media.Body>
				<Media.Right>
					<Button onClick={() => removeBeerFromCart(item.beer.id)} bsStyle="danger"> <Glyphicon glyph="trash" /> </Button>
				</Media.Right>
			</Media>
		</ListGroupItem>
	);
};

const mapDispatchToProps = { removeBeerFromCart };

export default connect(null, mapDispatchToProps)(UserCartItem);
