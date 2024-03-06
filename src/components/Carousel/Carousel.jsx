import React, { Component } from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import sliderImageCeremony from "../SliderImage/sliderImageCeremony";
import './Carousel.css'


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
        return this.state.images.map((image) => {
// console.log(image)
            return (
                <div className={image.layout} key={this.state.key}>
                    <img src={image.urls} alt='' />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
            )
        })
    }

    render() {
        return (
            // width was auto
            <div className='carousel-outer' style={{ maxHeight: '100%', maxWidth: '100%', width: '100%' }} key={this.state.key}>
                <Carousel
                    autoPlay={this.state.autoPlay}
                    interval={7500}
                    infiniteLoop={true}
                    stopOnHover={false}
                    showThumbs={false}
                    dynamicHeight={true}
                    showThumbs={false}
                    swipeable={false}
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
                {/* <span onClick={()=>this.setState({autoPlay: !this.state.autoPlay})}>pause</span> */}
            </div>

        );
    }
};
