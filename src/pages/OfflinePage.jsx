import React from "react";

function OfflinePage() {
  return (
    <div className="inline-flex flex-col justify-center items-center gap-5">
      <img
        src="https://i.redd.it/8i3iza7hhd0b1.jpg"
        className="h-40 w-40 rounded-full"
      />
      <p className="text-center font-medium">Connect to the Internet</p>
      <p className="font-normal"> You're offline. Check your connection.</p>
      <button className="border-2 font-medium border-blue-500 h-8 w-16 rounded-3xl">
        Retry
      </button>
    </div>
  );
}

export default OfflinePage;
