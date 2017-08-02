import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	auth: require('./auth').default,
	beers: require('./beer').default,
	breweries: require('./parentCompany').default,
	cart: require('./cart').default,
	orders: require('./order').default,
	users: require('./user').default
});

export default rootReducer;
