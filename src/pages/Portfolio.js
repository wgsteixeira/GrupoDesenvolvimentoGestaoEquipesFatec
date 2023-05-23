import './Portfolio.css'
import document from '../img/document.png'

function Portfolio() {
    return (
        <div id="portfolio" className="container">
            <div className='carrossel'>
                <div className='item'>
                    <div className='logo-document'>
                        <img src={document} />
                    </div>
                    <span className='name'>Abertura de chamados</span>
                    <span className='description'>akjsdgvkiashgrdfouaesbfiuhwuioashrfoiaewharopifjh</span>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;