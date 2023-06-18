
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer_container">
            <div className="footer_row">
                <div className="footer_column">
                    <div className='footer_title'>Sobre Nós</div>
                    <div className='footer_list_itens'>
                        <li>Vagas abertas</li>
                        <li>Política de recrutamento</li>
                    </div>
                </div>
                <div className="footer_column">
                    <div className='footer_title'>Projetos de Destaque</div>
                    <div className='footer_list_itens'>
                        <li><a href='/'>Projeto 01</a></li>
                        <li><a href='/'>Projeto 02</a></li>
                    </div>
                </div>
                <div className="footer_column">
                    <div className='footer_title'>TotalExpress</div>
                    <div className='footer_list_itens'>
                        <li>Contato: contato@totalexpress.com.br</li>
                        <li>Telefone: (18) 3916-7887</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
