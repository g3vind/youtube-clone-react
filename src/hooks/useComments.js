import { useState, useEffect } from "react";
import { COMMENTS_API } from "../utils/constants";

const useComments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    try {
      const data = await fetch(
        COMMENTS_API + import.meta.env.VITE_GOOGLE_API_KEY
      );
      const json = await data.json();
      setComments(json);
    } catch (error) {
      console.log("error in comments api", error);
    }
  };
  return { comments, getComments };
};

export default useComments;
