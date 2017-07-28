import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

const BeerItems = (props) => {
    const beerList = props.beers
    console.log(beerList)

    if (!beerList) return <p> loading... </p>

    return (
        <div className='row'>
            {beerList.map(beer => {
                return (
                    <div key={beer.id} className='col-lg-4'>
                        <Link to={`/beers/${beer.id}`}> <img className='beer-img' src={beer.imageURL} /> </Link>
                        <div className = 'row'>
                            <div className='col-lg-4 text-center'> {beer.name} </div> 
                            <div className='col-lg-4 text-center beerSubType'> {beer.beerSubType} </div>
                            <div className='col-lg-4 text-center price'> ${beer.price} </div>
                        </div>
                    </div>
                )

            })}
        </div>
    )
}

const mapStateToProps = storeState => ({
    beers: storeState.beers,
})

export default connect(mapStateToProps)(BeerItems)