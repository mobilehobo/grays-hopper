import axios from 'axios'

const ADD_USER = 'ADD_USER'

export const makeNewUser = (userObj) => ({
	type: ADD_USER,
	newUser: userObj
})

export const postNewUser = (userObj) => dispatch =>
		axios
			.post('/api/users', userObj)
			.then(res=>res.data)
			.then(newUser=>dispatch(makeNewUser(newUser)))

export default function userReducer(users=[], action){
	switch(action.type){
		case ADD_USER:
			return users.concat([action.newUser])
		default:
			return users
	}
}