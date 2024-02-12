import { useState, useEffect } from "react";
import ShortsCard from "../components/ShortsCard";

const TrendingPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://youtube-trending.p.rapidapi.com/trending?country=US&type=gaming";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "59a80de0dcmsh1e5811cdac9c9c6p101088jsne50738b9629a",
          "X-RapidAPI-Host": "youtube-trending.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (data.length === 0) {
    return <h1>Error in loading data</h1>;
  }

  return (
    <div className="flex flex-wrap items-center justify-between mt-6 mb-2">
      {data?.map((item) => (
        <ShortsCard key={item?.channelId} item={item} />
      ))}
    </div>
  );
};

export default TrendingPage;
