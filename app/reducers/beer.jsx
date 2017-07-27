import axios from 'axios'

// make order look like auht -- KHGR

//action type
const GET_ALL_BEERS = 'GET_ALL_BEERS'

// const GET_ONE_BEER,

// const POST_BEER,
// const PUT_UPDATE_BEER,
// const DELETE_BEER,

//action creator
export const getAllBeers = (beerObjList) => { // indentation!!!!! Make it consistent -- KHGR
    const newAction = {};
    newAction.type = GET_ALL_BEERS;
    newAction.beerObjList = beerObjList;
    return newAction;
}

// export const getAllBeers = (beerObjList) => ({ I suggest this -- KHGR
//     type: GET_ALL_BEERS,
//     beerObjList: beerObjList
// })

//thunk functions
export function fetchAllBeers () { // why no arrow? -- KHGR
    return function (dispatch) {
        axios.get('/api/beers')
            .then(res => res.data)
            .then(beerObjList => dispatch(getAllBeers(beerObjList))) // catch me!!! And then display something to the user -- KHGR
    }
}

//reducer
export default function beerReducer(beers = [], action) {
    switch (action.type) {
        case GET_ALL_BEERS:
            return [...beers, ...action.beerObjList] // get all makes me think replace not concat -- KHGR
        default:
            return beers;
    }
}