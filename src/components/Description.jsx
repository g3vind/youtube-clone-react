import { formatViewCount, formatRelativeTime } from "../utils/constants";

import ReactMarkdown from "react-markdown";
function Description({ viewCount, description, publishedAt }) {
  const formatedCount = formatViewCount(viewCount);
  const formatedTime = formatRelativeTime(publishedAt);
  return (
    <div className="m-2 mt-3 px-5 py-5 w-[65vw] bg-gray-100 text-black rounded-lg">
      <div className="flex items-center">
        <p className="font-semibold">{formatedCount} views</p>
        &nbsp;&nbsp;&nbsp;
        <p className="font-semibold">{formatedTime}</p>
      </div>
      <ReactMarkdown className="prose">{description}</ReactMarkdown>
      {/* <Test /> */}
    </div>
  );
}

export default Description;
