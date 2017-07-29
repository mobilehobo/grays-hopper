import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  beers: require('./beer').default,
  breweries: require('./parentCompany').default,
  cart: require('./cart').default
});

export default rootReducer;
