/* eslint-disable jsx-a11y/alt-text */
import './HelpDesk.css'
import baloon from '../img/baloon.png'
import call_center from '../img/call_center.png'
import desktop from '../img/desktop.png'
import icon_loupe from '../img/icon_loupe.png'


function HelpDesk() {
    return (
        <div className='helpdesk_container' id='helpdesk'>
            <div class='helpdesk_sb_box'>
                <img src={desktop} />
                <div className='helpdesk_text'>
                    <p className='helpdesk_title'>ENTRE EM CONTATO</p>
                    <p>(04) 298 3985 2092</p>
                    <p>+76 209 1092 4095</p>
                    <p className='helpdesk_bold'>contato@totalexpress.com.br</p>
                </div>
            </div>

            <div>
                <div class="helpdesk_search">
                    <span className='helpdesk_title_second'>Help desk</span>
                    <span className='helpdesk_text_second'>Bem vindo a central de ajuda</span>
                    <div className='helpdesk_search_box'>
                        <input type="text" placeholder="Encontrar ajuda e serviços" />
                        <img src={icon_loupe} alt='' />
                    </div>
                </div>

                <div class="helpdesk_box_container">
                    <div class='helpdesk_box_container_second'>
                        <img src={baloon} />
                        <div className='helpdesk_text_container'>Forum de Duvidas</div>
                    </div>
                    <div class='helpdesk_box_container_second'>
                        <img src={call_center} />
                        <div className='helpdesk_text_container'>Suporte</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HelpDesk;
