import React from "react";
import { Link } from "react-router-dom";
import "./posts.css";

const Posts = ({
  postTitle,
  postBody,
  postId
}) => {
  return (
    <div className="postDiv">
      <Link
        to={`/comments/${postId}`}
        className="postLink"
      >
      {/* <a href="/comments" className="postLink"> */}
        <div className="postTitle">
            <div>{postTitle}</div>
        </div>
        <div className="postBody">
            <div>{postBody}</div>
        </div>
      {/* </a> */}
      </Link>
    </div>
  );
};

export default Posts;
