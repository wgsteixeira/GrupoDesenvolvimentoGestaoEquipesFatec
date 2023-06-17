import React from 'react';
import { useState } from 'react';
import './Navbar.css';
import logo from '../img/logo.png'
import { Modal } from 'react-overlays';


const Navbar = () => {
    // React state to control Modal visibility
    const [showModal, setShowModal] = useState(false);

    // Backdrop JSX code
    const renderBackdrop = (props) => <div className="backdrop" {...props} />;

    var handleClose = () => setShowModal(false);

    var handleSuccess = () => {
        console.log("success");
    };
    return (
        <header className="navbar">
            <div className=" navbar-header">
                <img className="logo-image" src={logo} alt="imagem" />
            </div>
            <div className=" navbar-menu">
                <a className="item-nav home-button" href="#home">Home</a>
                <a className="item-nav catalogo-button" href="#catalogo">Catálogo de Serviços</a>
                <a className="item-nav helpdesk-button" href="#helpdesk">Help Desk</a>
            </div>
            <div className=" navbar-direita"><button id="login-button" className="login-button" onClick={() => setShowModal(true)}>Login</button></div>
            <Modal className="modal"
                show={showModal}
                onHide={handleClose}
                renderBackdrop={renderBackdrop}>
                <div>
                    <div className="modal-header">
                        <div className="modal-title">LOGIN DO USUÁRIO</div>
                        <div>
                            <span className="close-button" onClick={handleClose}>
                                x
                            </span>
                        </div>
                    </div>
                    <div className="modal-desc">
                        <form>
                            <label for="email">E-mail</label><br></br>
                            <input type="text" placeholder='Digite o E-mail'></input><br></br>
                            <label for="senha">Senha</label><br></br>
                            <input type="text" placeholder='Digite a Senha'></input><br></br>
                            <input type="submit" value="Login"></input><br></br>
                            <input type="button" onClick={handleClose} value="Cancelar"></input><br></br>
                            <p><input type="checkbox"></input>Lembrar Senha</p>
                            <a href="#">Esqueceu a senha?</a><br></br>
                            <p>Não está registrado? <a href="#">Registrar</a></p>
                        </form>
                    </div>
                </div>
            </Modal>
        </header>
    );
}

export default Navbar;
