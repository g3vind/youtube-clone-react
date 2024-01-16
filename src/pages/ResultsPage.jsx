// ResultsPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

function ResultsPage() {
  const [videos, setVideos] = useState([]);
  console.log(videos);
  const [loading, setLoading] = useState(false);
  const { searchQuery } = useParams();

  useEffect(() => {
    getData();
  }, [searchQuery]);

  const getData = async () => {
    try {
      const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=AIzaSyCGIO5mFErZInfYZw5fAwFn7bej5npqAIw`;
      const response = await fetch(apiUrl);
      const json = await response.json();

      if (json.items) {
        setVideos(json.items);
      }
    } catch (err) {
      console.log("Error Occurred in Fetching Videos", err);
    }
  };

  if (videos?.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      {videos?.map((video) => (
        <div key={video.id.videoId}>
          <ReactPlayer
            key={video.id.videoId}
            url={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            width="560"
            height="415"
            style={{ marginTop: "20px", marginLeft: "27vw" }}
          />
          {/* <h1>{video?.snippet?.title}</h1>
          <h1>{video?.snippet?.thumbnails?.medium}</h1>
          <h1>{video?.snippet?.channelTitle}</h1>
          <h1>{video?.snippet?.publishTime}</h1> */}
        </div>
      ))}
    </div>
  );
}

export default ResultsPage;
