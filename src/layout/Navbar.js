import React from 'react';
import { useState } from 'react';
import './Navbar.css';
import logo from '../img/logo.png'
import { Modal } from 'react-overlays';


const Navbar = () => {
    // React state to control Modal visibility
    const [showModal, setShowModal] = useState(false);

    // Backdrop JSX code
    const renderBackdrop = (props) => <div className="nav_backdrop" {...props} />;

    var handleClose = () => setShowModal(false);

    // var handleSuccess = () => {
    //     console.log("success");
    // };
    return (
        <header className="nav_navbar">
            <div className="nav_navbar-header">
                <img className="nav_logo-image" src={logo} alt="imagem" />
            </div>
            <div className="nav_navbar-menu">
                <a className="nav_item-nav nav_home-button" href="#home">Home</a>
                <a className="nav_item-nav nav_catalogo-button" href="#catalogo">Catálogo de Serviços</a>
                <a className="nav_item-nav nav_helpdesk-button" href="#helpdesk">Help Desk</a>
            </div>
            <div className="nav_navbar-direita"><button id="login-button" className="nav_login-button" onClick={() => setShowModal(true)}>Login</button></div>
            <Modal className="nav_modal"
                show={showModal}
                onHide={handleClose}
                renderBackdrop={renderBackdrop}>
                <div>
                    <div className="nav_modal-header">
                        <div className="nav_modal-title">LOGIN DO USUÁRIO</div>
                        <div>
                            <span className="nav_close-button" onClick={handleClose}>
                                x
                            </span>
                        </div>
                    </div>
                    <div className="nav_modal-desc">
                        <form>
                            <label for="email">E-mail</label><br></br>
                            <input type="text" placeholder='Digite o E-mail'></input><br></br>
                            <label for="senha">Senha</label><br></br>
                            <input type="text" placeholder='Digite a Senha'></input><br></br>
                            <input type="submit" value="Login"></input><br></br>
                            <input type="button" onClick={handleClose} value="Cancelar"></input><br></br>
                            <p><input type="checkbox"></input>Lembrar Senha</p>
                            <a href="/">Esqueceu a senha?</a><br></br>
                            <p>Não está registrado? <a href="/">Registrar</a></p>
                        </form>
                    </div>
                </div>
            </Modal>
        </header>
    );
}

export default Navbar;
