import React from "react";
import { useHistory } from "react-router-dom";
import "./posts.css";

const Posts = ({
  postTitle,
  postBody,
  postId
}) => {
  const history = useHistory();
  const onClickHandler = (postTitle,postBody,postId) => {
    history.push({
      pathname: `/comments/${postId}`,
      postTitle: `${postTitle}`,
      postBody: `${postBody}`,
      postId: `${postId}`,
    });
  }
  return (
    <div className="postDiv">
      <div onClick={()=>onClickHandler(postTitle,postBody,postId)}>
        <div className="postTitle">
            <div>{postTitle}</div>
        </div>
        <div className="postBody">
            <div>{postBody}</div>
        </div>
    </div>
    </div>
  );
};

export default Posts;
