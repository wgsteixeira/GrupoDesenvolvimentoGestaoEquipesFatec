import './Home.css';
import logo_brand from '../img/logo_brand.png'

function Home() {
    return (
        <div className='container'>
            <div className='home-container-first'>
                <div className='brand'>
                    <img className='img-brand' src={logo_brand} />
                    <div className='slogan-text'>
                        <p>"ACCURATE AND FAST"</p>
                        <p>TotalExpress</p>
                    </div>
                </div>
            </div>

            <div id='home' className='home-container-second'>
                <div className='home-container-second-text'>
                    <h1 className='title'>TOTAL EXPRESS</h1>
                    <h2>QUEM SOMOS?</h2>
                    <p>A EMPRESA TOTAL EXPRESS NASCEU EM PRESIDENTE
                        PRUDENTE-SP EM 2019.BUSCAMOS SEMPRE PENSAR
                        A FRENTE, OFERECENDO INOVAÇÃO NO CENÉRIO
                        LOGÍSTICO, PROPORCIONANDO ATENDIDO E QUALIDADE
                        EM TODAS NOSSAS OPERAÇÕES, TEMOS COMO NOSSA
                        MISSÃO, ENTREGAR O MELHOR NO QUE DIZ RESPEITO A
                        ARMAZENAMENTO E CONTROLE LOGÍSTICO, NO MENOR
                        PRAZO E COM O MENOR CUSTO POSSÍVEL, GARANTINDO
                        ASSIM EXCELÊNCIA DAS NOSSAS OPERAÇÕES.</p>
                </div>
            </div>
        </div>


    )
}

export default Home;