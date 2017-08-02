import React from 'react';
import { logout } from 'APP/app/reducers/auth';
import { connect } from 'react-redux';

export const WhoAmI = ({ user, logout }) => {
	return (
		<div className="whoami">
			<span className="whoami-user-name">
				{user && user.name}
			</span>
			<button className="logout" onClick={logout}>
				Logout
    </button>
		</div>
	);
};

const mapStateToProps = storeState => ({
	user: storeState.auth
});

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(WhoAmI);
