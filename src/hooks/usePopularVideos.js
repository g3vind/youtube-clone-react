import { useEffect, useState } from "react";
import { POPULAR_VIDEOS_API } from "../utils/constants";

const usePopularVideos = () => {
  const [popularVideos, setPopularVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  const apiUrl = `${POPULAR_VIDEOS_API}${apiKey}`;

  const getPopularVideos = async () => {
    try {
      const data = await fetch(apiUrl);
      const json = await data.json();
      setPopularVideos(json?.items);
      setLoading(false);
    } catch (error) {
      console.log("Error Occurred", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPopularVideos();
  }, []);

  return { popularVideos, loading };
};

export default usePopularVideos;
