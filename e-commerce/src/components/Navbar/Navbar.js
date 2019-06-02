import React from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="fas fa-image" style={{ color: "white" }}></span>
            <div className="buy-bar">
                <Link to="/">
                    <button>
                        <span className="fas fa-shopping-cart"></span>
                    </button>
                </Link>
                <Link to="/checkout">
                    <button>
                        <span className="fas fa-cash-register"></span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;