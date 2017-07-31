import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'

import { Form, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

export class BeerItems extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showSearch: false,
            showFilter: false,
            searchValue: '',

        }
        this.searchButtonClick = this.searchButtonClick.bind(this)
        this.filterButtonClick = this.filterButtonClick.bind(this)
        this.searchChange = this.searchChange.bind(this)
    }

    searchButtonClick() {
        if (this.state.showSearch) this.setState({ showSearch: false })
        else {
            this.setState({ showSearch: true })
            this.setState({ showFilter: false })
        }
    }

    filterButtonClick() {
        if (this.state.showFilter) this.setState({ showFilter: false })
        else {
            this.setState({ showFilter: true })
            this.setState({ showSearch: false })
            this.setState({ searchValue: '' })
        }
    }

    searchChange(event) {
        this.setState({ searchValue: event.target.value })
    }

    render() {
        
        let beerTagsArr = []
        
        this.props.beers.forEach(beer=>{
            beer.tagsArr = []
            beer.tags.forEach(tag=>{
                beer.tagsArr.push(tag.name.toLowerCase())
            })
        })
        
        const beerList = this.props.beers.filter(beer => {

            return (
                beer.tagsArr.includes(this.state.searchValue.toLowerCase())
                || beer.beerType.toLowerCase().includes(this.state.searchValue.toLowerCase())
                || beer.beerSubType.toLowerCase().includes(this.state.searchValue.toLowerCase())
                || beer.price.toString().toLowerCase().includes(this.state.searchValue.toLowerCase())
                || beer.abv.toString().toLowerCase().includes(this.state.searchValue.toLowerCase())
                || beer.ibu.toString().toLowerCase().includes(this.state.searchValue.toLowerCase())
                || beer.country.toLowerCase().includes(this.state.searchValue.toLowerCase())
                || beer.parentCompany.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
                || beer.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
            )
        })
        
        if (!beerList) return <p> loading... </p>
        return (
            <Col md={12}>
                <Col md={12}>
                    <Button onClick={this.searchButtonClick}> Search </Button>
                    <Button onClick={this.filterButtonClick}> Filter </Button>
                </Col>

                {this.state.showSearch &&
                    <Col md={12}>
                        <form>
                            <FormGroup>
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

                {this.state.showFilter &&
                    <Col md={12}>
                        <Form inline>
                            <FormGroup controlId="formInlineName">
                                <ControlLabel>Price</ControlLabel>
                                {' '}
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">select</option>
                                    <option value="other">...</option>
                                </FormControl>
                            </FormGroup>
                            {' '}
                            <FormGroup controlId="formInlineEmail">
                                <ControlLabel>IBU</ControlLabel>
                                {' '}
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">select</option>
                                    <option value="other">...</option>
                                </FormControl>
                            </FormGroup>
                            {' '}
                            <FormGroup controlId="formInlineEmail">
                                <ControlLabel>ABV</ControlLabel>
                                {' '}
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">select</option>
                                    <option value="other">...</option>
                                </FormControl>
                            </FormGroup>
                            {' '}
                            <Button type="submit">
                                Filter
                            </Button>
                        </Form>
                    </Col>
                }

                {beerList.map(beer => {
                    return (

                        <div key={beer.id} className='col-lg-4'>
                            <Link to={`/beers/${beer.id}`}> <img className='beer-img' src={beer.imageURL} /> </Link>
                            <div className='row'>
                                <div className='col-lg-4 text-center'> {beer.name} </div>
                                <div className='col-lg-4 text-center beerSubType'> {beer.beerSubType} </div>
                                <div className='col-lg-4 text-center price'> ${beer.price} </div>
                            </div>
                        </div>
                    )
                })}

            </Col>
        )
    }
}

const mapStateToProps = storeState => ({
    beers: storeState.beers,
})

export default connect(mapStateToProps)(BeerItems)