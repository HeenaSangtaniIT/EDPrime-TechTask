import React from 'react';
import './comments.css';

const Comments = ({ commentAuthorName, commentEmail, commentBody }) => {
  return (
    <div className="mainDivComment">
    <div className='commentDiv'>
      <div className="commentAuthor">
            <div>Author: {commentAuthorName}</div>
        </div>
        <div className="commentBody">
            <div>{commentBody}</div>
            <br />
            <div>{commentEmail}</div>
        </div>
    </div>
    </div>
  );
};

export default Comments;
