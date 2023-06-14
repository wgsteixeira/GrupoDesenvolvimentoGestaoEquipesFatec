import { useRef } from 'react';
import './Catalogo.css'
import arrow_right from '../img/arrow_right.png'
import arrow_left from '../img/arrow_left.png'
import document from '../img/document.png'
import heart from '../img/heart.png'
import woman from '../img/woman.png'
import graphic from '../img/graphic.png'
import handshake from '../img/handshake.png'
import lightball from '../img/lightball.png'
import icons from '../img/icons.png'
import calendar from '../img/calendar.png'


function Catalogo() {

    const carousel = useRef(null);



    const hadleLeftClick = (e) => {
        e.preventDefault();
        console.log(carousel.current.offsetWidth);
        carousel.current.scrollLeft -= carousel.current
    }

    const hadleRightClick = (e) => {
        e.preventDefault();
        console.log(carousel.current.offsetWidth);
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }


    return (
        <div className="container_catalogo" id="catalogo">
            <div className='carousel_catalogo' ref={carousel}>

                <div className='item_catalogo' >
                    <div className='image_catalogo'>
                        <img src={document} alt='' />
                    </div>
                    <div className='info_catalogo'>
                        <span className='name_catalogo'>Abertura de Chamados</span>
                        <span className='description'>Organização das requisições feitas ao setor da TI, com o intuito de agilizar tal processo, para isso a TI irá desenvolver um formulário web para a abertura dos chamados, acesso permitido apenas para os funcionários da empresa</span>
                    </div>
                </div>

                <div className='item_catalogo' >
                    <div className='image_catalogo'>
                        <img src={heart} alt='' />
                    </div>
                    <div className='info_catalogo'>
                        <span className='name_catalogo'>Plataforma de comunicação</span>
                        <span className='description'>Gestão de relacionamento com o cliente que possibilite aos clientes e funcionários a sugestão de melhorias nas aplicações e serviços desenvolvidos não só pelo time de TI como de toda a organização, acesso permitido para clientes e funcionários</span>
                    </div>
                </div>

                <div className='item_catalogo' >
                    <div className='image_catalogo'>
                        <img src={woman} alt='' />
                    </div>
                    <div className='info_catalogo'>
                        <span className='name_catalogo'>Treinamento e desenvolvimento</span>
                        <span className='description'>Para que nossos colaboradores compreendam melhor o funcionamento dos processos e sistema desenvolvidos pela TI a fim de mitigar dúvidas e possíveis travas nas atividades desempenhadas, permitido acesso apenas para funcionários do setor específico</span>
                    </div>
                </div>

                <div className='item_catalogo' >
                    <div className='image_catalogo'>
                        <img src={graphic} alt='' />
                    </div>
                    <div className='info_catalogo'>
                        <span className='name_catalogo'>API com informações de monitoramento</span>
                        <span className='description'>Possibilitar integração com sistemas de clientes/ parceiros, permitido acesso para clientes e parceiros</span>
                    </div>
                </div>

                <div className='item_catalogo' >
                    <div className='image_catalogo'>
                        <img src={handshake} alt='' />
                    </div>
                    <div className='info_catalogo'>
                        <span className='name_catalogo'>Suporte técnico para aplicativos</span>
                        <span className='description'>O suporte associa coordenadas geográficas a determinados dados, o serviço possibilita sugestões de melhorias nas aplicações, no intuito de gerar informações relevantes para administração e logística, acesso permitido para funcionários do setor da TI</span>
                    </div>
                </div>

                <div className='item_catalogo' >
                    <div className='image_catalogo'>
                        <img src={lightball} alt='' />
                    </div>
                    <div className='info_catalogo'>
                        <span className='name_catalogo'>Administração de correio eletrônico</span>
                        <span className='description'>Administrar e operar soluções e serviços de correio eletrônico, acesso permitido apenas para funcionários da empresa</span>
                    </div>
                </div>

                <div className='item_catalogo' >
                    <div className='image_catalogo'>
                        <img src={icons} alt='' />
                    </div>
                    <div className='info_catalogo'>
                        <span className='name_catalogo'>Informações da empresa</span>
                        <span className='description'>Disponibilizar as informações dos clientes e dos funcionários, mas de uma forma que seja restrita de acordo com as permissões de acesso, para garantir confiabilidade e informações de forma indubitável</span>
                    </div>
                </div>

                <div className='item_catalogo' >
                    <div className='image_catalogo'>
                        <img src={calendar} alt='' />
                    </div>
                    <div className='info_catalogo'>
                        <span className='name_catalogo'>Enterprise application</span>
                        <span className='description'>O software de aplicativo corporativo integra sistemas de computador que executam todas as fases das operações de uma empresa. Eles permitem fluxos de trabalho cooperativos e reduzem a complexidade de grandes projetos</span>
                    </div>
                </div>

            </div>
            <div className='buttons_catalogo'>
                <button onClick={hadleLeftClick}><img src={arrow_left} alt='Scroll Left' /></button>
                <button onClick={hadleRightClick}><img src={arrow_right} alt='Scroll Right' /></button>
            </div>
        </div>
    )
}

export default Catalogo;