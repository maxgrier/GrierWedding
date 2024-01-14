// https://github.com/IamDyroz/carousel/blob/main/src/components/sliderImage.js

import React, { useEffect, useState } from "react";
import SliderContent from "../SliderContent/SliderContent";
import Dots from "../Dots/Dots";
import Arrows from "../Arrows/Arrows.jsx";
// import sliderImage from "../SliderImage/sliderImage";
import DownloadButton from "../DownloadButton/DownloadButton"
// import sliderImage from "./sliderImage"
import "./Slider.css";

// const len = sliderImage.length - 1;

function Slider(props) {
    let sliderImage = props.sliderImage
    const len = props.sliderImage.length - 1;

    const [activeIndex, setActiveIndex] = useState(0);
    const [isHover, setIsHover] = useState(false);

    useEffect(() => {
        // if (!isHover) {
            const interval = setInterval(() => {
                setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
            }, 5000);
            // }, 50000);
            return () => clearInterval(interval);
        // }
    }, [activeIndex]);

    return (
        <div className="slider-container" onMouseEnter={() => { console.log('hovering1') }} onMouseLeave={() => { console.log('left') }}>
            <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} album={props.album} onMouseEnter={() => { console.log('hovering2') }} />
            <Arrows
                prevSlide={() =>
                    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                }
                nextSlide={() =>
                    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
                }
            />
            <Dots
                activeIndex={activeIndex}
                sliderImage={sliderImage}
                onclick={(activeIndex) => setActiveIndex(activeIndex)}
            />
            {/* Getting a cannot read name error */}
            {/* <DownloadButton activeIndex={activeIndex} sliderImage={sliderImage} album={props.album} /> */}
        </div>
    );
}

export default Slider;
