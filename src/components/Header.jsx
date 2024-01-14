import { MdCreateNewFolder } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../store/appSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { SEARCH_SUGGESTIONS_API } from "../utils/constants";
import { CiSearch } from "react-icons/ci";

function Header() {
  const [searchQuery, setSeachQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    /*

     make an api call every time the `searchQuery` changes
     make api call only if the difference between the keystrokes of user is greater than 200ms
     ---------------------------------------------------------------------------------
    make an api call after each key press
    but if the diff bw the 2 api calls is <200ms
    decline the api call
    
    */

    // making api call every 200ms
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(SEARCH_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
  };

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

      {/* Second - Search Bar*/}
      <div className="flex-col flex p-3">
        <div className="flex">
          <input
            value={searchQuery}
            onChange={(e) => setSeachQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
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
        </div>
        {/* SEARCH SUGGESTIONS */}
        {showSuggestions && (
          <div className="fixed top-14 px-5 py-2 bg-white w-2/5 text-center shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((query, index) => (
                <li
                  className="flex items-center justify-start gap-3 py-1 text-base font-semibold cursor-pointer hover:bg-slate-200"
                  key={index}
                >
                  <CiSearch />
                  {query}
                </li>
              ))}
            </ul>
          </div>
        )}
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
