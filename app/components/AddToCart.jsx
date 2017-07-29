import React from 'react';

export default function AddToCart() {
	return (
		<form>
			<input class="form-text text-muted" type="text" name="quantity" id="qty" maxLength="2" pattern="[0-9]*" placeholder="1"/>
			<input class="form-control" type="submit" name="addToCart" id="addItem" value="Add To Cart" />
		</form>
	);
}
