import React, { useEffect, useState } from "react";
import Comment from "./Comment";

const CommentsSection = ({ comments }) => {
  return (
    comments && (
      <div className="bg-gray-900 text-white mx-6 p-4">
        <h4 className="text-3xl font-bold">Best Comments</h4>
        {comments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        })}
      </div>
    )
  );
};

export default CommentsSection;
