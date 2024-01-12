import { formatRelativeTime, formatViewCount } from "../utils/constants";

function VideoCard({ info }) {
  console.log(info);

  if (!info) return <h1>No Data Available</h1>;

  const { snippet, statistics } = info;

  const { channelTitle, thumbnails, title, publishedAt } = snippet;

  const { viewCount } = statistics;

  const time = formatRelativeTime(publishedAt);
  const views = formatViewCount(viewCount);
  return (
    <div className="w-72">
      <img
        src={thumbnails?.medium?.url}
        alt="channelTitle"
        className="h-48 w-72 object-cover rounded-2xl"
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

export default VideoCard;
