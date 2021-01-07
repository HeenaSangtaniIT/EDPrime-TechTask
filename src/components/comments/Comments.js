import React from "react";
import "./comments.css";

const Comments = (
  commentAuthorName,
  commentEmail,
  commentBody
) => {
  return (
    <div className="postDiv">
      <div>{commentAuthorName}</div>
      <div>{commentEmail}</div>
      <div>{commentBody}</div>
    </div>
  );
};

export default Comments;
