import React, { Component } from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import sliderImageCeremony from "../SliderImage/sliderImageCeremony";
import './Carousel.css'
// import ImageComponent from '../ProgressiveImage/ProgressiveImage';
import ImageComponent from "../ImageComponent/ImageComponent";
import { LazyLoadImage } from 'react-lazy-load-image-component';




export default class DemoCarousel extends Component {

    state = {
        images: [],
        key: 0,
        autoPlay: true,

        selectedItem:0,
    }

    componentDidUpdate(prevProps){
        if(prevProps !== this.props){
            this.setState({ images: this.props.images})
            setTimeout(() => {
                this.setState({key: this.state.key+1})
            }, 200);
        }
    }

    componentDidMount() {
        this.setState({ images: this.props.images })
        setTimeout(() => {
            this.setState({key: this.state.key+1})
        }, 100);
        // setTimeout(() => {
            
        //     this.makeImages()
        // }, 1000);
    }

    makeImages = () => {
        return this.state.images.map((image,idx) => {
// console.log(image)
            if(idx < 10){
                return (
                    <div className={image.layout} key={this.state.key}>
                        <ImageComponent src={image.urls} />
                        {/* <link rel="preload" as="image" href={image.urls}></link> */}
                        {/* <img src={image.urls} alt='' loading={'eager'}/> */}
                        {/* <img src={image.urls} alt='' loading={'lazy'}/> */}

                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                )
            }else{
                return (
                    <div className={image.layout} key={this.state.key}>
                        <LazyLoadImage src={image.urls} alt="Lazy loaded image" effect="blur" />
                        {/* <img src={image.urls} alt='' loading={'lazy'}/> */}
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                )
            }
            
        })
    }

    render() {
        return (
            // width was auto
            <div className='carousel-outer' style={{ maxHeight: '100%', maxWidth: '100%', width: '100%' }} key={this.state.key}>
                <Carousel
                    // autoPlay={this.state.autoPlay}
                    autoPlay={this.state.autoPlay}
                    interval={7500}
                    infiniteLoop={true}
                    stopOnHover={false}
                    showThumbs={false}
                    dynamicHeight={true}
                    showThumbs={false}
                    swipeable={true}
                    showIndicators={false}
                    // selectedItem={this.state.selectedItem}
                // transitionTime={2000}
                // animationHandler={'slide'}
                // centerMode={true}
                // width={'100%'}

                >
                    {this.makeImages()}
                    {/* <div className={sliderImageCeremony[0].layout}>
                        <img src={sliderImageCeremony[0].urls} alt='' />
                    </div>
                    <div className={sliderImageCeremony[1].layout}>
                        <img src={sliderImageCeremony[1].urls} alt='' />
                    </div>
                    <div className={sliderImageCeremony[2].layout}>
                        <img src={sliderImageCeremony[2].urls} alt='' />
                    </div> */}

                </Carousel>
                {/* Would need to change animation */}
                {/* <span onClick={()=>this.setState({autoPlay: !this.state.autoPlay})}>{this.state.autoPlay ? 'pause' : 'play'}</span> */}
            </div>

        );
    }
};
