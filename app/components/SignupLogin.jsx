import React from 'react'
import { connect } from 'react-redux'
import { postNewUser } from '../reducers/user.jsx'
import { login } from '../reducers/auth.jsx'

const Signup = (props) => {

	const submitSignUp = (event) => {
		event.preventDefault()
		const firstName = event.target.firstName.value,
			lastName = event.target.lastName.value,
			email = event.target.email.value,
			address = event.target.address.value,
			password = event.target.password.value
		const newUser = { firstName, lastName, email, address, password }
		props.addUser(newUser)
	}

	const submitLogin = (event) => {
		event.preventDefault()
		const username = event.target.username.value,
			password = event.target.password.value
		login(username,password)
	}

	return (
		<div>
			<h1> Sign Up </h1>
			<form onSubmit={submitSignUp}>
				<input name="firstName" />
				<input name="lastName" />
				<input name="email" />
				<input name="address" />
				<input name="password" />
				<input type="submit" value="SignUp" />
			</form>

			<h1> Login </h1>
			<form
				onSubmit={submitLogin}>
				<input name="username" />
				<input name="password"/>
				<input type="submit" value="login" />
			</form>
		</div>
	)
}

const mapThunksToProps = dispatch => ({
	addUser: (newUser) => dispatch(postNewUser(newUser)),
	login: (username, password) => dispatch(login(username, password))
})

export default connect(mapThunksToProps)(SignupLogin)