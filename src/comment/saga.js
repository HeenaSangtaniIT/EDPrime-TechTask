import { put, call } from "redux-saga/effects";
import { commentActions } from "./reducer";
import { getCommentsApi } from "../apisause";

export function* getCommentsSaga() {
    try {
        let response;
        response = yield call(getCommentsApi)
        if (!response.error) {
            yield put(commentActions.Creators.commentsSuccess(response.data))
        } else {
            yield put(commentActions.Creators.commentsFailure(response.error))
        }
    } catch (error) {
        yield put(commentActions.Creators.commentsFailure(error))
    }
}
