import React from 'react';
import './DownloadButton.css';
import im from '../../assets/DSC00574.jpg'

function DownloadButton(props) {
    // console.log('download album ', props.album)
    let idx = props.activeIndex
    let slide = props.sliderImage[idx]

    return (
        <div className="download-outer">
            <a href={require('../../assets/'+props.album + slide.name)} download={slide.name2}></a>

            {/* {
                false
                    ?
                    <a href={require('../../assets/' + slide.name)} download={slide.name2}></a>
                    :

                    <a href={require('../../assets/' + props.image.name)} download={props.image.name2}></a>
            } */}
            {/* <a href={im} download={slide.name2}>download logo</a> */}
        </div>
    )
}

export default DownloadButton;