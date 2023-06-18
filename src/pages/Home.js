import './Home.css';
import logo_brand from '../img/logo_brand.png'
import map from '../img/map.png'

function Home() {
    return (
        <div id='home' className='home_container'>
            <div className='home_aside'>
                <div className="home_hexagono">
                    <img className='home_logo_brand' src={logo_brand} alt="imagem" />
                </div>
                <div className='home_slogan'>"ACCURATE AND FAST"</div>
                <div className='home_name'>TOTAL EXPRESS</div>
            </div>

            <div>
                <div className="home_mapa">
                    <img className='home_map_img' src={map} alt="imagem do canto" />
                </div>
                <div className='home_title'>TOTAL EXPRESS </div>
                <div className='home_about'>QUEM SOMOS?</div>
                <div className='home_text'>
                    A EMPRESA TOTAL EXPRESS NASCEU EM PRESIDENTE PRUDENTE - SP EM 2019. BUSCAMOS SEMPRE PENSAR A FRENTE, OFERECENDO INOVAÇÃO NO CENÁRIO LOGÍSTICO,
                    PROPORCIONANDO ATENDIDO E QUALIDADE EM TODAS NOSSAS OPERAÇÕES, TEMOS COMO NOSSA MISSÃO, ENTREGAR O MELHOR NO QUE DIZ RESPEITO A
                    ARMAZENAMENTO E CONTROLE LOGÍSTICO, NO MENOR  PRAZO E COM O MENOR CUSTO POSSÍVEL, GARANTINDO ASSIM EXCELÊNCIA DAS NOSSAS OPERAÇÕES.
                </div>
            </div>
        </div>
    )
}

export default Home;
