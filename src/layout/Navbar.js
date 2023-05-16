import React from 'react';
import './Navbar.css';

const Navbar = () =>{
    return (
        <header class="nav">
            <nav class="centered-nav">
                <a href="#home">Home</a>
                <a href="#portifolio">Portfólio</a>
                <a href="#helpdesk">Help Desk</a>
            </nav>
            <a href="/#">Logo</a>
            <div class="right-nav">
                <button>Login</button>
            </div>
        </header>
    );
}

export default Navbar;
