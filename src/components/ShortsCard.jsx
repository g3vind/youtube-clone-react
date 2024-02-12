const ShortsCard = ({ item }) => {
  return (
    <div className="flex flex-row items-center flex-wrap gap-3">
      <div className="flex flex-col mb-4">
        <img
          src={item?.thumbnails[1]?.url}
          className="border-none rounded-md h-[300px] w-[200px] object-cover"
        />
        <p className="font-semibold mt-2">{item?.channelName}</p>
        {/* <p>{item?.channelUrl}</p> */}
        <p className="font-medium">{item?.publishedText}</p>
        <p className="text-md font-bold text-wrap">
          {item?.title.slice(0, 24)}
        </p>
        {/* <p>{item?.videoUrl}</p> */}
        <p className="font-semibold">{item?.viewsText}</p>
      </div>
    </div>
  );
};

export default ShortsCard;
