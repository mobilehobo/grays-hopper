import React from 'react';

export const Login = ({ login }) =>
	<form
		onSubmit={evt => {
			evt.preventDefault();
			login(evt.target.username.value, evt.target.password.value);
		}}>
		<input name="username" />
		<input name="password" type="password" />
		<input type="submit" value="Login" />
	</form>;

import { login } from 'APP/app/reducers/auth';
import { connect } from 'react-redux';

const mapDispatchToProps = { login };

export default connect(null, mapDispatchToProps)(Login);
