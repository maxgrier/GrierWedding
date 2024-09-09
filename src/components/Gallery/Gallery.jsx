import React, { Component } from "react";
// import sliderImages from '../SliderImage/sliderImage'
import DownloadButton from "../DownloadButton/DownloadButton";
// import ImageComponent from '../ProgressiveImage/ProgressiveImage'
import ring from "../../assets/images/ring_heart.jpg";
import "./Gallery.css";
// import { isFormElement } from "react-router-dom/dist/dom";
import ProgressiveImage from "react-graceful-image";

export default class Gallery extends Component {
  state = {
    showLow: 0,
    showLimit: 10,
    doRows: false,
    els2: [],
  };

  set = async (i) => {
    setTimeout(function () {
      // Add tasks to do

      console.log("i ", i);
    }, 2000 * i);
    // setTimeout(async() => {
    //   await this.setState({showLimit: i})
    //   console.log('i ', i, this.state.showLimit)
    // }, 2000);
  };

  increaseLimit = async (x) => {
    this.setState({ showLimit: x });
    // let i = 0
    // for(let i=0;i < 50;i+=10){
    //     await this.set(i)
    //   this.setState({showLimit: i})
    // }
  };

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

  makeImg = (src) => {
    const img = new Image();
    img.src = src;
    img.display = "none";
    img.onload = () => {
      img.display = "block";
      // setImgSrc(src);
    };
    return img;
  };

  makeRows2 = (start, end) => {
    // function isVisibleInViewPort(e) {
    //   var viewTop = window.scrollTop();
    //   var viewBottom = viewTop + window.height();
    //   var eTop = e.offset().top;
    //   var eBottom = eTop + e.height();
    //   return eBottom <= viewBottom && eTop >= viewTop;
    // }

    try {
      let els = [];
      let end2;
      if (end > this.state.sliderImages.length) {
        end2 = this.state.sliderImages.length;
      } else {
        end2 = end;
      }
      for (let idx = start; idx < end2; idx++) {
        let slide = this.state.sliderImages[idx];
        let layout = slide.layout;

        // console.log("SI ", this.state.sliderImages[i]);
        // setTimeout(() => {
          if(idx<10){
            els.push(
              <>
                <div
                  className={"gallery-image-outer"}
                  id={layout}
                  style={
                    // idx >= this.state.showLow && idx < this.state.showLimit
                    idx <= this.state.showLimit
                      ? { display: "true" }
                      : { display: "none" }
                  }
                >
                    <img
                      className="gallery-image"
                      src={slide.urls}
                      alt="Problem loading image..."
                      loading="eager"
                    />
                  
                </div>
              </>
            )
          }else{
            els.push(
              <>
                <div
                  className={"gallery-image-outer"}
                  id={layout}
                  style={
                    idx <= this.state.showLimit
                      ? { display: "true" }
                      : { display: "none" }
                  }
                >
                  
                    <img
                      className="gallery-image"
                      src={slide.urls}
                      alt="Problem loading image..."
    
                      // onLoad={() => {
                      //   console.log("loded ", slide.urls);
                      // }}
                      // loading={"lazy"}
                    />
                </div>
              </>
            );
          }
        // els.push(
        //   <>
        //     <div
        //       className={"gallery-image-outer"}
        //       id={layout}
        //       style={
        //         // idx >= this.state.showLow && idx < this.state.showLimit
        //         idx <= this.state.showLimit
        //           ? { display: "true" }
        //           : { display: "none" }
        //       }
        //     >
        //       {idx <= 10 ? (
        //         <img
        //           className="gallery-image"
        //           src={slide.urls}
        //           alt="Problem loading image..."
        //           loading="eager"
        //         />
        //       ) : (
        //         <img
        //           className="gallery-image"
        //           src={slide.urls}
        //           alt="Problem loading image..."

        //           // onLoad={() => {
        //           //   console.log("loded ", slide.urls);
        //           // }}
        //           // loading={"lazy"}
        //         />
        //       )}
        //     </div>
        //   </>
        // );
      }
      // setTimeout(() => {

      console.log("returning more images");
      this.setState({ els2: [...this.state.els2, ...els] });
      // return els2;
      // }, 200);
    } catch (error) {
      console.log("make rows error: ", error);
    }
  };
  // Adjust to make a row for every three items
  makeRows = () => {
    try {
      return this.state.sliderImages.map((slide, idx) => {
        let layout = slide.layout;

        return (
          <>
            <div
              className={"gallery-image-outer"}
              id={layout}
              style={
                idx >= this.state.showLow && idx < this.state.showLimit
                  ? { display: "true" }
                  : { display: "none" }
              }
            >
              {idx <= 10 ? (
                <img
                  className="gallery-image"
                  src={slide.urls}
                  alt="Problem loading image..."
                  loading="eager"
                />
              ) : (
                // <img className="gallery-image" src={"https://github.com/maxgrier/WeddingPhotos/blob/main/src/assets/DSC00574.jpg?raw=true"} alt="photo" loading="eager"/>

                // <img className="gallery-image" src={"https://github.com/maxgrier/WeddingPhotos/blob/main/src/assets/DSC00574.jpg?token=XXX"} alt="photo" loading="eager"/>
                // <img className="gallery-image" src={"https://github.com/maxgrier/PhotoRepo/blob/main/DSC00396.jpg?raw=true?token=XXX"} alt="photo" loading="eager"/>
                // <img className="gallery-image" src={"http://maxgrier:XXX@github.com/maxgrier/PhotoRepo/blob/main/DSC00396.jpg?raw=true"} alt="photo" loading="eager"/>
                // <img className="gallery-image" src={"https://XXX@raw.githubusercontent.com/maxgrier/PhotoRepo/blob/main/DSC00396.jpg?raw=true"} alt="photo" loading="eager"/>

                // ![Private picture](https://raw.githubusercontent.com/maxgrier/PhotoRepo/blob/main/DSC00396.jpg?raw=true?token=XXX)

                // https://XXX@raw.githubusercontent.com/maxgrier/PhotoRepo/blob/main/DSC00396.jpg

                // <img className="gallery-image" src={"https://cdn.pixabay.com/photo/2020/05/25/17/21/link-5219567_1280.jpg"} alt="" loading="eager"/>

                // <img className="gallery-image" src={slide.urls} alt="" />

                <img
                  className="gallery-image"
                  src={slide.urls}
                  onLoad={() => {
                    console.log("loded ", slide.urls);
                  }}
                  loading={"lazy"}
                />
                // <ProgressiveImage src={slide.urls} placeholder={ring}>
                //   {(src, loading) => (
                //     <img
                //       className={"gallery-image"}
                //       style={{'width':'100%',
                //         'height':'auto',
                //         'object-fit': 'contain',
                //         'border-radius': '10px',
                //         'box-shadow': '0px 0px 5px black',
                //         'margin': 'auto'}}
                //       // className={`image${loading ? " loading" : " loaded"}`}
                //       src={src}
                //       alt="sea beach"
                //       width="100%"
                //       height="auto"
                //     />
                //   )}
                // </ProgressiveImage>
                // this.makeImg(slide.urls)
                // <ImageComponent src={slide.urls} placeholder={ring} delay={5000}/>
                // // What I use
                // <img
                //   className="gallery-image"
                //   src={slide.urls}
                //   // data-src={slide.urls}
                //   alt="Problem loading image..."
                //   // loading="lazy"
                //   // loading="eager"
                //   // style={
                //   //   idx > this.state.showLow && idx <= this.state.showLimit
                //   //     ? { display: "true" }
                //   //     : { display: "none" }
                //   // }
                // />
                // // What I use

                // <img className="gallery-image" src={"https://github.com/maxgrier/WeddingPhotos/blob/main/src/assets/DSC00667.jpg?raw=true"} alt="photo2" loading="lazy"/>
              )}

              {/* <div className="gallery-download-outer"> */}
              {/* Getting a cannot read 'name' error */}
              {/* <DownloadButton activeIndex={idx} sliderImage={sliderImages} album={props.album} /> */}
              {/* </div> */}
            </div>
          </>
        );
      });
    } catch (e) {
      console.log(e);
    }
  };

  //  getFileNames = async () => {
  //   try {
  //     // https://api.github.com/repos/maxgrier/PhotoRepo/contents/groups
  //     // const data = fetch("https://api.github.com/repos/maxgrier/PhotoRepo/groups/git/trees/main?recursive=1")
  //     const data = await fetch(
  //       "https://api.github.com/repos/maxgrier/PhotoRepo/contents/Groups",
  //       { headers: { Accept: "application/vnd.github+full" } }
  //     );
  //     // console.log("g data ", data);
  //     const dataJson = await data.json();
  //     // console.log("git data ", dataJson);
  //     let d = await this.formatData(dataJson);
  //     return d;
  //     // return makeObjs(dataJson);
  //     // return dataJson
  //   } catch (error) {
  //     console.log("error: ", error);
  //   }
  // };

  //  formattedData = [];
  //  formatData = async (data) => {
  //   data.map((item) => {
  //     let temp = {
  //       title: "First Slide",
  //       description: "This is the first slider Image of our carousel",
  //       urls: item.html_url + "?raw=true",
  //       layout:
  //         item.name.substring(0, item.name.length - 4).slice(-1) === "L"
  //           ? "landscape"
  //           : "portrait",
  //       name: item.name,
  //       name2: item.name.substring(0, item.name.length - 4),
  //     };
  //     this.formattedData.push(temp);
  //   });
  //   console.log("formatted data ", this.formattedData);
  //   return this.formattedData;
  // };

  componentDidMount = async () => {
    // let sliderImageGroups = await this.getFileNames();
    // this.setState({ sliderImages: sliderImageGroups });
    this.setState({ sliderImages: this.props.sliderImage });
    // await this.increaseLimit(20)

    setTimeout(async () => {
      this.setState({ doRows: true });
      this.makeRows2(this.state.showLow, this.state.showLimit);

      setTimeout(async () => {
        this.makeRows2(this.state.showLow, this.state.showLimit);
        this.setState({ showLow: 10, showLimit: 20 });
        console.log("limit ", this.state.showLimit);
        setTimeout(async () => {
          this.makeRows2(this.state.showLow, this.state.showLimit);
          this.setState({ showLow: 20, showLimit: 30 });
          console.log("limit ", this.state.showLimit);
          setTimeout(async () => {
            this.makeRows2(this.state.showLow, this.state.showLimit);
            this.setState({ showLow: 30, showLimit: 40 });
            console.log("limit ", this.state.showLimit);
            setTimeout(async () => {
              this.makeRows2(this.state.showLow, this.state.showLimit);
              this.setState({ showLow: 40, showLimit: 50 });
              console.log("limit ", this.state.showLimit);
              setTimeout(async () => {
                this.makeRows2(this.state.showLow, this.state.showLimit);
                this.setState({ showLow: 50, showLimit: 60 });
                console.log("limit ", this.state.showLimit);
                setTimeout(async () => {
                  this.makeRows2(this.state.showLow, this.state.showLimit);
                  this.setState({ showLow: 60, showLimit: 70 });
                  console.log("limit ", this.state.showLimit);
                  setTimeout(async () => {
                    this.makeRows2(this.state.showLow, this.state.showLimit);
                    this.setState({ showLow: 70, showLimit: 80 });
                    console.log("limit ", this.state.showLimit);
                    setTimeout(async () => {
                      this.makeRows2(this.state.showLow, this.state.showLimit);
                      this.setState({ showLow: 80, showLimit: 90 });
                      console.log("limit ", this.state.showLimit);
                      setTimeout(async () => {
                        this.makeRows2(this.state.showLow, this.state.showLimit);
                        this.setState({ showLow: 90, showLimit: 200 });
                        console.log("limit ", this.state.showLimit);
                        setTimeout(() => {
                          this.makeRows2(this.state.showLow, this.state.showLimit);
                        }, 10000);
                      }, 5000);
                    }, 5000);
                  }, 5000);
                }, 5000);
              }, 5000);
            }, 5000);
          }, 5000);
        }, 5000);
      }, 6000);
    }, 5000);
  };

  render() {
    return (
      <>
        {/* <div className="sub-category"> */}
        {/* <h2>Portraits</h2> */}
        {/* <select
            onChange={(e) => {
              let v = e.target.value;
              if (Number(v) === 100) {
                this.setState({ showLimit: 100, showLow: 0 });
              } else {
                this.setState({ showLimit: v, showLow: v - 10 });
              }
            }}
          >
            <option value={10} selected={this.state.showLimit === 10}>
              1
            </option>
            <option value={20} selected={this.state.showLimit === 20}>
              2
            </option>
            <option value={30} selected={this.state.showLimit === 40}>
              3
            </option>
            <option value={100} selected={this.state.showLimit === 100}>
              All
            </option>
          </select> */}
        {/* </div> */}
        <div className="gallery-row" key={this.state.showLimit}>
          {/* {this.makeRows()} */}
          {this.state.doRows ? (
            // this.makeRows2(this.state.showLow, this.state.showLimit)
            <>
            {this.state.els2}
            {this.state.showLimit < this.state.sliderImages.length?
            <div className="gallery-row"><div className="loader"></div></div>
            :
            <></>}
            </>
          ) : (
            <div className="loader" />
          )}
        </div>
      </>
    );
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
