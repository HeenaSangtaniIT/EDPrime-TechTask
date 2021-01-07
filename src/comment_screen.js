import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { commentActions } from "./comment/reducer";
import Comments from "./components/comments/Comments";

const CommentScreen = ({ data, comments }) => {
  console.log("data", data);
  useEffect(() => {
    comments();
  }, []);
  return (
    <div className="mainDivPost">
      <div className="headingDiv">Comments</div>
      {data.map(item => {
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
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      ...commentActions.Creators
    },
    dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentScreen);
