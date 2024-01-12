import {
  MdHomeFilled,
  MdSubscriptions,
  MdVideoLibrary,
  MdWatchLater,
  MdMusicNote,
  MdOutlineLocalMovies,
  MdLiveTv,
} from "react-icons/md";
import { SiYoutubeshorts, SiYoutubegaming } from "react-icons/si";
import { FaHistory } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { BsFillTrophyFill } from "react-icons/bs";
import { IoMdTrendingUp } from "react-icons/io";

function Sidebar() {
  const listItemStyles = "flex items-center font-medium mb-2 cursor-pointer";
  const iconStyles = "mr-2";
  return (
    <div className="flex flex-col justify-center gap-3 w-32 m-6">
      {/* First */}
      <div className="border-b-2 border-gray-100 mb-2">
        <ul>
          <li className={listItemStyles}>
            <span className={iconStyles}>
              <MdHomeFilled size={22} />
            </span>
            Home
          </li>
          <li className={listItemStyles}>
            <span className={iconStyles}>
              <SiYoutubeshorts size={20} />
            </span>
            Shorts
          </li>
          <li className={listItemStyles}>
            <span className={iconStyles}>
              <MdSubscriptions size={20} />
            </span>
            Subscriptions
          </li>
        </ul>
      </div>
      {/* Second */}
      <div className="border-b-2 border-gray-100 mb ">
        <ul>
          <li className={listItemStyles}>
            <span className={iconStyles}>
              {" "}
              <MdVideoLibrary />{" "}
            </span>
            Library
          </li>
          <li className={listItemStyles}>
            <span className={iconStyles}>
              {" "}
              <FaHistory />
            </span>
            History
          </li>
          <li className={listItemStyles}>
            <span className={iconStyles}>
              <MdWatchLater />
            </span>
            Watch Later
          </li>
          <li className={listItemStyles}>
            <span className={iconStyles}>
              <BiLike />
            </span>
            Liked Videos
          </li>
        </ul>
      </div>
      {/* Third */}
      <div className="border-b-2 border-gray-100 mb-2 ">
        <ul>
          <li className={listItemStyles}>
            <span className={iconStyles}>
              {" "}
              <MdMusicNote />
            </span>
            Music
          </li>
          <li className={listItemStyles}>
            <span className={iconStyles}>
              <BsFillTrophyFill />
            </span>
            Sports
          </li>
          <li className={listItemStyles}>
            <span className={iconStyles}>
              <SiYoutubegaming />
            </span>
            Gaming
          </li>
          <li className={listItemStyles}>
            <span className={iconStyles}>
              <MdOutlineLocalMovies />
            </span>
            Movies
          </li>
        </ul>
      </div>
      {/* Fourth */}
      <div className="border-b-2 border-gray-100 mb-2 ">
        <ul>
          <li className={listItemStyles}>
            <span className={iconStyles}>
              <IoMdTrendingUp />
            </span>
            Trending
          </li>
          <li className={listItemStyles}>
            <span className={iconStyles}>
              <MdMusicNote />
            </span>
            Music
          </li>
          <li className={listItemStyles}>
            <span className={iconStyles}>
              <MdOutlineLocalMovies />
            </span>
            Movies
          </li>
          <li className={listItemStyles}>
            <span className={iconStyles}>
              <MdLiveTv />
            </span>
            Live
          </li>
          <li className={listItemStyles}>
            <span className={iconStyles}>
              {" "}
              <SiYoutubegaming />
            </span>
            Gaming
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
