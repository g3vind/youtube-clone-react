import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import HomeShimmer from "../shimmers/HomeShimmer";
import OfflinePage from "../pages/OfflinePage";

function VideoContainer() {
  const [videos, setVideos] = useState([]);
  const [online, setOnline] = useState(navigator.onLine); // Initial online status

  useEffect(() => {
    getVideos();

    // Event listener for online/offline changes
    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);

    // Cleanup: Remove event listeners on component unmount
    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, []);

  const handleOnlineStatusChange = () => {
    setOnline(navigator.onLine);
  };

  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  const apiUrl = `${YOUTUBE_VIDEOS_API}${apiKey}`;

  const getVideos = async () => {
    try {
      // Check if online before making the API request
      if (online) {
        const data = await fetch(apiUrl);
        const json = await data.json();
        setVideos(json.items);
      } else {
        // Handle offline state as needed
        console.log("Offline: Unable to fetch videos");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!online) {
    // Render something specific for offline state
    return <OfflinePage />;
  }

  return (
    <div className="flex flex-wrap justify-around mt-6">
      {videos.length === 0 ? (
        <HomeShimmer />
      ) : (
        videos.map((video) => <VideoCard key={video.id} info={video} />)
      )}
    </div>
  );
}

export default VideoContainer;
