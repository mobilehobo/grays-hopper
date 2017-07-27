import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  beers: require('./beer').default,
});

export default rootReducer;
