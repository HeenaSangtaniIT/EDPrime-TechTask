import { createActions, createReducer } from "reduxsauce";
const INITIAL_STATE = {
  authordata: [],
  error: "",
  isLoading: false
};
const { Types, Creators } = createActions({
  authors: null,
  authorsSuccess: ["authordata"],
  authorsFailure:["error"]
});
export const authorActions = {
  Types,
  Creators
};
const authors = (state) => {
  return {
    ...state,
    isLoading: true,
    error: ""
  };
};
const authorsSuccess = (state, response) => {
  return {
    ...state,
    authordata: response.authordata,
    isLoading: false
  };
};
const authorsFailure = (state, error) => {
  return {
    ...state,
    isLoading: false,
    error: error
  };
};
export const authorReducer = createReducer(INITIAL_STATE, {
  [Types.AUTHORS]: authors,
  [Types.AUTHORS_FAILURE]: authorsSuccess,
  [Types.AUTHORS_FAILURE]: authorsFailure
});
