import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="row">
                <div className="column">
                    <h3>Sobre Nós</h3>
                    <ul>
                        <li>Vagas abertas</li>
                        <li>Política de recrutamento</li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Projetos de Destaque</h3>
                    <ul>
                        <li><a href='#'>Projeto 01</a></li>
                        <li><a href='#'>Projeto 02</a></li>
                    </ul>
                </div>
                <div className="column">
                    <h3>TotalExpress</h3>
                    <ul>
                        <li>Contato: contato@totalexpress.com.br</li>
                        <li>Telefone: (18) 3916-7887</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
