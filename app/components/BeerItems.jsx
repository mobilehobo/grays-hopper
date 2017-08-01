import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'

import { Form, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

const BeerItems = (props) => {

    const beerList = props.selectedBeers
    if (!beerList) return <p> loading </p>
    return (
        <div>
            {
                beerList.map(beer => {
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
                })
            }

        </div>
    )
}

export default BeerItems