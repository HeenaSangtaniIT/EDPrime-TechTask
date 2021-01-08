import React from "react";
import { Link, useHistory } from "react-router-dom";
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
    // history.push(`/comments/${postId}`, { postId: postId })
    console.log(postTitle,postBody,postId);
  }
  return (
    <div className="postDiv">
      {/* <Link
        // to={`/comments/${postId}`}
        to={{pathname:`/comments/${postId}`, state: {
            id:postId
          }
        }}
        className="postLink"
      > */}
      {/* <a href="/comments" className="postLink"> */}
      <div onClick={()=>onClickHandler(postTitle,postBody,postId)}>
        <div className="postTitle">
            <div>{postTitle}</div>
        </div>
        <div className="postBody">
            <div>{postBody}</div>
        </div>
      {/* </a> */}
      {/* </Link> */}
    </div>
    </div>
  );
};

export default Posts;
