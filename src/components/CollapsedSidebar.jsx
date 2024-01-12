import { MdHomeFilled, MdSubscriptions, MdVideoLibrary } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";

function CollapsedSidebar() {
  const listItemStyles =
    "flex items-center flex-col font-medium mb-2 cursor-pointer";

  return (
    <div className="flex flex-col justify-center w-20 m-4">
      {/* First */}
      <div className="flex gap-16 mb-2">
        <ul className="flex flex-col mt-8 gap-12">
          <li className={listItemStyles}>
            <span>
              <MdHomeFilled size={25} />
            </span>
            <span className="text-xs">Home</span>
          </li>
          <li className={listItemStyles}>
            <span>
              <SiYoutubeshorts size={25} />
            </span>
            <span className="text-xs">Shorts</span>
          </li>
          <li className={listItemStyles}>
            <span>
              <MdSubscriptions size={25} />
            </span>
            <span className="text-xs">Subscriptions</span>
          </li>
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
