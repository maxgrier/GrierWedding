import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./Video.css";

function Video(props) {
  const [playing, setPlaying] = useState(true);
  const [playInline, setPlayInline] = useState(true);
  const [isMute, setMute] = useState(true);
  // Original highlight video
  const url = "https://www.youtube.com/watch?v=M0dLVXeBhCc";

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
          muted={isMute}
          // muted={false}
          width={"98%"}
          height={"95%"}
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
