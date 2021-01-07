import { createActions, createReducer } from "reduxsauce";
const INITIAL_STATE = {
  data: [],
  error: "",
  isLoading: false
};
const { Types, Creators } = createActions({
  card: null,
  cardSuccess: ["data"],
  cardFailure: ["error"]
});
export const cardActions = {
  Types,
  Creators
};
const card = state => {
  return {
    ...state,
    isLoading: true,
    error: ""
  };
};
const cardSuccess = (state, response) => {
  return {
    ...state,
    data: response.data,
    isLoading: false
  };
};
const cardFailure = (state, error) => {
  return {
    ...state,
    isLoading: false,
    error
  };
};

export const cardReducer = createReducer(INITIAL_STATE, {
  [Types.CARD]: card,
  [Types.CARD_SUCCESS]: cardSuccess,
  [Types.CARD_FAILURE]: cardFailure
});
