import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  beers: require('./beer').default,
  breweries: require('./parentCompany').default,
});

export default rootReducer;
