import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../store/appSlice";
import { useSearchParams } from "react-router-dom";
import PopularVideos from "../components/PopularVideos";
import { IoIosNotifications } from "react-icons/io";
import { BiDislike, BiLike } from "react-icons/bi";
import { TbShare3 } from "react-icons/tb";
import { HiDownload } from "react-icons/hi";
import CommentsContainer from "../components/CommentsContainer";
import Description from "../components/Description";
import usePopularVideos from "../hooks/usePopularVideos";
import { formatViewCount } from "../utils/constants";
import useChannels from "../hooks/useChannels";

function WatchPage() {
  const { popularVideos } = usePopularVideos();
  const { channelsData } = useChannels;

  console.log(channelsData);

  let [searchParams] = useSearchParams();
  // console.log(searchParams.get("v")); // gives the video id
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const specificId = searchParams.get("v");
  const index = popularVideos.findIndex((video) => video.id === specificId);

  // console.log(popularVideos[index]);

  const videoInfo = popularVideos[index];

  const { channelTitle, description, localized, publishedAt } =
    videoInfo?.snippet || {};

  const { likeCount, commentCount, viewCount } = videoInfo?.statistics || {};

  const formatedLikeCount = formatViewCount(likeCount);
  return (
    <div className="flex">
      <div className="flex flex-col">
        <iframe
          width="990"
          height="500"
          src={
            "https://www.youtube.com/embed/" +
            searchParams.get("v") +
            "?autoPlay=1"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="m-3 rounded-lg"
        ></iframe>
        {/* TITLE & VIDEO DESCRIPTION */}
        <div className="flex flex-col">
          <h1 className="text-xl font-bold mx-4 my-1">{localized?.title}</h1>
          <div className="flex justify-between mt-1 mx-4 my-1">
            <div className="flex gap-3 justify-center items-center">
              <img
                className="relative z-30 inline-block h-8 w-8 rounded-full ring-2 ring-white"
                src="https://images.pexels.com/photos/35183/people-homeless-man-male.jpg?auto=compress&cs=tinysrgb&w=600"
                alt="Dan_Abromov"
              />
              <h3 className="font-medium text-lg">
                {channelTitle}
                <span className="flex text-sm font-normal items-center">
                  267k Subscribers
                </span>
              </h3>

              <button className="flex items-center ml-3 bg-gray-100 rounded-full px-3 hover:bg-gray-200">
                <IoIosNotifications size={26} />
                Subscribe
              </button>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <BiLike size={25} />
              {formatedLikeCount}
              <BiDislike size={25} />

              <button className="flex items-center ml-3 bg-gray-100 rounded-full px-3 py-2 hover:bg-gray-200 cursor-pointer">
                <TbShare3 size={25} />
                Share
              </button>
              <button className="flex items-center bg-gray-100 rounded-full px-3 py-2 hover:bg-gray-200 cursor-pointer">
                <HiDownload size={25} />
                Download
              </button>
            </div>
          </div>
        </div>
        <Description
          viewCount={viewCount}
          description={description}
          publishedAt={publishedAt}
        />
        <CommentsContainer count={commentCount} />
      </div>
      <div>
        <PopularVideos />
      </div>
    </div>
  );
}

export default WatchPage;
