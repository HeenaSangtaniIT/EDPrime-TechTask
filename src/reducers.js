import { combineReducers } from 'redux';
import { authorReducer } from './author/reducer';
import { cardReducer } from './card/reducer';
import { commentReducer } from './comment/reducer';
const rootReducer = combineReducers({
  card: cardReducer,
  authors: authorReducer,
  comments: commentReducer,
});
export default rootReducer;
