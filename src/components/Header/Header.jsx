import React, {useLayoutEffect} from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header(props) {
    useLayoutEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
    let homeButtonClass
    if (props.notHome) {
        homeButtonClass = 'home-button visible'
    } else {
        homeButtonClass = 'home-button invisible'
    }
    return (
        <div className="header-outer">
            <div className='home-outer'>
                <div className='img-outer'>
                    <Link to='/WeddingPhotos' >
                        <span className={homeButtonClass}></span>
                    </Link>
                </div>
            </div>
            <div className='title-outer'>
                <h1>The Grier Wedding</h1>
                <div className="date-outer">
                    <span>7-15-2023</span>
                    {/* <br/> */}
                    <span>Edmonds, WA</span>
                </div>
            </div>
        </div>
    )
}

export default Header;