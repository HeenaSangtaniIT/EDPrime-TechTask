import { put, call } from "redux-saga/effects";
import { cardActions } from "./reducer";
import { getCardApi, getCommentsApi } from "../apisause";

export function* getCardSaga() {
    try {
        let response;
        response = yield call(getCardApi)
        if (!response.error) {
            yield put(cardActions.Creators.cardSuccess(response.data))
        } else {
            yield put(cardActions.Creators.cardFailure(response.error))
        }
    } catch (error) {
        yield put(cardActions.Creators.cardFailure(error))
    }
}
