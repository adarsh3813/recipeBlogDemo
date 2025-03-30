import React, { useState } from "react";

// This ia functional component that resembles a single comment. This has been done separately to show modularity
const Comment = ({ comment }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="bg-gray-800 p-2 my-2">
      <div className="flex">
        <h4 className="text-red-400 font-semibold">
          {comment.user.username} ~ {comment.user.fullName}:
        </h4>
        <p className="font-light"> {"" + comment.body}</p>
      </div>
      {liked ? (
        <p className="text-xs">You liked this comment... 😊</p>
      ) : (
        <p
          className="text-sm cursor-pointer hover:font-semibold"
          onClick={() => setLiked(true)}
        >
          Like this!! 👍
        </p>
      )}
    </div>
  );
};

export default Comment;
