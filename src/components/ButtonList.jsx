import React from "react";

function ButtonList() {
  const listStyle =
    "bg-gray-200 text-black rounded-lg px-2 py-1 cursor-pointer hover:bg-gray-300";
  return (
    <div className="flex flex-row list-none gap-3 text-sm font-medium mt-4 ml-4">
      <li className="bg-black text-white rounded-lg px-2 py-1 cursor-pointer">
        All
      </li>
      <li className={listStyle}>Live</li>
      <li className={listStyle}>Music</li>
      <li className={listStyle}>Mixes</li>
      <li className={listStyle}>Gaming</li>
      <li className={listStyle}>Podcast</li>
      <li className={listStyle}>Code</li>
      <li className={listStyle}>Website</li>
      <li className={listStyle}>React</li>
      <li className={listStyle}>Songs</li>
      <li className={listStyle}>Podcast</li>
      <li className={listStyle}>Code</li>
      <li className={listStyle}>Website</li>
      <li className={listStyle}>React</li>
      <li className={listStyle}>Podcast</li>
      <li className={listStyle}>Code</li>
      <li className={listStyle}>Website</li>
    </div>
  );
}

export default ButtonList;
