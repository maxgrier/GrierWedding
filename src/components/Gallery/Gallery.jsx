import React from 'react';
// import sliderImages from '../SliderImage/sliderImage'
import DownloadButton from '../DownloadButton/DownloadButton';
import './Gallery.css'


function Gallery(props) {
    let sliderImages = props.sliderImage
    // console.log(sliderImages)

    // Adjust to make a row for every three items
    let makeRows = () => {
        try{

            return sliderImages.map((slide, idx) => {
                return (
                    <div className='gallery-image-outer'>
                        <img className="gallery-image" src={slide.urls} alt="" />
                        <div className='gallery-download-outer'>
                            {/* Getting a cannot read 'name' error */}
                            {/* <DownloadButton activeIndex={idx} sliderImage={sliderImages} album={props.album} /> */}
                        </div>
                    </div>
                )
            })
        }catch(e){
            console.log(e)
        }
    }

    return (
        <>
            {/* <div className='gallery-header'>
                <h1>Gallery</h1>
            </div> */}
            <div className="sub-category">
                <h2>Portraits</h2>
            </div>
            <div className='gallery-row'>
                {makeRows()}
                {/* <div className='gallery-image-outer'>
                    <img className="gallery-image" src={sliderImages[0].urls} alt="" />
                    <div className='gallery-download-outer'>
                        <DownloadButton activeIndex={0} sliderImage={sliderImages} album={props.album} />
                    </div>
                </div> */}
                {/* <div className='gallery-image-outer'>
                    <img className="gallery-image" src={sliderImages[1].urls} alt="" />
                    <div className='gallery-download-outer'>
                        <DownloadButton activeIndex={1} sliderImage={sliderImages} album={''} />
                    </div>
                </div>
                <div className='gallery-image-outer'>
                    <img className="gallery-image" src={sliderImages[2].urls} alt="" />
                    <div className='gallery-download-outer'>
                        <DownloadButton activeIndex={2} sliderImage={sliderImages} album={''} />
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Gallery;