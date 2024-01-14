import React from "react";
import DownloadButton from "../DownloadButton/DownloadButton";

function SliderContent({ activeIndex, sliderImage, album }) {
    return (
        <section>
            {sliderImage.map((slide, index) => (
                <div
                    key={index}
                    className={index === activeIndex ? "slides active" : "inactive"}
                >
                    <img className="slide-image" src={slide.urls} alt="" />
                    {/* <h2 className="slide-title">{slide.title}</h2>
                    <h3 className="slide-text">{slide.description}</h3> */}
                    {/* <DownloadButton filename={slide.name} filename={slide.name2}/> */}
                </div>
            ))}
        </section>
    );
}

export default SliderContent;