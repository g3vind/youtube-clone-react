import React, { useEffect, useState } from "react";
import { POPULAR_VIDEOS_API } from "../utils/constants";
import PopularVideo from "./PopularVideo";
import { Link } from "react-router-dom";

function PopularVideos() {
  const [popularVideos, setPopularVideos] = useState([]);
  useEffect(() => {
    getPopularVideos();
  }, []);

  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  const apiUrl = `${POPULAR_VIDEOS_API}${apiKey}`;

  const getPopularVideos = async () => {
    try {
      const data = await fetch(apiUrl);
      const json = await data.json();
      setPopularVideos(json?.items);
    } catch (error) {
      console.log("Error Occured", error);
    }
  };

  if (popularVideos.length === 0) return <h1>No Popular Videos Data</h1>;

  return (
    <div className="mt-5 flex flex-col p-5">
      {popularVideos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <PopularVideo key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
}

export default PopularVideos;
