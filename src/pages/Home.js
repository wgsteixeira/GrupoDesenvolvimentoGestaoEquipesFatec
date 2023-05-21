import './Home.css';
import logo_brand from '../img/logo_brand.png'
import map from '../img/map.png'

function Home() {
    return (
        <div id='home' className='container'>
            <div className='aside'>
                <div class="hexagono">
                    <img className='logo_brand' src={logo_brand} alt="imagem"/>
                </div>
                <div className='slogan'>"ACCURATE AND FAST"</div>
                <div className='name'>TOTAL EXPRESS</div>
            </div>
                    
            <div>
                <div class="mapa">
                    <img className='map_img' src={map} alt="imagem do canto"/>
                </div>
                <h2>TOTAL EXPRESS</h2>
                <h3>QUEM SOMOS?</h3>
                <div className='text'>
                    A EMPRESA TOTAL EXPRESS NASCEU EM PRESIDENTE PRUDENTE - SP EM 2019. BUSCAMOS SEMPRE PENSAR A FRENTE, OFERECENDO INOVAÇÃO NO CENÁRIO LOGÍSTICO,
                    PROPORCIONANDO ATENDIDO E QUALIDADE EM TODAS NOSSAS OPERAÇÕES, TEMOS COMO NOSSA MISSÃO, ENTREGAR O MELHOR NO QUE DIZ RESPEITO A
                    ARMAZENAMENTO E CONTROLE LOGÍSTICO, NO MENOR  PRAZO E COM O MENOR CUSTO POSSÍVEL, GARANTINDO ASSIM EXCELÊNCIA DAS NOSSAS OPERAÇÕES. 
                </div>
            </div>
        </div>
    )
}

export default Home;
