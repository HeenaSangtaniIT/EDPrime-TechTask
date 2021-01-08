import { createActions, createReducer } from 'reduxsauce';
const INITIAL_STATE = {
  data: [],
  error: '',
  isLoading: false,
};
const { Types, Creators } = createActions({
  authors: null,
  authorsSuccess: ['data'],
  authorsFailure: ['error'],
});
export const authorActions = {
  Types,
  Creators,
};
const authors = (state) => {
  return {
    ...state,
    isLoading: true,
    error: '',
  };
};
const authorsSuccess = (state, response) => {
  return {
    ...state,
    data: response.data.authordata,
    isLoading: false,
  };
};
const authorsFailure = (state, error) => {
  return {
    ...state,
    isLoading: false,
    error: error,
  };
};
export const authorReducer = createReducer(INITIAL_STATE, {
  [Types.AUTHORS]: authors,
  [Types.AUTHORS_SUCCESS]: authorsSuccess,
  [Types.AUTHORS_FAILURE]: authorsFailure,
});
