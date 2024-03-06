import React, { Component } from 'react';
// import sliderImages from '../SliderImage/sliderImage'
import DownloadButton from '../DownloadButton/DownloadButton';
import './Gallery.css'


export default class Gallery extends Component {

    state = {

    }

    // makeRows2 = () => {
    //     let len = this.state.sliderImages.length
    //     let count = 0
    //     for (let i = 0; i < len; i++) {
    //         if (count > 3) {
    //             return(<div className='gallery-row'>

    //             <div className={'gallery-image-outer'} id={layout}>
    //                 <img className="gallery-image" src={slide.urls} alt="" />
    //                 <div className='gallery-download-outer'>
    //                 </div>
    //                 </div>
    //             </div>)
    //             {count = 0}
    //         } else {
    //             <div className={'gallery-image-outer'} id={layout}>
    //                 <img className="gallery-image" src={slide.urls} alt="" />
    //                 <div className='gallery-download-outer'>
    //                 </div>
    //             </div>
    //         }
    //     }
    //     try {

    //         return this.state.sliderImages.map((slide, idx) => {
    //             let layout = slide.layout
    //             return (
    //                 <>
    //                     <div className={'gallery-image-outer'} id={layout}>
    //                         <img className="gallery-image" src={slide.urls} alt="" />
    //                         <div className='gallery-download-outer'>
    //                         </div>
    //                     </div>
    //                 </>
    //             )
    //         })
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }


    // Adjust to make a row for every three items
    makeRows = () => {
        try {

            return this.state.sliderImages.map((slide, idx) => {
                let layout = slide.layout
                return (
                    <>
                        <div className={'gallery-image-outer'} id={layout}>

                            {/* {slide.layout === 'portriat'
                        ?
                        <img className="gallery-image" src={slide.urls} alt="" />
                        :
                        <img className="gallery-image landscape" src={slide.urls} alt="" />
                        } */}
                            <img className="gallery-image" src={slide.urls} alt="" />

                            <div className='gallery-download-outer'>
                                {/* Getting a cannot read 'name' error */}
                                {/* <DownloadButton activeIndex={idx} sliderImage={sliderImages} album={props.album} /> */}
                            </div>
                        </div>
                    </>
                )
            })
        } catch (e) {
            console.log(e)
        }
    }

    componentDidMount() {
        this.setState({ sliderImages: this.props.sliderImage })
    }

    render() {
        return (
            <>
                <div className="sub-category">
                    <h2>Portraits</h2>
                </div>
                <div className='gallery-row'>
                    {this.makeRows()}
                </div>
            </>
        )
    }
}

// function Gallery(props) {
//     let sliderImages = props.sliderImage
//     // console.log(sliderImages)

//     // Adjust to make a row for every three items
//     let makeRows = () => {
//         try {

//             return sliderImages.map((slide, idx) => {
//                 return (
//                     <div className='gallery-image-outer'>
//                         <img className="gallery-image" src={slide.urls} alt="" />
//                         <div className='gallery-download-outer'>
//                             {/* Getting a cannot read 'name' error */}
//                             {/* <DownloadButton activeIndex={idx} sliderImage={sliderImages} album={props.album} /> */}
//                         </div>
//                     </div>
//                 )
//             })
//         } catch (e) {
//             console.log(e)
//         }
//     }

//     return (
//         <>
//             {/* <div className='gallery-header'>
//                 <h1>Gallery</h1>
//             </div> */}
//             <div className="sub-category">
//                 <h2>Portraits</h2>
//             </div>
//             <div className='gallery-row'>
//                 {makeRows()}
//                 {/* <div className='gallery-image-outer'>
//                     <img className="gallery-image" src={sliderImages[0].urls} alt="" />
//                     <div className='gallery-download-outer'>
//                         <DownloadButton activeIndex={0} sliderImage={sliderImages} album={props.album} />
//                     </div>
//                 </div> */}
//                 {/* <div className='gallery-image-outer'>
//                     <img className="gallery-image" src={sliderImages[1].urls} alt="" />
//                     <div className='gallery-download-outer'>
//                         <DownloadButton activeIndex={1} sliderImage={sliderImages} album={''} />
//                     </div>
//                 </div>
//                 <div className='gallery-image-outer'>
//                     <img className="gallery-image" src={sliderImages[2].urls} alt="" />
//                     <div className='gallery-download-outer'>
//                         <DownloadButton activeIndex={2} sliderImage={sliderImages} album={''} />
//                     </div>
//                 </div> */}
//             </div>
//         </>
//     )
// }

// export default Gallery;