/* eslint-disable jsx-a11y/alt-text */
import './HelpDesk.css'
import baloon from '../img/baloon.png'
import call_center from '../img/call_center.png'
import desktop from '../img/desktop.png'


function HelpDesk() {
    return (
        <div className='container'>
            <div class='sb-box-container'>
                <img src={desktop} />
                <div className='text_container'>
                    <p className='title'>ENTRE EM CONTATO</p>
                    <p>(04) 298 3985 2092</p>
                    <p>+76 209 1092 4095</p>
                    <p className='bold'>contato@totalexpress.com.br</p>
                </div>
            </div>

            <div id='helpdesk' class="helpdesk-container">
                <div class="search-container">
                    <h1>Help desk</h1>
                    <p>Bem vindo a central de ajuda</p>
                    <input placeholder="Encontrar ajuda e serviços"></input>
                    <div class="box-container-container">

                        <div class='box-container'>
                            <img src={baloon} />
                            <div className='text-div'>Forum de Duvidas</div>
                        </div>
                        <div class='box-container'>
                            <img src={call_center} />
                            <div className='text-div'>Suporte</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HelpDesk;
