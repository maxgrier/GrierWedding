import React from 'react';
import { Link } from 'react-router-dom'
import albumImage from '../SliderImage/albumImage'
import './Album.css'
import DownloadButton from '../DownloadButton/DownloadButton';


function Album(props) {
    let count = [1]
    // let len = props.sliderImage.length
    // let len = albumImage.length

    let makeRows = () => {
        try {

            return albumImage.map((slide, idx) => {
                return (
                    <div key={idx} className='album-image-outer' style={{backgroundImage: 'url('+slide.urls+')'}}>
                        <Link to={slide.link}>
                        <div className='album-download-outer'>

                            <div className={'album-text'}>
                                <h2>{slide.title}</h2>
                                <h5>{slide.count + ' images'}</h5>
                                {/* <h5>{len + ' images'}</h5> */}
                            </div>
                            {/* <img className="album-image" src={slide.urls} alt="" /> */}
                            </div>
                        </Link>
                    </div>
                )
            })
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <div className='album-row'>
                {makeRows()}

                {/* <div className='gallery-image-outer'>
                    <div className={'album-text-outer'}>
                        <h2>{props.title}</h2>
                        <h5>{len + ' images'}</h5>
                    </div>
                    <img className="gallery-image" src={props.sliderImage[0].urls} alt="" />
                </div> */}
            </div>
        </>
    )
}

export default Album;