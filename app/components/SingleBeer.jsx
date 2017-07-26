import React from "react";
const SingleBeer = ({ beers, id }) => {
    const selectedBeer = beers.find(beer => beer.id === +id);
    if (!selectedBeer) return <p>Loading...</p>;
    return (
        <div className="row">
            <h1>This is the Single Beer Page</h1>
            <img
                className="beer-img"
                src={selectedBeer.imageURL}
                alt={selectedBeer.name}
            />
            <div className="beer-details row">
                <h2 className="beer-title">
                    {selectedBeer.name}
                </h2>
                <ul className="list-group">
                    <li className="list-group-item">
                        {selectedBeer.parent_company_id.name || "undefined"}
                    </li>
                    <li className="list-group-item">
                        {selectedBeer.abv}
                    </li>
                    <li className="list-group-item">
                        {selectedBeer.ibu}
                    </li>
                    <li className="list-group-item">
                        {selectedBeer.beerSubType}
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default SingleBeer;