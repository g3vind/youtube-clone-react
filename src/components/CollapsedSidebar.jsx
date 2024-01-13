import { MdHomeFilled, MdSubscriptions, MdVideoLibrary } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { Link } from "react-router-dom";

function CollapsedSidebar() {
  const listItemStyles =
    "flex items-center flex-col font-medium mb-2 cursor-pointer";

  return (
    <div className="flex flex-col w-20 m-4">
      {/* First */}
      <div className="flex gap-16 mb-2">
        <ul className="flex flex-col mt-8 gap-12">
          <Link to="/">
            <li className={listItemStyles}>
              <span>
                <MdHomeFilled size={25} />
              </span>
              <span className="text-xs">Home</span>
            </li>
          </Link>

          <li className={listItemStyles}>
            <span>
              <SiYoutubeshorts size={25} />
            </span>
            <span className="text-xs">Shorts</span>
          </li>
          <Link to="subscriptions">
            <li className={listItemStyles}>
              <span>
                <MdSubscriptions size={25} />
              </span>
              <span className="text-xs">Subscriptions</span>
            </li>
          </Link>
          <li className={listItemStyles}>
            <span>
              <MdVideoLibrary size={25} />{" "}
            </span>
            <span className="text-xs">Library</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CollapsedSidebar;
