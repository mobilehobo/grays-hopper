import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  beers: require('./beer').default,
  breweries: require('./parentCompany').default,
  cart: require('./cart').default,
  orders: require('./order').default
});

export default rootReducer;
