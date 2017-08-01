import React from 'react'
import { connect } from 'react-redux'
import { Col } from 'react-bootstrap'
import { Form, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import BeerItems from './BeerItems.jsx'

class SearchFilter extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			showSearch: false,
			showFilter: false,
			filterFired: false,
			searchValue: '',

			priceMin: 0,
			priceMax: 0,
			IBUMin: 0,
			IBUMax: 0,
			ABVMin: 0,
			ABVMax: 0,
		}
		this.searchButtonClick = this.searchButtonClick.bind(this)
		this.filterButtonClick = this.filterButtonClick.bind(this)
		this.searchChange = this.searchChange.bind(this)
		this.preventDefault = this.preventDefault.bind(this)
		this.onFilterSubmit = this.onFilterSubmit.bind(this)
	}

	preventDefault(event) {
		event.preventDefault()
	}
	searchButtonClick() {
		if (this.state.showSearch) this.setState({ showSearch: false })
		else this.setState({
			showSearch: true,
			showFilter: false,
			filterFired: false,
			priceMin: 0,
			priceMax: 0,
			IBUMin: 0,
			IBUMax: 0,
			ABVMin: 0,
			ABVMax: 0,
		})
	}
	filterButtonClick() {
		if (this.state.showFilter) this.setState({ showFilter: false })
		else this.setState({ showFilter: true, showSearch: false, searchValue: '' })
	}
	searchChange(event) {
		this.setState({ searchValue: event.target.value })
	}
	onFilterSubmit(event) {
		event.preventDefault()
		const priceMin = document.getElementById('priceMin').value,
			priceMax = document.getElementById('priceMax').value,
			IBUMin = document.getElementById('IBUMin').value,
			IBUMax = document.getElementById('IBUMax').value,
			ABVMin = document.getElementById('ABVMin').value,
			ABVMax = document.getElementById('ABVMax').value
		if (priceMax && priceMin && IBUMin && IBUMax && ABVMin && ABVMax) this.setState({ priceMin, priceMax, IBUMin, IBUMax, ABVMin, ABVMax, filterFired: true })
	}

	render() {
		const beerList = this.props.beers
		let selectedBeers = []

		beerList.forEach(beer => {
			beer.tagsArr = []
			beer.tags.forEach(tag => {
				beer.tagsArr.push(tag.name.toLowerCase())
			})
		})

		if (this.state.showSearch && !this.state.filterFired) {
			selectedBeers = beerList.filter(beer => {
				const searchValue = this.state.searchValue.toLowerCase()
				return (
					beer.tagsArr.includes(searchValue) ||
					beer.beerType.toLowerCase().includes(searchValue) ||
					beer.beerSubType.toLowerCase().includes(searchValue) ||
					beer.price.toString().toLowerCase().includes(searchValue) ||
					beer.abv.toString().toLowerCase().includes(searchValue) ||
					beer.ibu.toString().toLowerCase().includes(searchValue) ||
					beer.country.toLowerCase().includes(searchValue) ||
					beer.parentCompany.name.toLowerCase().includes(searchValue) ||
					beer.name.toLowerCase().includes(searchValue)
				)
			})
		}

		if (this.state.filterFired) {
			const state = this.state
			console.log(state)
			selectedBeers = beerList.filter(beer => {
				return (
					beer.price >= state.priceMin && beer.price <= state.priceMax &&
					beer.ibu >= state.IBUMin && beer.ibu <= state.IBUMax &&
					beer.abv >= state.ABVMin && beer.abv <= state.ABVMax
				)
			})
			console.log(selectedBeers)
		}

		else selectedBeers = beerList;

		return (
			< Col >

				{/* BUTTONS */}
				<Col md={12}>
					<Button onClick={this.searchButtonClick}> Search </Button>
					<Button onClick={this.filterButtonClick}> Filter </Button>
				</Col>

				{/* SEARCH */}
				{this.state.showSearch &&
					<Col md={12}>
						<form onSubmit={this.preventDefault}>
							<FormGroup >
								<FormControl
									type="text"
									placeholder="Insert keyword(s)"
									value={this.state.searchValue}
									onChange={this.searchChange}
								/>
								<FormControl.Feedback />
							</FormGroup>
						</form>
					</Col>}

				{/* FILTER */}
				{this.state.showFilter &&
					<Col md={12}>
						<Form inline onSubmit={this.onFilterSubmit}>
							<FormGroup>
								<ControlLabel>Price</ControlLabel>
								<FormControl type="text" placeholder="Min" id="priceMin" onChange={this.test} />
								<FormControl type="text" placeholder="Max" id="priceMax" />
							</FormGroup> <br />

							<FormGroup>
								<ControlLabel>IBU</ControlLabel>
								<FormControl type="test" placeholder="Min" id='IBUMin' />
								<FormControl type="text" placeholder="Max" id='IBUMax' />
							</FormGroup> <br />

							<FormGroup>
								<ControlLabel>ABV</ControlLabel>
								<FormControl type="text" placeholder="Min" id='ABVMin' />
								<FormControl type="text" placeholder="Max" id='ABVMax' />
							</FormGroup> <br />

							<Button type="submit"> Filter </Button>
						</Form>
					</Col>
				}

				{/* BEERITEMS */}
				<BeerItems selectedBeers={selectedBeers} />
			</Col >
		)
	}
}

const mapStateToProps = storeState => ({
	beers: storeState.beers,
})
export default connect(mapStateToProps)(SearchFilter)

