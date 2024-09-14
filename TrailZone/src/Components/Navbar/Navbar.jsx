import React from 'react';
import logo from "../../images/image.png"
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img style={{width:"auto",height:"65px",marginTop:"-15px"}} src={logo} alt=""/>
            </div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/trailers">Trailers</a></li>
                <li><a href="/movies">Movies</a></li>
                <li><a href="/tvshows">TV Shows</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
