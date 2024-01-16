import React from "react";
import { BiLike, BiDislike } from "react-icons/bi";

function Comment({ data }) {
  const { name, text, replies } = data;
  return (
    <div className="mt-10 -mb-5">
      <div className="flex items-center gap-3">
        <img
          className="h-10 w-10 rounded-full object-cover"
          alt="avatar image"
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww"
        />
        <div className="">
          <p className="text-xs font-semibold">@{name}</p>
          <p className="text-sm">{text}</p>
        </div>
      </div>

      <div className="mx-12 mt-1 my-1 flex gap-3">
        <button>
          <BiLike size={19} />
        </button>
        <button>
          <BiDislike size={19} />
        </button>
        <button className="rounded-full px-3 py-1 text-black hover:bg-slate-400">
          Replies
        </button>
        {/* <p>{replies}</p> */}
      </div>
    </div>
  );
}

export default Comment;
