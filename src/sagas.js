import { all,takeEvery } from "redux-saga/effects";
import {getCardSaga} from './card/saga';
import {getAuthorsSaga} from './author/saga';
import {getCommentsSaga} from './comment/saga';
import {cardActions} from './card/reducer';
import {authorActions} from './author/reducer';
import {commentActions} from './comment/reducer';
export default function* rootSagas(){
    yield all([yield takeEvery(cardActions.Types.CARD,getCardSaga)]);
    yield all([yield takeEvery(commentActions.Types.COMMENTS,getCommentsSaga)]);
    yield all([yield takeEvery(authorActions.Types.AUTHORS,getAuthorsSaga)])
}