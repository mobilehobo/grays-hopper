import React from 'react'
import { Link } from 'react-router-dom'

export default class BeerItem extends React.Component {


    render() {
        const beerList=this.props.beerList
        return (
            <div className='row'>
                {beerList.map(beer => {
                    return (
                        <div key={beer.id} className='col-lg-4'>
                            <Link to={`/beers/${beer.id}`}> <img className='beer-img' src={beer.imageURL} /> </Link>
                            <p> {beer.name} </p>
                            <p> {beer.price} </p>
                        </div>
                    )

                })}
            </div>
        )
    }
}