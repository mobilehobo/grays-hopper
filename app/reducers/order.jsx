import axios from 'axios'

// action type
const SET_ALL_ORDERS_FOR_USER = 'SET_ALL_ORDERS_FOR_USER';

// action creator
export const setAllOrdersForUser = (allOrders) => ({
	type: SET_ALL_ORDERS_FOR_USER,
	allOrders: allOrders
});

// thunk functions
export const fetchAllOrdersById = userId => {
	return dispatch => {
		axios.get('/api/users/orders')
			.then(res => res.data)
			.then(allOrders => {
				dispatch(setAllOrdersForUser(allOrders))
			})
			.catch(console.error);
	};
}

// reducer
export default function orderReducer(orders = [], action) {
	switch (action.type) {
		case SET_ALL_ORDERS_FOR_USER:
			return action.allOrders;
		default:
			return orders;
	}
}
