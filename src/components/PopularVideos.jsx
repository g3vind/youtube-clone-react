import React from "react";
import { Link } from "react-router-dom";
import PopularVideo from "./PopularVideo";
import PopularShimmer from "../shimmers/PopularShimmer";
import usePopularVideos from "../hooks/usePopularVideos";

function PopularVideos() {
  const { popularVideos, loading } = usePopularVideos();

  if (loading) return <PopularShimmer />;

  return (
    <div className="mt-1 flex flex-col p-5">
      {popularVideos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <PopularVideo key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
}

export default PopularVideos;
