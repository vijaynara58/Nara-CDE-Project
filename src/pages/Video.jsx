import React from "react";
import ReactPlayer from "react-player";


const Video = () => (
  <div className="relative p-96">
    <ReactPlayer
      url="https://youtu.be/df1X9oXvoN4"
      className="absolute top-20 left-0"
      playing
      width="100%"
      height="100%"
      controls={false}
    />
  </div>
);


export default Video;

