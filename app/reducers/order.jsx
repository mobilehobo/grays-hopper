import axios from 'axios';

import {removeCart} from './cart';

// action type
const SET_ALL_ORDERS_FOR_USER = 'SET_ALL_ORDERS_FOR_USER';
const CREATE_ORDER = 'CREATE_ORDER';

// action creator
export const setAllOrdersForUser = allOrders => ({
	type: SET_ALL_ORDERS_FOR_USER,
	allOrders: allOrders
});

export const createOrder = order => ({
	type: CREATE_ORDER,
	order: order
});

// thunk functions
export const fetchAllOrdersById = userId => {
	return dispatch => {
		axios.get('/api/users/orders')
			.then(res => res.data)
			.then(allOrders => dispatch(setAllOrdersForUser(allOrders)))
			.catch(console.error);
	};
};

export const createNewOrder = () => {
	return dispatch => {
		return axios.post('/api/users/orders')
			.then(res => res.data)
			.then(order => {
				dispatch(createOrder(order));
				dispatch(removeCart());
			})
			.catch(err => console.error(err));
	};
};

// reducer
export default function orderReducer(orders = [], action) {
	switch (action.type) {
	case SET_ALL_ORDERS_FOR_USER:
		return action.allOrders;
	case CREATE_ORDER:
		return [...orders, action.order];
	default:
		return orders;
	}
}
