import React from 'react'
import { Link } from 'react-router-dom'

export default class BeerItem extends React.Component { // make me dumb -- KHGR


    render() {
        const {beerList}=this.props // if you add more things, I suggest using destructuring here -- KHGR
        return (
            <div className='row'> {/* see if container class works the same for you -- KHGR*/}
                {beerList.map(beer => {
                    return (
                        // <div className='row'> -- KHGR
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

// I expect to see this connected -- KHGR