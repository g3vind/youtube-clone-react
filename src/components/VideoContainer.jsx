import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import HomeShimmer from "../shimmers/HomeShimmer";

function VideoContainer() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  const apiUrl = `${YOUTUBE_VIDEOS_API}${apiKey}`;

  const getVideos = async () => {
    try {
      const data = await fetch(apiUrl);
      const json = await data.json();
      setVideos(json.items);
    } catch (error) {
      console.log(error);
    }
  };

  if (videos.length === 0) return <HomeShimmer />;
  return (
    <div className="flex flex-wrap justify-around mt-6">
      {videos.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
}

export default VideoContainer;
