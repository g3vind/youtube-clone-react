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
import { useSelector } from "react-redux";
import CollapsedSidebar from "./CollapsedSidebar";
import { Link } from "react-router-dom";

function Sidebar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const listItemStyles = "flex items-center font-medium mb-2 cursor-pointer";
  const iconStyles = "mr-2";
  return !isMenuOpen ? (
    <div className="flex flex-col gap-4 ml-4 mr-4 mt-6 w-36">
      {/* First */}
      <div className="border-b-2 border-gray-100 mb-2">
        <ul className="flex flex-col gap-1">
          <Link to="/">
            <li className={listItemStyles}>
              <span className={iconStyles}>
                <MdHomeFilled size={22} />
              </span>
              Home
            </li>
          </Link>
          <li className={listItemStyles}>
            <span className={iconStyles}>
              <SiYoutubeshorts size={20} />
            </span>
            Shorts
          </li>
          <Link to="subscriptions">
            <li className={listItemStyles}>
              <span className={iconStyles}>
                <MdSubscriptions size={20} />
              </span>
              Subscriptions
            </li>
          </Link>
        </ul>
      </div>
      {/* Second */}
      <div className="border-b-2 border-gray-100 mb ">
        <ul className="flex flex-col gap-1">
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
        <ul className="flex flex-col gap-1">
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
        <ul className="flex flex-col gap-1">
          <li className={listItemStyles}>
            <span className={iconStyles}>
              <IoMdTrendingUp />
            </span>
            Trending
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
  ) : (
    <CollapsedSidebar />
  );
}

export default Sidebar;
