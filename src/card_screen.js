import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { cardActions } from "./card/reducer";
import Posts from "./components/posts/Posts";
import AuthorScreen from './author_screen';
import CommentScreen from './comment_screen';
import "./components/posts/posts.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const CardScreen = ({ data, error, isLoading, card }) => {
  console.log("data", data);
  useEffect(() => {
    card();
  }, []);
  return (
    <Router>
      <div>
        <nav className="navBar">
          <ul className="navBarUL">
            <li className="navBarLI">
              <Link to="/">Posts</Link>
            </li>
            <li className="navBarLI">
              <Link to="/comments/1">Comments</Link>
            </li>
            <li className="navBarLI">
              <Link to="/users">Authors</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/comments">
            <CommentScreen />
          </Route>
          <Route path="/users">
            <AuthorScreen />
          </Route>
          <Route path="/">
            <div className="mainDivPost">
              <div className="headingDiv">Posts</div>
              {data.map(item => {
                return (
                  <Posts
                    postTitle={item.title}
                    postBody={item.body}
                    postId={item.id}
                    userId={item.userId}
                  />
                );
              })}
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
};
const mapStateToProps = ({ card }) => {
  const { data, error, isLoading } = card;
  return { data, error, isLoading };
};
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      ...cardActions.Creators
    },
    dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(CardScreen);
