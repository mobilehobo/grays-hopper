import axios from 'axios'

//action type
const ADD_TO_CART = 'ADD_TO_CART'


//action creator
export const addToCart = (beerToAdd) => ({
	type: ADD_TO_CART,
	addBeer: beerToAdd
})

//thunk functions
export function addBeerToCart(quantity, beerId) {
	return function (dispatch) {
		axios.post('/api/users/cart', {
			beer_id: beerId,
			quantity: quantity
		})
		.then(res => res.data)
		.then(addedBeer => dispatch(addToCart(addedBeer)))
	}
}

//reducer
export default function cartReducer(cart = [], action) {
	switch (action.type) {
		case ADD_TO_CART:
			return action.addBeer
		default:
			return cart;
	}
}
