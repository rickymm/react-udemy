import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const list = videos.map(video => {
    console.log(video);

    return (
      <VideoItem
        key={video.id.videoId}
        videoContent={video}
        onVideoSelect={onVideoSelect}
        thumbnail={video.snippet.thumbnails.high.url}
        title={video.snippet.title}
        channel={video.snippet.channelTitle}
      />
    );
  });

  return <div className="ui relaxed divided list">{list}</div>;
};

export default VideoList;
