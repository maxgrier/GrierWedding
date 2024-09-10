import React from "react";
import ImageComponent from "../ImageComponent/ImageComponent";

import "./FirstPhoto.css";
import photo from '../../assets/images/Z_portraits/DSC00501.jpg';

let prefix = "https://github.com/maxgrier/WeddingPhotos/blob/main/src/assets/images/portraits/";
let postfix = "?raw=true";
// let photo = prefix + "DSC00501.jpg" + postfix;

// prefix = "https://github.com/maxgrier/PhotoRepo/blob/main/ceremony/"
// postfix = "?raw=true"
function FirstPhoto() {
  return (
    <div className="first-outer">
      <div className="first-wrapper">
        <ImageComponent  src={photo} />
        {/* <ImageComponent  src={"https://drive.usercontent.google.com/download?id=1IL9YYXolLqU8HkEJoiiWjiO4QL4yss-p&export=view"} /> */}
        {/* https://drive.usercontent.google.com/download?id=1IL9YYXolLqU8HkEJoiiWjiO4QL4yss-p&export=view */}
        {/* <link rel="preload" as="image" href={photo}></link> */}

        {/* <img src={photo} loading={"eager"}></img> */}

        {/* <img src={"https://github.com/maxgrier/PhotoRepo/blob/main/ceremony/DSC00468.jpg?raw=true"} loading={"eager"}></img> */}
      </div>
    </div>
  );
}

export default FirstPhoto;
