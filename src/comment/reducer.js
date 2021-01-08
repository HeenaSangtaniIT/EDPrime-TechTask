import { createActions, createReducer } from 'reduxsauce';
const INITIAL_STATE = {
  data: [],
  error: '',
  isLoading: false,
};
const { Types, Creators } = createActions({
  comments: null,
  commentsSuccess: ['data'],
  commentsFailure: ['error'],
});
export const commentActions = {
  Types,
  Creators,
};
const comments = (state) => {
  return {
    ...state,
    isLoading: true,
    error: '',
  };
};
const commentsSuccess = (state, response) => {
  return {
    ...state,
    data: response.data,
    isLoading: false,
  };
};
const commentsFailure = (state, error) => {
  return {
    ...state,
    isLoading: false,
    error,
  };
};
export const commentReducer = createReducer(INITIAL_STATE, {
  [Types.COMMENTS]: comments,
  [Types.COMMENTS_SUCCESS]: commentsSuccess,
  [Types.COMMENTS_FAILURE]: commentsFailure,
});
