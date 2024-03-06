import React from "react";
import DownloadButton from "../DownloadButton/DownloadButton";

function SliderContent({ activeIndex, sliderImage, album }) {
    // console.log('content')
    // console.log(sliderImage[0])
    let layout
    if (sliderImage.layout){
        layout = sliderImage.layout
    }
    // console.log('width', sliderImage[0].urls.width(), 'height', sliderImage[0],urls.height());

    return (
        <section>
            {sliderImage.map((slide, index) => (
                <div
                    key={index}
                    className={index === activeIndex ? "slides active " + slide.layout : "inactive"}
                >
                    <img className={"slide-image " + slide.layout} src={slide.urls} alt="" />
                    {/* <h2 className="slide-title">{slide.title}</h2>
                    <h3 className="slide-text">{slide.description}</h3> */}
                    {/* <DownloadButton filename={slide.name} filename={slide.name2}/> */}
                </div>
            ))}
        </section>
    );
}

export default SliderContent;