import React from 'react';
import { ListGroupItem, Media, Button, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';

import { updateBeerInCart, removeBeerFromCart } from '../reducers/cart';

const UserCartItem = ({ item, userId, updateBeerInCart, removeBeerFromCart, checkout }) => {
	return (
		<ListGroupItem>
			<Media>
				<Media.Left>
					<img width={100} height={100} src={item.beer.imageURL} alt={item.beer.name + ' picture in cart'} />
				</Media.Left>
				<Media.Body>
					<form onSubmit={event => updateBeerInCart(event, item.beer.id)}>
						<Media.Heading>{item.beer.name}</Media.Heading>
						<label htmlFor="beerQuantity">Quantity
							<input name="beerQuantity" type="number" min="1" max="100" defaultValue={item.quantity} disabled={checkout} />
						</label>
						{!checkout && <Button type="submit" bsStyle="warning"> Update <Glyphicon glyph="pencil" /> </Button>}
						<p>Price of items: ${(item.beer.price * item.quantity).toFixed(2)}</p>
					</form>
				</Media.Body>
				{!checkout &&
					<Media.Right>
						<Button onClick={() => removeBeerFromCart(item.beer.id)} bsStyle="danger"> <Glyphicon glyph="trash" /> </Button>
					</Media.Right>
				}
			</Media>
		</ListGroupItem>
	);
};

const mapDispatchToProps = { updateBeerInCart, removeBeerFromCart };

export default connect(null, mapDispatchToProps)(UserCartItem);
