import { memo } from 'react';
import {ProgressiveImage} from 'react-progressive-image';
import {shimmer} from 'react-graceful-image';

const ImageComponent = memo(function ImageComponent({src, placeholder, delay})=>{
    return(
        <ProgressiveImage
            src={src}
            placeholder={placeholder}
            delay={delay}
            shimmer={shimmer}
            retryOnError
        >
            {(src, loading)=>(
                <img src={src} alt="an image"/>
            )}
        </ProgressiveImage>
    )
})

export default ImageComponent;