import "./VideoItem.css";
import React from "react";

const VideoItem = ({
  videoContent,
  onVideoSelect,
  thumbnail,
  title,
  channel
}) => {
  return (
    <div
      onClick={() => onVideoSelect(videoContent)}
      className="video-item item"
    >
      <img
        alt={videoContent.snippet.title}
        className="ui image"
        src={thumbnail}
      />
      <div className="content">
        <div className="header">{title}</div>
        <div className="description">{channel}</div>
      </div>
    </div>
  );
};

export default VideoItem;
