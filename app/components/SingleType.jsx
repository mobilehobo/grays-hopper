import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const SingleType = (props) => {
	const selectedType = props.match.params.typeName;
	const beerList = props.beers;

	const matchedBeers = beerList.filter(beer => beer.beerType === selectedType);

	if (!matchedBeers) return <p> loading... </p>;

	return (
		<Col md={12}>
			<Row><h3 className='title'> {selectedType} </h3></Row>
			{matchedBeers.map(beer => {
				return (
					<div key={beer.id} className='col-lg-4'>
						<Link to={`/beers/${beer.id}`}> <img height='100%' className='beer-img' src={beer.imageURL} /> </Link>
						<div className='row'>
							<div className='col-lg-4 text-center'> {beer.name} </div>
							<div className='col-lg-4 text-center beerSubType'> {beer.beerSubType} </div>
							<div className='col-lg-4 text-center price'> ${beer.price} </div>
						</div>
					</div>
				);
			})
		}
		</Col>
	);
};

const mapStateToProps = storeState => ({
	beers: storeState.beers,
});

export default connect(mapStateToProps)(SingleType);
