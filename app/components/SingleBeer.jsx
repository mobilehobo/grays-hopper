import React from "react";

export default class SingleBeer extends React.Component {

    render() {
        const beerList = this.props.beerList
        const selectedBeerId = this.props.beerId
        const selectedBeer = beerList.find(beer => { return beer.id == selectedBeerId })

        if (!selectedBeer) return <p> loading... </p>

        return (
            <div className='col-lg-12'>
                <div className="row">

                    <div className='col-lg-12'>
                        <h1>{selectedBeer.name}</h1>
                    </div>

                    <div className='col-lg-6'>
                        <img width='100%'
                            className="beer-img"
                            src={selectedBeer.imageURL}
                            alt={selectedBeer.name}
                        />
                    </div>

                    <div className="col-lg-6">
                        <ul className="list-group">
                            <li className="list-group-item">
                                Type: {selectedBeer.beerSubType}
                            </li>
                            <li className="list-group-item">
                                Price: ${selectedBeer.price}
                            </li>
                            <li className="list-group-item">
                                ABV: {selectedBeer.abv}%
                            </li>
                            <li className="list-group-item">
                                IBU: {selectedBeer.ibu}
                            </li>
                            <li className="list-group-item">
                                Country: {selectedBeer.country}
                            </li>
                            
                            <li className="list-group-item">
                                {selectedBeer.parent_company_id.name || "undefined"}
                            </li>
                            
                            
                            
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}





// const SingleBeer = ({ beers, id }) => {
//     const selectedBeer = beers.find(beer => beer.id === +id);
//     if (!selectedBeer) return <p>Loading...</p>;
//     return (
//         
//     );
// };
// export default SingleBeer;