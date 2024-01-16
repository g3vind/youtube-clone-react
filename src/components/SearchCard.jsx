import React from "react";
import { RadioTower } from "lucide-react";
import { FaUserCircle } from "react-icons/fa";
import { formatRelativeTime } from "../utils/constants";

function SearchCard({ video }) {
  return (
    <div key={video?.id?.videoId} className="flex flex-col mt-5 justify-center">
      <div className="flex ml-28">
        <img
          src={video?.snippet?.thumbnails?.medium?.url}
          alt="Video Thumbnail"
          className="inline w-96 rounded-2xl"
        />
        <div className="flex flex-col items-center justify-normal mx-3 text-wrap">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-lg">{video?.snippet?.title}</h1>
            <h1 className="mt-3 flex items-center gap-4">
              <FaUserCircle size={27} />
              {video?.snippet?.channelTitle}
            </h1>
            <h1>{formatRelativeTime(video?.snippet?.publishTime)}</h1>
            {video?.snippet?.liveBroadcastContent === "live" && (
              <button className="bg-red-500 w-16 mt-6 flex items-center px-3 py-2 rounded-xl text-white text-xs">
                <RadioTower size={15} />
                Live
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
