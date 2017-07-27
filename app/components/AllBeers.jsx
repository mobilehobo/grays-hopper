import React from 'react'


export default class AllBeers extends React.Component {
    render() {
        const beerList = this.props.beerList
        console.log(beerList)

        return (
            <div className='col-lg-12'>
                
                <h3> Featured </h3>
                <h3> All Beers </h3>

                <div className='row'>
                    {beerList.map(beer => {
                        return (
                        <div className='col-lg-4 allBeerImg' key={beer.id}>
                            <img height='100%' width='100%'src="http://cohenwoodworking.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg" />
                        </div>
                        )
                    })}
                </div>
            
            </div>

        )
    }
}