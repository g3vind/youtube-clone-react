import { useEffect } from "react";
import { SUBS_API } from "../utils/constants";

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
const apiUrl = `${SUBS_API}${apiKey}`;

const getSubsVideos = async () => {
  try {
    const data = await fetch(apiUrl);
    const json = await data.json();
    console.log(json);
  } catch (error) {
    console.log("error in subs page", error);
  }
};

function SubsPage() {
  useEffect(() => {
    getSubsVideos();
  }, []);
  return <div>SubsPage</div>;
}

export default SubsPage;
