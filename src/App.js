import {
  BrowserRouter as Router,
  BrowserRouter,
  HashRouter,
  Link,
} from "react-router-dom";
import { Route, Routes } from "react-router";
import { createBrowserHistory } from "history";
import Font from 'react-font';
import { render } from "react-dom";

import Album from "./components/Albums/Albums";
import Slider from "./components/Slider/Slider";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import sliderImage from "./components/SliderImage/sliderImage";
// import sliderImageGroups from "./components/SliderImage/albumImage";
import sliderImageGroups from "./components/SliderImage/sliderImageGroups";
import sliderImagePortraits from "./components/SliderImage/sliderImagePortraits";
import sliderImageCeremony from "./components/SliderImage/sliderImageCeremony";
import sliderImageReception from "./components/SliderImage/sliderImageReception";

import "./App.css";
import DemoCarousel from "./components/Carousel/Carousel";
import { useState, useEffect } from "react";
import Video from "./components/Video/Video";
import FirstPhoto from "./components/FirstPhoto/FirstPhoto";

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


  

  return (
    <BrowserRouter history={history}>
      <>
        {/* <Header/> */}
        {/* If they switch from landscape to portrait, refresh page */}
        <Routes>
          <Route
            exact
            path="/GrierWedding"
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
                    <Font family="Great Vibes">
                      <h1>Albums</h1>
                    </Font>
                  </div>
                  <Album />
                  {/* Grey: #b3c3cb */}
                </div>
              </>
            }
          />
          <Route
            path="/GrierWedding/Groups"
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
                    <Font family="Great Vibes">
                      <h1>Gallery</h1>
                    </Font>
                  </div>
                  <Gallery
                    sliderImage={sliderImageGroups}
                    album={"images/portraits/"}
                  />
                </div>
              </>
            }
          />
          <Route
            path="/GrierWedding/Portraits"
            element={
              <>
                <div className="App">
                  <Header notHome={true} />
                  <div className="demo-outer">
                    <DemoCarousel images={sliderImagePortraits} />
                  </div>
                  <div className="line" />
                  <div className="gallery-header">
                    <Font family="Great Vibes">
                      <h1>Gallery</h1>
                    </Font>
                  </div>
                  <Gallery
                    sliderImage={sliderImagePortraits}
                    album={"images/portraits/"}
                  />
                </div>
              </>
            }
          />
          <Route
            path="/GrierWedding/Ceremony"
            element={
              <>
                <div className="App">
                  <Header notHome={true} />
                  <div className="demo-outer">
                    <DemoCarousel images={sliderImageCeremony} />
                  </div>
                  <div className="line" />
                  <div className="gallery-header">
                    <Font family="Great Vibes">
                      <h1>Gallery</h1>
                    </Font>{" "}
                  </div>
                  <Gallery
                    sliderImage={sliderImageCeremony}
                    album={"images/ceremony/"}
                  />
                </div>
              </>
            }
          />
          <Route
            path="/GrierWedding/Reception"
            element={
              <>
                <div className="App">
                  <Header notHome={true} />
                  <div className="demo-outer">
                    <DemoCarousel images={sliderImageReception} />
                  </div>
                  <div className="line" />
                  <div className="gallery-header">
                    <Font family="Great Vibes">
                      <h1>Gallery</h1>
                    </Font>
                  </div>
                  <Gallery
                    sliderImage={sliderImageReception}
                    album={"images/ceremony/"}
                  />
                </div>
              </>
            }
          />
        </Routes>
          <ScrollToTop/>
      </>
    </BrowserRouter>
  );
}

export default App;
