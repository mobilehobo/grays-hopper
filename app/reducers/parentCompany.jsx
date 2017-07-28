import axios from 'axios'

const GET_ALL_BREWERIES = 'GET_ALL_BREWERIES'

export const getAllBreweries = (brewObjList) => ({
    type: GET_ALL_BREWERIES,
    brewObjList: brewObjList,
})

export function fetchAllBreweries(){
    return function (dispatch) {
        axios.get('/api/breweries')
            .then(res=>res.data)
            .then(brewObjList => dispatch(getAllBreweries(brewObjList)))
    }
}

export default function breweryReducer(breweries=[], action){
    switch(action.type){
        case GET_ALL_BREWERIES:
            return action.brewObjList
        default:
            return breweries
    }
}