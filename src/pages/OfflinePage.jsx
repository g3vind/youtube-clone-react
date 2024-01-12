import React from "react";
import Offline from "../assets/Offline.jpg";

function OfflinePage() {
  return (
    <div className="flex flex-col justify-center gap-2 -mt-24 ml-28 items-center h-screen">
      <img src={Offline} className="h-40 w-40 rounded-full" alt="Offline" />
      <p className="text-center text-xl mb-3 font-medium">
        Connect to the Internet
      </p>
      <p className="font-normal">You're offline. Check your connection.</p>
      <button
        onClick={() => window.location.reload()}
        className="border-2 font-medium border-black-500 text-blue-600 h-8 w-16 rounded-3xl mt-4"
      >
        Retry
      </button>
    </div>
  );
}

export default OfflinePage;
