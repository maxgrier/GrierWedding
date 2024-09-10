import React, {useEffect} from 'react';
import {preloadImage} from '../../utils/utils';

const ImageComponent = ({src,className})=>{
    useEffect(()=>{
        // preloadImage(src).then(()=>{console.log("Image preloaded: ", src)})
        preloadImage(src)
    },[src])

    return <img src={src} className={className ? className : ""} alt={"Preloaded"} />
}

export default ImageComponent;