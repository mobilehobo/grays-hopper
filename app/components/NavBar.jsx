import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div id='app' className='col-lg-12'>

            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav navbar-right">
                        <a className="nav-item nav-link active" href="https://www.google.com/">Log In <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="https://www.google.com/">Cart</a>
                    </div>
                </div>
            </nav>

            <div className="col-lg-12">
                <img width='100%' src="http://www.pchsweb.org/assets/header-placeholder.jpg" />
            </div>

            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav navbar-center">
                        <Link to = "/" className="nav-item nav-link"> Home </Link>
                        <a className="nav-item nav-link" href="#">Breweries</a>
                        <a className="nav-item nav-link" href="#">Regions</a>
                        <a className="nav-item nav-link" href="#">Types</a>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavBar;