
import { LazyLoadImage } from "react-lazy-load-image-component";
import { memo } from 'react';

const LazyLoadImageComponent = memo(function LazyLoadImageComponent({src,picClass,effect}){
    return(
        <LazyLoadImage
            className={picClass ? picClass : "gallery-image" }
            src={src} 
            alt="Problem loading image.." 
            // effect="blur" 
            effect={effect ? effect : false}
        />
    )
})

export default LazyLoadImageComponent;

// const ImageComponent = memo(function ImageComponent({src, placeholder, delay})=>{
//     return(
//         <ProgressiveImage
//             src={src}
//             placeholder={placeholder}
//             delay={delay}
//             shimmer={shimmer}
//             retryOnError
//         >
//             {(src, loading)=>(
//                 <img src={src} alt="an image"/>
//             )}
//         </ProgressiveImage>
//     )
// })

// export default ImageComponent;