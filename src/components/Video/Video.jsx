import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./Video.css";

function Video(props) {
  const [playing, setPlaying] = useState(true);
  const [playInline, setPlayInline] = useState(true);
  const [isMute, setMute] = useState(true);
  // Original highlight video
  // const url = "https://www.youtube.com/watch?v=M0dLVXeBhCc"; // Old video
  const url = "https://youtu.be/-nNciOJPmto"; // new video

  useEffect(() => {
    // setTimeout(() => {
    //   for (let i = 0; i < 20; i++) {
    //     setTimeout(() => {
    //       setMute(false);
    //     }, 100);
    //   }
    // }, 500);
    setTimeout(() => {
      setMute(false);
      setTimeout(() => {
        setMute(false);
        setPlaying(true);
        setPlayInline(true);
      }, 5000);
    }, 1000);
  }, []);

  return (
    <>
      <div className="video-outer" >
        <ReactPlayer
          url={url}
          playing={playing}
          // playing={true}
          muted={isMute}
          // muted={true}
          // muted={false}
          width={"100%"}
          height={"100%"}
          // playIcon={false}
          controls={true}
          playsinline={playInline}
          playsInline={playInline}
          autoPlay={true}
          data-autoplay={true}
        />
      </div>
    </>
  );
}

export default Video;
