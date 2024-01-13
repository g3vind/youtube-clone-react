function PopularShimmerList() {
  const shimmerDivs = Array.from({ length: 50 }, (_, index) => (
    <div key={index} className="flex flex-col items-center">
      <div className="w-64 h-36 bg-gray-300 mt-5 m-7 rounded-lg"></div>
      <div className="w-64 h-4 -mt-6 bg-gray-300 rounded-lg"></div>
      <div className="w-64 h-4 mt-1 bg-gray-300 rounded-lg"></div>
      <div className="w-64 h-4 mt-1 bg-gray-300 rounded-lg"></div>
    </div>
  ));

  return <div>{shimmerDivs}</div>;
}

export default PopularShimmerList;
