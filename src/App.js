import { BrowserRouter as Router, BrowserRouter, HashRouter, Link } from "react-router-dom";
import { Route, Routes } from "react-router";
import { createBrowserHistory } from "history";
import { render } from 'react-dom';

import Album from './components/Albums/Albums';
import Slider from './components/Slider/Slider'
import Header from './components/Header/Header';
import Gallery from './components/Gallery/Gallery';
import sliderImage from "./components/SliderImage/sliderImage";
import sliderImagePortraits from "./components/SliderImage/sliderImagePortraits";

import './App.css';
// import zip from './assets/images/portraits/Portraits.zip'
// import { Router, Routes, Route, Link } from 'react-router-dom';


const history = createBrowserHistory()


function App() {
  return (
    <BrowserRouter history={history}>
      <>
        {/* <Header/> */}
        <Routes>
          <Route exact path='/WeddingPhotos' element={
            <>
              <div className="App">
                <Header />
                <Slider sliderImage={sliderImage} album={''} />
                <div className='line' />
                <div className='album-header'>
                  <h1>Albums</h1>
                </div>
                <Album />
              </div>
            </>
          } />
          <Route path='/WeddingPhotos/Portraits' element={
            <>
              <div className="App">
                <Header notHome={true} />
                <Slider sliderImage={sliderImagePortraits} album={'images/portraits/'} />
                <div className='line' />
                <div className='gallery-header'>
                  <h1>Gallery</h1>
                </div>
                <Gallery sliderImage={sliderImagePortraits} album={'images/portraits/'} />
                {/* <a href={zip} download={'Portaits'}>Download All Portraits</a> */}
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
