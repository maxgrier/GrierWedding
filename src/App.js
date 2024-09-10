import {
  BrowserRouter as Router,
  BrowserRouter,
  HashRouter,
  Link,
} from "react-router-dom";
import { Route, Routes } from "react-router";
import { createBrowserHistory } from "history";
import { render } from "react-dom";

import Album from "./components/Albums/Albums";
import Slider from "./components/Slider/Slider";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import sliderImage from "./components/SliderImage/sliderImage";
// import sliderImageGroups from "./components/SliderImage/albumImage";
import sliderImageGroups from "./components/SliderImage/sliderImageGroups";
import sliderImagePortraits from "./components/SliderImage/sliderImagePortraits";
import sliderImageCeremony from "./components/SliderImage/sliderImageCeremony";

import "./App.css";
import DemoCarousel from "./components/Carousel/Carousel";
import { useState, useEffect } from "react";
import Video from "./components/Video/Video";
import FirstPhoto from "./components/FirstPhoto/FirstPhoto";
// import zip from './assets/images/WeddingPhotos.zip'
// import zip from './assets/images/portraits/Portraits.zip'
// import { Router, Routes, Route, Link } from 'react-router-dom';

// import getFileNames from "./components/SliderImage/albumImage";

const history = createBrowserHistory();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);
  // let sliderImageGroups = [{}]
  // useEffect(async ()=>{
  //   sliderImageGroups = await getFileNames('Groups')
  // },[])

  // let allImages = sliderImageGroups + sliderImagePortraits + sliderImageCeremony
  let allImages = [];
  // console.log(sliderImageGroups)
  // console.log(sliderImagePortraits)
  // console.log(sliderImageCeremony)
  // allImages.push(...sliderImageGroups.slice(0,30));
  // allImages.push(...sliderImagePortraits.slice(0,30));
  // allImages.push(...sliderImageCeremony.slice(0,30));
  // allImages.push(...sliderImageGroups);
  // allImages.push(...sliderImagePortraits);
  // allImages.push(...sliderImageCeremony);
  
  // const [orientation, setOrientation] = useState('')

  // useEffect(() => {

  //   const handleResize = () => {
  //     console.log('width: ', window.innerWidth, ' ', window.innerHeight)
  //     if (window.innerHeight > window.innerWidth) {
  //       if (orientation === 'landscape') {
  //         setOrientation('portrait')
  //         // window.location.reload()
  //         window.alert('changed from landscape to portrait')
  //       }

  //     } else {
  //       setOrientation('landscape')
  //     }
  //     console.log('orientation changed: ', orientation)
  //   }
  //   // Add event listener
  //   window.addEventListener("resize", handleResize);
  //   // Call handler right away so state gets updated with initial window size
  //   handleResize();
  //   // Remove event listener on cleanup
  //   return () => window.removeEventListener("resize", handleResize);

  // }, [])

  // Updating
  return (
    <BrowserRouter history={history}>
      <>
        {/* <Header/> */}
        {/* If they switch from landscape to portrait, refresh page */}
        <Routes>
          <Route
            exact
            path="/WeddingPhotos"
            element={
              <>
                <div className="App">
                  <Header />
                  <FirstPhoto />
                  <Video />
                  {/* <Slider sliderImage={sliderImage} album={''} /> */}
                  {/* <div className="demo-outer">
                    {isLoading ? (
                      <div className="loader"></div>
                    ) : (
                      <DemoCarousel images={allImages} />
                    )}
                  </div> */}
                  <div className="line" />
                  <div className="album-header">
                    <h1>Albums</h1>
                  </div>
                  <Album />
                  {/* Grey: #b3c3cb */}
                  {/* <div>
                <a href="https://raw.githubusercontent.com/maxgrier/PhotoRepo/main/Download.zip">Download</a>
              </div> */}
                {/* <iframe href="https://photos.app.goo.gl/5xxmtzdiTCJVkJzf6"/> */}
                  {/* <img src="https://github.com/maxgrier/PhotoRepo/blob/main/Groups/DCS00392L.jpg?ref=main"></img> */}
                  <img src="/WeddingPhotos/static/media/DSC00045.34d5fbd0b899cb7ffb99.jpg" class="" alt="Preloaded"></img>
                  <img src={"https://drive.google.com/thumbnail?id=5xxmtzdiTCJVkJzf6"}/>
                  <img src={"https://photos.google.com/uc?export=view&id=5xxmtzdiTCJVkJzf6"}/>
                  <img src={"https://drive.google.com/uc?export=view&id=1IL9YYXolLqU8HkEJoiiWjiO4QL4yss-p"} alt='google'/>
                  <img src={"https://drive.google.com/uc?export=view&id=1IL9YYXolLqU8HkEJoiiWjiO4QL4yss-p/view?usp=drive_link"}/>
                  <img src={"https://drive.usercontent.google.com/download?id=1IL9YYXolLqU8HkEJoiiWjiO4QL4yss-p&export=view&authuser=0"}></img>
                  <img style={{ width:"262", height:"393",display: 'block', '-webkit-user-select': 'none','margin': 'auto','cursor': 'zoom-in',backgroundColor: 'hsl(0, 0%, 90%)',transition: 'background-color 300ms'}} src="https://drive.usercontent.google.com/download?id=1IL9YYXolLqU8HkEJoiiWjiO4QL4yss-p&amp;export=view&amp;authuser=0" />
                  <img src="https://drive.usercontent.google.com/download?id=1IL9YYXolLqU8HkEJoiiWjiO4QL4yss-p&amp;export=view&amp;authuser=0" class="" alt="Preloaded"></img>
                  {/* https://drive.usercontent.google.com/download?id=1IL9YYXolLqU8HkEJoiiWjiO4QL4yss-p&export=view&authuser=0 */}
                  {/* https://drive.google.com/file/d/1IL9YYXolLqU8HkEJoiiWjiO4QL4yss-p/view?usp=sharing */}
                  {/* https://drive.google.com/file/d/1IL9YYXolLqU8HkEJoiiWjiO4QL4yss-p/view?usp=drive_link */}
                  {/* https://photos.app.goo.gl/5xxmtzdiTCJVkJzf6 */}
                  {/* uc?export=view&id= */}
                  {/* https://photos.app.goo.gl/QiiVPyyg6BcCT7gD6 */}
                   {/* <img src="https://lh3.googleusercontent.com/pw/AP1GczNVhs2nmNlZV7iYmEGrHSRiYxE-ySmAv-MVVxGYOU3sDlbLNf2adJMAfqfFdpQilZUCbhP1KKug4mZvN0W_7R9OpKWlUx50jjhaoiC9AU2TikBPj-0=w600-h315-p-k" /> */}
                </div>
              </>
            }
          />
          <Route
            path="/WeddingPhotos/Groups"
            element={
              <>
                <div className="App">
                  <Header notHome={true} />
                  <div className="demo-outer">
                    <DemoCarousel images={sliderImageGroups} />
                  </div>
                  {/* <Slider sliderImage={sliderImageGroups} album={'images/portraits/'} /> */}
                  <div className="line" />
                  <div className="gallery-header">
                    <h1>Gallery</h1>
                  </div>
                  <Gallery
                    sliderImage={sliderImageGroups}
                    album={"images/portraits/"}
                  />
                  {/* <a href={zip} download={'Portaits'}>Download All Portraits</a> */}
                 
                  
                </div>
              </>
            }
          />
          <Route
            path="/WeddingPhotos/Portraits"
            element={
              <>
                <div className="App">
                  <Header notHome={true} />
                  <div className="demo-outer">
                    <DemoCarousel images={sliderImagePortraits} />
                  </div>
                  {/* <Slider sliderImage={sliderImagePortraits} album={'images/portraits/'} /> */}
                  <div className="line" />
                  <div className="gallery-header">
                    <h1>Gallery</h1>
                  </div>
                  <Gallery
                    sliderImage={sliderImagePortraits}
                    album={"images/portraits/"}
                  />
                  {/* <a href={zip} download={'Portaits'}>Download All Portraits</a> */}
                </div>
              </>
            }
          />
          <Route
            path="/WeddingPhotos/Ceremony"
            element={
              <>
                <div className="App">
                  <Header notHome={true} />
                  <div className="demo-outer">
                    <DemoCarousel images={sliderImageCeremony} />
                  </div>
                  {/* <Slider sliderImage={sliderImageCeremony} album={'images/ceremony/'} /> */}
                  <div className="line" />
                  <div className="gallery-header">
                    <h1>Gallery</h1>
                  </div>
                  <Gallery
                    sliderImage={sliderImageCeremony}
                    album={"images/ceremony/"}
                  />
                </div>
              </>
            }
          />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
