import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { authorActions } from "./author/reducer";
import Authors from "./components/author/Authors";

const AuthorScreen = ({ authordata, authors }) => {
  console.log("data", authordata);
  useEffect(() => {
    authors();
  }, []);
  return (
    <div className="mainDivPost">
      <div className="headingDiv">Authors</div>
      {authordata.map(item => {
          console.log("item.name",item)
        return (
          <Authors
          authorName={item.name}
          authorContact={item.phone}
          authorEmail={item.email}
          authorWebsite={item.website}
          />
        );
      })}
    </div>
  );
};
const mapStateToProps = ({ authors }) => {
    console.log("authors",authors)
  const { authordata, error, isLoading } = authors;
  console.log("error data",authordata)
  return { authordata, error, isLoading };
};
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      ...authorActions.Creators
    },
    dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorScreen);
