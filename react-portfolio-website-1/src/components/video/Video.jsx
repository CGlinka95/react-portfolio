import React from "react";
import "./video.css";
import ReactPlayer from "react-player/youtube";

const Video = () => {
  return (
    <section className="video">
      <h5>Project Demo</h5>
      <h2>Watch Me</h2>
      <div className="container player-wrapper">
        <ReactPlayer
          className="react-player"
          url={"https://www.youtube.com/watch?v=t9TsO9BWpsI"}
          controls={true}
          width="100%"
          height="100%"
          onPlay={() =>
            console.log("Video is playing... Thank you for watching!")
          }
          onPause={() => console.log("Video is paused.")}
        />
      </div>
    </section>
  );
};

export default Video;
