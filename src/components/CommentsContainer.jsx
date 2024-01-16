import useComments from "../hooks/useComments";
import Comment from "./Comment";
import { commentsData } from "../utils/commentsData";
import { useState } from "react";

const CommentsContainer = ({ count }) => {
  const [showCommentsButton, setShowCommentsButton] = useState(false);
  const { comments, setComments } = useComments();
  // console.log(comments);
  return (
    <div className="m-2 p-1">
      <h1 className="text-xl font-medium">{count} Comments</h1>
      <div className="mt-4 flex gap-5">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
          alt="user image"
          className="h-12 w-12 rounded-full object-cover"
        />
        <input
          placeholder="Add a comment..."
          type="text"
          className="border-b-2 w-2/3 border-gray-100 outline-none"
          onFocus={() => setShowCommentsButton(true)}
          onBlur={() => setShowCommentsButton(false)}
        />
        {showCommentsButton && (
          <button className="h-9 w-24 mt-6   bg-blue-500 text-black  rounded-full">
            Comment
          </button>
        )}
      </div>
      {/* <Comment data={commentsData[0]} /> */}
      <CommentsList comments={commentsData} />
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div style={{ borderLeft: "1px solid gray" }} className="px-7 mx-1">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
export default CommentsContainer;
