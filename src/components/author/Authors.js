import React from "react";
import "./authors.css";

const Authors = ({
  authorName,
  authorContact,
  authorEmail,
  authorWebsite
}) => {
  return (
    <div className="mainDivAuthor">
        <div className="authorDiv">
            <div className="authorData"><div className="authorDetails left"><b>Name: </b></div><div className="left">{authorName}</div></div>
            <div className="authorData"><div className="authorDetails left"><b>Contact: </b></div><div className="left">{authorContact}</div></div>
            <div className="authorData"><div className="authorDetails left"><b>Email: </b></div><div className="left">{authorEmail}</div></div>
            <div className="authorData"><div className="authorDetails left"><b>Website: </b></div><div className="left">{authorWebsite}</div></div>
        </div>
    </div>
  );
};

export default Authors;
