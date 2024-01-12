import React from "react";

function HomeShimmer() {
  const shimmerElements = Array.from({ length: 48 }, (_, index) => (
    <div key={index} className="w-72">
      <div className="h-48 w-72 bg-gray-300 object-cover rounded-2xl mb-4" />
      <div className="flex bg-gray-400 mt-3"></div>
      <div className="flex bg-gray-400 mt-3"></div>
    </div>
  ));

  return (
    <div className="flex flex-wrap justify-around mt-6">{shimmerElements}</div>
  );
}

export default HomeShimmer;
