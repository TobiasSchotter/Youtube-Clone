import React from "react";
import "../Styles/RecommendedVideos.css";
import "./VideoCard";
import VideoCard from "./VideoCard";
import * as data from "../data.json";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <div className="recommendedVideos_videos">
        {data.videos.map((video) => (
          <VideoCard
            title={video.title}
            views={video.views}
            timestamp={video.timestamp}
            channelImage={video.channelImage}
            channel={video.channel}
            image={video.image}
            key={video.id}
          />
        ))}
      </div>
    </div>
  );
}

export default RecommendedVideos;
