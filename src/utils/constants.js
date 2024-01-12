export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=IN&key=`;

export function formatRelativeTime(timestamp) {
  const currentDate = new Date();
  const publishDate = new Date(timestamp);

  const timeDifference = currentDate - publishDate;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return `${years} ${years === 1 ? "year" : "years"} ago`;
  } else if (months > 0) {
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  } else if (days > 0) {
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  } else if (hours > 0) {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (minutes > 0) {
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else {
    return "Just now";
  }
}
export function formatViewCount(viewCount) {
  const numericViewCount = parseInt(viewCount);

  if (isNaN(numericViewCount)) {
    return "N/A";
  }

  if (numericViewCount < 1000) {
    return numericViewCount.toString();
  } else if (numericViewCount < 1000000) {
    const thousands = Math.floor(numericViewCount / 1000);
    return `${thousands}K`;
  } else if (numericViewCount < 10000000) {
    const millions = (numericViewCount / 1000000).toFixed(1);
    return `${millions}M`;
  } else {
    const billions = (numericViewCount / 1000000000).toFixed(1);
    return `${billions}B`;
  }
}
