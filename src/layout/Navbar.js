import React from 'react';
import './Navbar.css';
import logo from '../img/logo.png'

const Navbar = () =>{
    return (
        <header class="nav">
            <nav class="centered-nav">
                <a href="#home">Home</a>
                <a href="#portifolio">Portfólio</a>
                <a href="#helpdesk">Help Desk</a>
            </nav>
            <img src={logo} />
            <div class="right-nav">
                <button>Login</button>
            </div>
        </header>
    );
}

export default Navbar;
