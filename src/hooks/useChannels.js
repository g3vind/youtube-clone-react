import { useState, useEffect } from "react";

import { CHANNELS_API } from "../utils/constants";

const useChannels = () => {
  const [channelsData, setChannelsData] = useState([]);

  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  const apiUrl = `${CHANNELS_API}${apiKey}`;

  useEffect(() => getChannelsData(), []);

  const getChannelsData = async () => {
    try {
      const data = await fetch(apiUrl);
      const json = await data.json();
      setChannelsData(json);
    } catch (error) {
      console.log("error in channels data api", error);
    }
  };
  return { channelsData };
};

export default useChannels;
