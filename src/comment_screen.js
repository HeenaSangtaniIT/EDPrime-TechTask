import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { commentActions } from './comment/reducer';
import Comments from './components/comments/Comments';
import { useHistory } from "react-router-dom";
import "./components/comments/comments.css";


const CommentScreen = ({ data, comments, state }) => {
  const history = new useHistory();
  console.log("history",history.location);

  useEffect(() => {
    comments();
  }, []);
  return (
    <div className='mainDivPost'>
      <div className='headingDiv'>Post Details</div>
      <div className="postData">
        <div><b>Post Title:</b></div>
        <div>{history.location.postTitle}</div><br />
        <div><b>Post Body:</b> </div>
        <div>{history.location.postBody}</div>
      </div>
      <div className='headingDiv'>Post Comments</div>
      {data.map((item) => {
        return (
          <Comments
            commentAuthorName={item.name}
            commentEmail={item.email}
            commentBody={item.body}
          />
        );
      })}
    </div>
  );
};
const mapStateToProps = ({ comments }) => {
  const { data, error, isLoading } = comments;
  return { data, error, isLoading };
};
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      ...commentActions.Creators,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentScreen);
