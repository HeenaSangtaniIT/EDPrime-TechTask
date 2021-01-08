import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import CardScreen from './card_screen';
import AuthorScreen from './author_screen';
import CommentScreen from './comment_screen';
import reportWebVitals from './reportWebVitals';
const { store, persistor } = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <CardScreen />
      {/* <AuthorScreen /> */}
      {/* <CommentScreen /> */}
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
