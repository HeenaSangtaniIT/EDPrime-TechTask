import React from "react";
import "./authors.css";

const Authors = ({
  authorName,
  authorContact,
  authorEmail,
  authorWebsite
}) => {
  return (
    <div className="authorDiv">
      <a href="/comments" className="authorLink">
        <div className="authorTitle">
            <div>{authorName}</div>
            <div>{authorContact}</div>
            <div>{authorEmail}</div>
            <div>{authorWebsite}</div>
        </div>
      </a>
      {/* </Link> */}
    </div>
  );
};

export default Authors;
