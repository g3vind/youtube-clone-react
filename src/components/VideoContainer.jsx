import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import HomeShimmer from "../shimmers/HomeShimmer";
import OfflinePage from "../pages/OfflinePage";
import { Link } from "react-router-dom";

function VideoContainer() {
  const [videos, setVideos] = useState([]);
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    getVideos();

    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);

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
      if (online) {
        const data = await fetch(apiUrl);
        const json = await data.json();
        setVideos(json.items);
      } else {
        console.log("Offline: Unable to fetch videos");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!online) {
    return <OfflinePage />;
  }

  if (videos?.length === 0) {
    return <HomeShimmer />;
  }

  return (
    <div className="flex flex-wrap justify-around mt-6">
      {videos?.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer;
