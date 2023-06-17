/* eslint-disable jsx-a11y/alt-text */
import './HelpDesk.css'
import baloon from '../img/baloon.png'
import call_center from '../img/call_center.png'
import desktop from '../img/desktop.png'
import icon_loupe from '../img/icon_loupe.png'


function HelpDesk() {
    return (
        <div className='container' id='helpdesk'>
            <div className='sb-box-container'>
                <img src={desktop} />
                <div className='text_container'>
                    <p className='title'>ENTRE EM CONTATO</p>
                    <p>(04) 298 3985 2092</p>
                    <p>+76 209 1092 4095</p>
                    <p className='bold'>contato@totalexpress.com.br</p>
                </div>
            </div>

            <div className="helpdesk-container">
                <div className="search-container">
                    <span className='title_component'>Help desk</span>
                    <span className='text_component'>Bem vindo a central de ajuda</span>
                    <div className='search_box'>
                        <input type="text" placeholder="Encontrar ajuda e serviços"/>                        
                        <img src={icon_loupe} alt=''/>                        
                    </div>
                </div>

                <div className="box-container-container">
                    <div className='box-container'>
                        <img src={baloon} />
                        <div className='text-div'>Forum de Duvidas</div>
                    </div>
                    <div className='box-container'>
                        <img src={call_center} />
                        <div className='text-div'>Suporte</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HelpDesk;
