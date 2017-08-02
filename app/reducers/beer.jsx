import axios from 'axios';

// action type
const GET_ALL_BEERS = 'GET_ALL_BEERS';

// const GET_ONE_BEER,

// const POST_BEER,
// const PUT_UPDATE_BEER,
// const DELETE_BEER,

// action creator
export const getAllBeers = (beerObjList) => ({
	type: GET_ALL_BEERS,
	beerObjList: beerObjList,
});

// thunk functions
export function fetchAllBeers() {
	return function(dispatch) {
		axios.get('/api/beers')
			.then(res => res.data)
			.then(beerObjList => dispatch(getAllBeers(beerObjList)));
	};
}

// reducer
export default function beerReducer(beers = [], action) {
	switch (action.type) {
	case GET_ALL_BEERS:
		return action.beerObjList;
	default:
		return beers;
	}
}
