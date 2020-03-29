import React from 'react';

const NavBar = () =>  {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal">React Ecommerce</h5>
            <nav className="my-2 my-md-0 mr-md-3">
                <a className="pt-2 px-4 text-dark" href="#"><i className="fas fa-user"></i></a>
                <a className="pt-2 px-5 text-dark" href="#"><i className="fas fa-shopping-cart"></i></a>
            </nav>
        </div>
    )
}


export default NavBar;