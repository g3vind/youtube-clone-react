import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../store/appSlice";
import { useSearchParams } from "react-router-dom";
import PopularVideos from "../components/PopularVideos";

function WatchPage() {
  let [searchParams] = useSearchParams();
  console.log(searchParams.get("v")); // gives the video id
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex">
      <iframe
        width="980"
        height="520"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="m-5 rounded-lg"
      ></iframe>
      <PopularVideos />
    </div>
  );
}

export default WatchPage;
