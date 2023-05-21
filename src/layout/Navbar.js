import React from 'react';
import './Navbar.css';
import logo from '../img/logo.png'


const Navbar = () => {
    return (
        <header class="nav">
            <nav class="centered-nav">
                <a href="#home">Home</a>
                <a href="#portfolio">Portfólio</a>
                <a href="#helpdesk">Help Desk</a>
            </nav>
            <img className='logo' src={logo} alt="imagem" />
            <div class="right-nav">
                <button>Login</button>
            </div>
        </header>
    );
}

export default Navbar;
