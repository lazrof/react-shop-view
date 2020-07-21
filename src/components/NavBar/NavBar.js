import React, { useState } from 'react';
import { Link } from "react-router-dom";

const NavBar = (props) =>  {
    
    const [cartActive, setCartActive] = useState(props.cartActive)

    const toggleCart = (e) => {
        e.preventDefault();

        setCartActive(!cartActive)
        props.toggleMiniCart(!cartActive);
    }

    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal">React Ecommerce</h5>
            <nav className="my-2 my-md-0 mr-md-3">
                <button className="btn pt-2 px-5 text-dark" href="#" onClick={toggleCart}>
                    <i className="fas fa-shopping-cart"></i>
                </button>
                <Link className="btn btn-secondary" to="/my-store">
                    My Store
                </Link>
            </nav>
        </div>
    )
}


export default NavBar;