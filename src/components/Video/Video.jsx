import React, {useState, useEffect} from 'react';
import ReactPlayer from 'react-player'
import './Video.css'

function Video() {
    const [playing, setPlaying] = useState(true)
    // Original highlight video
    const url = 'https://www.youtube.com/watch?v=M0dLVXeBhCc'

    useEffect(()=>{
        setTimeout(() => {
            setPlaying(true)
        }, 200);
    },[])
    

    return (
        <>
            <div className='video-outer' >
                <ReactPlayer
                    url={url}
                    playing={playing}
                    muted={true}
                    width={'98%'}
                    height={'95%'}
                    // playIcon={false}
                    controls={true}
                    
                />
            </div>
        </>
    )
}

export default Video;