// https://github.com/IamDyroz/carousel/blob/main/src/components/sliderImage.js

import React, { Component, useEffect, useState } from "react";
import SliderContent from "../SliderContent/SliderContent";
import Dots from "../Dots/Dots";
import Arrows from "../Arrows/Arrows.jsx";
// import sliderImage from "../SliderImage/sliderImage";
import DownloadButton from "../DownloadButton/DownloadButton"
// import sliderImage from "./sliderImage"
import "./Slider.css";



// export default class Slider extends Component {
//     state = {
//         sliderImage: [{}],
//         activeIndex: 0,
//         len: 0,
//         isHover: false,
//     }

//     setActiveIndex = () => {
//         // if (!isHover) {
//         const interval = setInterval(() => {
//             console.log('ai: ', this.state.activeIndex)
//             this.setState({ activeIndex: this.state.activeIndex === this.state.len ? 0 : this.state.activeIndex + 1 })
//             // setTimeout(() => {

//             //     console.log('ai: ', this.state.activeIndex)
//             // }, 500);
//             // setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
//         }, 5000);
//         // }, 50000);
//         // clearInterval(interval);
//         return () => clearInterval(interval);
//         // }
//     }


//     componentDidMount() {
//         this.setState({ sliderImage: this.props.sliderImage, len: this.props.sliderImage.length - 1, activeIndex: 0 })
//         setTimeout(() => {
//             this.setActiveIndex()
//         }, 5000);
//     }

//     componentDidUpdate(prevProps) {
//         if (prevProps !== this.props) {
//             this.setState({ sliderImage: this.props.sliderImage, len: this.props.sliderImage.length - 1, activeIndex: 0 })
//             setTimeout(() => {
//                 this.setActiveIndex()
//             }, 5000);
//         }
//     }

//     render() {
//         return (
//             <>
//                 {
//                     this.state.len === 0
//                         ?
//                         <>loading</>
//                         :
//                         // {/* Add pause either by mouse in or button */ }
//                         < div className="slider-container" >
//                             <SliderContent activeIndex={this.state.activeIndex} sliderImage={this.state.sliderImage} album={this.props.album} />
//                             <Arrows
//                                 prevSlide={() =>
//                                     this.setActiveIndex(this.state.activeIndex < 1 ? this.state.len : this.state.activeIndex - 1)
//                                 }
//                                 nextSlide={() =>
//                                     this.setActiveIndex(this.state.activeIndex === this.state.len ? 0 : this.state.activeIndex + 1)
//                                 }
//                             />
//                             <Dots
//                                 activeIndex={this.state.activeIndex}
//                                 sliderImage={this.state.sliderImage}
//                                 onclick={console.log('clicked'), () => this.setActiveIndex(this.state.activeIndex)}
//                             />
//                             {/* Getting a cannot read name error */}
//                             {/* <DownloadButton activeIndex={activeIndex} sliderImage={sliderImage} album={props.album} /> */}
//                         </div>

//                 }

//             </>
//         )
//     }
// }


// const len = sliderImage.length - 1;

function Slider(props) {
    let sliderImage = props.sliderImage
    // const len = props.sliderImage.length - 1;

    const [activeIndex, setActiveIndex] = useState(0);
    const [len, setLen] = useState(0);
    const [isHover, setIsHover] = useState(false);

    const createInterval=()=>{
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 5000);
        // }, 50000);
        return () => clearInterval(interval);
    }

    useEffect(()=>{
        setActiveIndex(0)
        setLen(props.sliderImage.length -1)
        setTimeout(() => {
            setActiveIndex(activeIndex+1)
        }, 5000);
    },[props])

    useEffect(() => {
       
        // if (!isHover) {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 5000);
        // }, 50000);
        return () => clearInterval(interval);
        // }
        
    }, [activeIndex, props]);

    // useEffect(() => {
       
    //     // if (!isHover) {
    //     const interval = setInterval(() => {
    //         setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    //     }, 5000);
    //     // }, 50000);
    //     return () => clearInterval(interval);
    //     // }
        
    // }, []);


    return (
        <div className="slider-container" >
            <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} album={props.album} />
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
