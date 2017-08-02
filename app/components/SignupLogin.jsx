import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewUser } from '../reducers/user.jsx';
import { login } from '../reducers/auth.jsx';
import { Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

class SignupLogin extends Component {
	constructor() {
		super();
		this.submitSignup = this.submitSignup.bind(this);
		this.submitLogin = this.submitLogin.bind(this);
	}

	submitSignup = event => {
		event.preventDefault();
		const firstName = event.target.firstName.value,
			lastName = event.target.lastName.value,
			email = event.target.email.value,
			address = event.target.address.value,
			password = event.target.password.value;
		const newUser = { firstName, lastName, email, address, password };
		this.props.addUser(newUser).then(() => {
			if (this.props.user) this.props.history.push('/');
		});
	};

	submitLogin = event => {
		event.preventDefault();
		const username = event.target.username.value,
			password = event.target.password.value;
		this.props.login(username, password).then(() => (this.props.user ? this.props.history.push('/') : null));
	};

	render() {
		return (
			<Col md={12}>
				<h1> Login </h1>
				<form onSubmit={this.submitLogin}>
					<input name="username" placeholder="Email" />
					<br />
					<input name="password" placeholder="Password" type="password" />
					<br />
					<input type="submit" value="Login" />
					<br />
				</form>

				<h1> Sign Up </h1>
				<form onSubmit={this.submitSignup}>
					<input name="firstName" placeholder="First Name" /> <br />
					<input name="lastName" placeholder="Last Name" /> <br />
					<input name="email" placeholder="Email" /> <br />
					<input name="address" placeholder="Address" /> <br />
					<input name="password" placeholder="Password" type="password" />
					<br />
					<input type="submit" value="Sign Up" />
					<br />
				</form>
			</Col>
		);
	};
}

const mapStateToProps = storeState => ({
	user: storeState.auth
});

const mapDispatchToProps = dispatch => ({
	addUser: newUser => dispatch(postNewUser(newUser)),
	login: (username, password) => dispatch(login(username, password))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupLogin));
