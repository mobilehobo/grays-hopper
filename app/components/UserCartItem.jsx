import React from 'react';

const UserCartItem = ({item}) => {
	return (
		<div>
			<p>{item.beer.name}</p>
			<p>{item.quantity}</p>
			<p>{item.beer.price}</p>
		</div>
	);
};

export default UserCartItem;
