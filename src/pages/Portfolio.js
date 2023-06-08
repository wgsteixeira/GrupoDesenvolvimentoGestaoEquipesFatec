import { useEffect, useState, useRef } from 'react';
import './Portfolio.css'

function Portfolio() {

    const [data, setData] = useState([]);

    const carousel = useRef(null);

    useEffect(() => {
        fetch('http://localhost:3000/static/shoes.json').then((response) => response.json()).then(setData);
    }, []);

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

    if (!data || !data.length) return null;
    return (
        <div className="container_portfolio" id="portfolio">
            <div className='carousel_portfolio' ref={carousel}>
                {data.map((item) => {
                    const { id, name, description, image } = item;
                    return (
                        <div className='item_portfolio' key={id} >
                            <div className='image_portfolio'>
                                <img src={image} alt={image} />
                            </div>
                            <div className='info_portfolio'>
                                <span className='name_portfolio'>{name}</span>
                                <span className='description'>{description}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className='buttons_portfolio'>
                <button onClick={hadleLeftClick}><img src='/static/images/216151_right_chevron_icon.png' alt='Scroll Left' /></button>
                <button onClick={hadleRightClick}><img src='/static/images/216151_right_chevron_icon.png' alt='Scroll Right' /></button>
            </div>
        </div>
    )
}

export default Portfolio;