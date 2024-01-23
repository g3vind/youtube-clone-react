const ChatMessage = ({ name, message }) => {
  return (
    <div className="overflow-hidden">
      <div className="flex gap-2 mt-2 items-center justify-start overflow-hidden">
        <img
          src="https://cdn-icons-png.flaticon.com/128/17/17004.png"
          className="h-5 w-5 rounded-full"
        />
        <span className="font-medium">{name}</span>
        <span className="text-wrap">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
