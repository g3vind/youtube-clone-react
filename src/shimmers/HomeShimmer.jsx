import React from "react";

function HomeShimmer() {
  const shimmerElements = Array.from({ length: 48 }, (_, index) => (
    <div key={index} className="w-64 h-auto gap-2">
      <div className="h-40 flex flex-col w-64 bg-gray-300 object-cover rounded-2xl mb-5"></div>
    </div>
  ));

  return (
    <div className="flex flex-wrap justify-around mt-6">{shimmerElements}</div>
  );
}

export default HomeShimmer;
