import React from 'react'
import { connect } from 'react-redux'
import { postNewUser } from '../reducers/user.jsx'
import { login } from '../reducers/auth.jsx'
import { Row, Col } from 'react-bootstrap'

const SignupLogin = (props) => {

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
		props.login(username,password)
	}

	return (
		<Col md={12}>
		<h1> Login </h1>
			<form
				onSubmit={submitLogin}>
				<input name="username" placeholder="Email" /><br/>
				<input name="password" placeholder="Password" type="password"/><br/>
				<input type="submit" value="Login" /><br/>
			</form>


		<h1> Sign Up </h1>
			<form onSubmit={submitSignUp}>
				<input name="firstName" placeholder='First Name'/> <br/>
				<input name="lastName" placeholder= "Last Name"/> <br/>
				<input name="email" placeholder="Email"/> <br/>
				<input name="address" placeholder="Address"/> <br/>
				<input name="password" placeholder="Password" type="password"/><br/>
				<input type="submit" value="Sign Up" /><br/>
			</form>
		</Col>
	)
}

const mapThunksToProps = dispatch => ({
	addUser: (newUser) => dispatch(postNewUser(newUser)),
	login: (username, password) => dispatch(login(username, password))
})

export default connect(null,mapThunksToProps)(SignupLogin)
