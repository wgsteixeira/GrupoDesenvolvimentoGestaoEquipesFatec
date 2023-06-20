import React from 'react';
import { useState } from 'react';
import './Navbar.css';
import logo from '../img/logo.png'
import { Modal } from 'react-overlays';


const Navbar = () => {
    // React state to control Modal visibility
    const [showModalLogin, setShowModalLogin] = useState(false);
    const [showModalRegistro, setShowModalRegistro] = useState(false);

    // Backdrop JSX code
    const renderBackdrop = (props) => <div className="nav_backdrop" {...props} />;

    var handleCloseLogin = () => setShowModalLogin(false);
    var handleCloseRegistro = () => setShowModalRegistro(false);

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
            <div className="nav_navbar-direita"><button id="login-button" className="nav_login-button" onClick={() => setShowModalLogin(true)}>Login</button></div>


            <Modal className="nav_modal"
                show={showModalLogin}
                onHide={handleCloseLogin}
                renderBackdrop={renderBackdrop}>
                <div>
                    <div className="nav_modal-header">
                        <div className="nav_modal-title">LOGIN DO USUÁRIO</div>
                    </div>
                    <div className="nav_modal-desc">
                        <form>
                            <div className="nav_modal-item">E-mail<br></br>
                                <input className="nav_modal-input" type="text" placeholder='Digite E-mail' />
                            </div>
                            <div className="nav_modal-item">Senha<br></br>
                                <input className="nav_modal-input" type="text" placeholder='Digite a Senha' /><br></br>
                            </div>

                            <div className='nav_modal-buttons'>
                                <input className="nav_modal-loginbutton" type="submit" value="Login" /><br></br>
                                <input className='nav_modal-cancelbutton' type="button" onClick={handleCloseLogin} value="Cancelar"></input>
                            </div>


                            <div className='nav_modal-bottom'>
                                <span>
                                    <input type="checkbox" />Lembrar Senha
                                </span>
                                <a href="/">Esqueceu a senha?</a><br></br>
                            </div>
                            <div className='nav_modal-footer'>
                                <span>Não está registrado? <span className='nav_modal-registro' onClick={() => setShowModalRegistro(true)}>Registrar</span></span>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>

            <Modal className="nav_modal"
                show={showModalRegistro}
                onHide={handleCloseRegistro}
                renderBackdrop={renderBackdrop}>
                <div>
                    <div className="nav_modal-header">
                        <div className="nav_modal-title">REGISTRAR USUÁRIO</div>
                    </div>
                    <div className="nav_modal-desc">
                        <form>
                            <div className="nav_modal-item">Nome<br></br>
                                <input className="nav_modal-input" type="text" placeholder='Digite o nome' />
                            </div>
                            <div className="nav_modal-item">E-mail<br></br>
                                <input className="nav_modal-input" type="text" placeholder='Digite E-mail' />
                            </div>
                            <div className="nav_modal-item">Senha<br></br>
                                <input className="nav_modal-input" type="text" placeholder='Digite a senha' /><br></br>
                            </div>
                            <div className="nav_modal-item">Confiarmar Senha<br></br>
                                <input className="nav_modal-input" type="text" placeholder='Digite a senha' /><br></br>
                            </div>
                            <div className="nav_modal-item">Departamento<br></br>
                                <input className="nav_modal-input" type="text" placeholder='Digite o Departamento' /><br></br>
                            </div>
                            <div className='nav_modal-buttons'>
                                <input className="nav_modal-loginbutton" type="submit" value="Registrar" /><br></br>
                                <input className='nav_modal-cancelbutton' type="button" onClick={handleCloseRegistro} value="Cancelar"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>

        </header>
    );
}

export default Navbar;

