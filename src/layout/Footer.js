
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="row">
                <div className="column">
                    <div className='title'>Sobre Nós</div>
                    <div className='list_itens'>
                        <li>Vagas abertas</li>
                        <li>Política de recrutamento</li>
                    </div>
                </div>
                <div className="column">
                    <div className='title'>Projetos de Destaque</div>
                    <div className='list_itens'>
                        <li><a href='/'>Projeto 01</a></li>
                        <li><a href='/'>Projeto 02</a></li>
                    </div>
                </div>
                <div className="column">
                    <div className='title'>TotalExpress</div>
                    <div className='list_itens'>
                        <li>Contato: contato@totalexpress.com.br</li>
                        <li>Telefone: (18) 3916-7887</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
