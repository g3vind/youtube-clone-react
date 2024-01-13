import React from "react";
import { formatRelativeTime, formatViewCount } from "../utils/constants";
import PopularShimmer from "../shimmers/PopularShimmer";

function PopularVideo({ info }) {
  const { snippet, statistics } = info;

  if (info.length === 0) return <PopularShimmer />;
  const { channelTitle, thumbnails, title, publishedAt } = snippet;

  const { viewCount } = statistics;
  const time = formatRelativeTime(publishedAt);
  const views = formatViewCount(viewCount);

  return (
    <div className="w-64 m-auto h-auto mb-3">
      <img
        src={thumbnails?.medium?.url}
        alt="channelTitle"
        className="h-36 w-72 object-cover rounded-lg"
      />
      <h2 className="font-medium mt-2">{title}</h2>
      <p>{channelTitle}</p>
      <div className="flex">
        <p>{views} views</p>&nbsp;•&nbsp;
        <p>{time}</p>
      </div>
    </div>
  );
}

export default PopularVideo;
