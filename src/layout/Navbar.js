import React from 'react';
import './Navbar.css';
import logo from '../img/logo.png'


const Navbar = () => {
    return (
        <header class="navbar">
            <div class="navbar-header">
                <img class="logo-image" src={logo} alt="imagem" />
            </div>
            <div class="navbar-menu">
                <a class="item home-button" href="#home">Home</a>
                <a class="item portfolio-button" href="#portfolio">Portfólio</a>
                <a class="item helpdesk-button" href="#helpdesk">Help Desk</a>
            </div>
            <div class="navbar-direita"><button class="login-button">Login</button></div>
        </header>
    );
}

export default Navbar;
