import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import SearchShimmer from "../shimmers/SearchShimmer";
import SearchCard from "../components/SearchCard";

function ResultsPage() {
  const [videos, setVideos] = useState([]);
  console.log(videos);
  const [loading, setLoading] = useState(false);
  const { searchQuery } = useParams();

  useEffect(() => {
    getData();
  }, [searchQuery]);

  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${apiKey}`;

  const getData = async () => {
    try {
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
    return <SearchShimmer />;
  }

  return (
    <div>
      {videos?.map((video) => (
        <Link key={video?.id?.videoId} to={"/watch?v=" + video.id.videoId}>
          <SearchCard key={video?.id?.videoId} video={video} />
        </Link>
      ))}
    </div>
  );
}

export default ResultsPage;
