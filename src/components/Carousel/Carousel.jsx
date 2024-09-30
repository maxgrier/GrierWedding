import React, { Component } from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import sliderImageCeremony from "../SliderImage/sliderImageCeremony";
import './Carousel.css'
// import ImageComponent from '../ProgressiveImage/ProgressiveImage';
import ImageComponent from "../ImageComponent/ImageComponent";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LazyLoadImageComponent from "../LazyLoadImageComponent/LazyLoadImageComponent";
import Font from 'react-font';

import pauseButton from '../../assets/images/carousel/pause_button.png';
import playButton from '../../assets/images/carousel/play_button.png';




export default class DemoCarousel extends Component {

    state = {
        images: [],
        key: 0,
        wasAutoPlay: true,
        autoPlay: true,

        selectedItem:0,
        id: 'playing'
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

    // Make for smoother transition between pause and play 
    getId = () => {
        if(this.state.wasAutoPlay === false && this.state.autoPlay === true){
            this.setState({id: 'playing-temp'}) 
            setTimeout(() => {
                this.setState({id: 'playing'}) 
            }, 7500);
        }else if(this.state.wasAutoPlay === true && this.state.autoPlay === true){
                this.setState({id: 'playing'}) 
        }else if(this.state.autoPlay === false){
                this.setState({id: 'paused'}) 
        }else{
            this.setState({id: 'playing'}) 
        }
    }
    makeImages = () => {
        return this.state.images.map((image,idx) => {
// console.log(image)
            if(idx < 15){
                return (
                    // <div className={image.layout} id={this.state.autoPlay ? 'playing' : 'paused'} key={this.state.key} onClick={()=>this.setState({autoPlay: !this.state.autoPlay})}>
                    <div className={image.layout} id={this.state.id} key={this.state.key} onClick={()=>this.setState({autoPlay: !this.state.autoPlay})}>
                        <ImageComponent src={image.urls} />
                        {/* <link rel="preload" as="image" href={image.urls}></link> */}
                        {/* <img src={image.urls} alt='' loading={'eager'}/> */}
                        {/* <img src={image.urls} alt='' loading={'lazy'}/> */}

                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                )
            }else{
                return (
                    // <div className={image.layout} id={this.state.autoPlay ? 'playing' : 'paused'} key={this.state.key} onClick={()=>this.setState({autoPlay: !this.state.autoPlay})}>
                    <div className={image.layout} id={this.state.id} key={this.state.key} >
                        {/* <ImageComponent src={image.urls} /> */}
                        
                        {/* <LazyLoadImage src={image.urls} alt="Lazy loaded image" effect="blur" /> */}
                        <LazyLoadImageComponent  src={image.urls} alt="Lazy loaded image"  />

                        {/* <LazyLoadImageComponent src={image.urls} alt="Lazy loaded image" effect="blur" /> */}

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
                    // onClick={()=>{console.log('click')}}
                    // onHover={()=>{console.log('hover')}}
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
                <Font family="Great Vibes">
                    <span className={'pause-play-text'} onClick={()=>this.setState({wasAutoPlay: this.state.autoPlay, autoPlay: !this.state.autoPlay},()=>this.getId())}>
                {this.state.autoPlay 
                // ? <img src={pauseButton}/> 
                ? 'pause'
                // : <img src={playButton}/> 
                : 'play'
                }
                </span>
                </Font>

            </div>

        );
    }
};
