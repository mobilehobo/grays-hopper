import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addBeerToCart } from '../reducers/cart';

class AddToCart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quantity: 1
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			quantity: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.addBeerToCart(this.state.quantity, this.props.currentBeer, 1); // userId hardcoded to 1
	}

	render() {
		return (
			<div className="row" id="addToCart">
				<div className="form-group col-xs-2">
					<form onSubmit={this.handleSubmit}>
						<input className="form-control" type="number" name="quantity" min="1" max="30" id="qty" value={this.state.quantity} onChange={this.handleChange} />
						<input className="btn btn-primary" type="submit" name="addToCart" id="addItem" value="Add To Cart" />
					</form>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = { addBeerToCart };

export default connect(null, mapDispatchToProps)(AddToCart);
