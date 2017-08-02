import axios from 'axios';

// action types
const GET_USER_CART = 'GET_USER_CART';
const ADD_TO_CART = 'ADD_TO_CART';
const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const REMOVE_CART = 'REMOVE_CART';

// action creators
export const getUserCart = cart => ({
	type: GET_USER_CART,
	cart: cart
});

export const addToCart = beerToAdd => ({
	type: ADD_TO_CART,
	beerToAdd: beerToAdd
});

export const removeFromCart = beerToRemove => ({
	type: REMOVE_FROM_CART,
	beerToRemove: beerToRemove
});

export const updateCartItem = beerToUpdate => ({
	type: UPDATE_CART_ITEM,
	beerToUpdate: beerToUpdate
});

export const removeCart = () => ({
	type: REMOVE_CART
});

// thunk functions
export function fetchUserCart() {
	return function(dispatch) {
		axios.get('/api/users/cart')
			.then(res => res.data)
			.then(cart => dispatch(getUserCart(cart)))
			.catch(err => console.error(err));
	};
}

export function addBeerToCart(quantity, beerId) {
	return function(dispatch) {
		axios.post('/api/users/cart', {
			beer_id: beerId,
			quantity: quantity
		})
			.then(res => res.data)
			.then(addedBeer => dispatch(addToCart(addedBeer)))
			.catch(err => console.error(err));
	};
}

export function updateBeerInCart(event, beerId) {
	event.preventDefault();
	const quantity = event.target.beerQuantity.value;
	return function(dispatch) {
		axios.put('/api/users/cart', {
			beer_id: beerId,
			quantity: quantity
		})
			.then(res => res.data)
			.then(beer => dispatch(updateCartItem(beer)))
			.catch(err => console.error(err));
	};
}

export function removeBeerFromCart(beerId) {
	return function(dispatch) {
		axios.delete(`/api/users/cart/${beerId}`)
			.then(() => dispatch(removeFromCart(beerId)))
			.catch(err => console.error(err));
	};
}

// reducer
export default function cartReducer(cart = [], action) {
	switch (action.type) {
	case GET_USER_CART:
		return action.cart;
	case ADD_TO_CART:
		return [...cart, action.beerToAdd];
	case UPDATE_CART_ITEM:
		return cart.map(item => item.beer_id === action.beerToUpdate.beer_id ? action.beerToUpdate : item);
	case REMOVE_FROM_CART:
		return cart.filter(item => item.beer_id !== action.beerToRemove);
	case REMOVE_CART:
		return [];
	default:
		return cart;
	}
}
