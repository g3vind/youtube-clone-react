import { MdCreateNewFolder } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../store/appSlice";
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex flex-row justify-between shadow-md">
      {/* First */}

      <div className=" flex flex-row gap-2 ml-6 items-center p-3">
        <img
          onClick={() => handleToggleMenu()}
          src="https://cdn-icons-png.flaticon.com/128/9663/9663120.png"
          alt="hamburger menu"
          className="h-8 w-8 cursor-pointer"
        />

        <img
          src="https://t3.ftcdn.net/jpg/03/00/38/90/240_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
          alt="youtube logo"
          className="object-contain h-12 w-auto -mt-2 cursor-pointer"
        />
      </div>

      {/* Second */}
      <div className="flex-row flex p-3">
        <input
          style={{ width: "37vw" }}
          className="flex h-10 w-full rounded-l-full border-2 border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500  disabled:cursor-not-allowed  shadow-sm"
          type="text"
          placeholder="Search"
        />
        <button className="h-10 w-16 flex justify-center items-center bg-gray-100 rounded-r-full border-black/30 border-2">
          <img
            src="https://cdn-icons-png.flaticon.com/128/54/54481.png"
            className="h-6 w-6"
          />
        </button>
        <button className="h-10 w-12 flex justify-center ml-3 items-center border-2 bg-gray-100 border-gray-500 rounded-full">
          <img
            style={{ borderRadius: "50%" }}
            className="h-5 w-5 opacity-80"
            src="https://cdn-icons-png.flaticon.com/128/709/709682.png"
          />
        </button>
      </div>
      {/* Third */}
      <div className="flex flex-row gap-3 p-4">
        <MdCreateNewFolder size={30} />
        <IoIosNotifications size={30} />
        <img
          className="relative z-30 inline-block h-8 w-8 rounded-full ring-2 ring-white"
          src="https://images.pexels.com/photos/35183/people-homeless-man-male.jpg?auto=compress&cs=tinysrgb&w=600"
          alt="Dan_Abromov"
        />
      </div>
    </div>
  );
}

export default Header;
