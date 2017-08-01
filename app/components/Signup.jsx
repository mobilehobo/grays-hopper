import React from 'react'
import { connect } from 'react-redux'
import { postNewStudent } from '../reducers/user.jsx'

const Signup = (props) => {

	const submitSignUp = (event) => {
		event.preventDefault()
		const firstName = document.getElementById('FirstName').value,
			lastName = document.getElementById('LastName').value;
			email = document.getElementById('Email').value;
			address = document.getElementById('Address').value;
			password = document.getElementById('Password').value;
		const newUser = {firstName,lastName,email,address,password}
		props.addUser(newUser)

	}

	return (
		<form onSubmit={submitSignUp}>
			<input id="FirstName" />
			<input id="LastName" />
			<input id="Email" />
			<input id="Address" />
			<input id="Password" />
			<input type="submit" value="SignUp" />
		</form>
	)
}

const mapThunksToProps = dispatch => ({
	addUser: (newUser) => dispatch(postNewStudent(newUser))
})

export default connect(mapThunksToProps)(Signup)