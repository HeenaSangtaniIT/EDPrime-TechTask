import { put, call } from 'redux-saga/effects';
import { authorActions } from './reducer';
import { getAuthorsApi } from '../apisause';

export function* getAuthorsSaga() {
  try {
    let response;
    response = yield call(getAuthorsApi);
    if (!response.error) {
      yield put(authorActions.Creators.authorsSuccess(response));
    } else {
      yield put(authorActions.Creators.authorsFailure(response.error));
    }
  } catch (error) {
    yield put(authorActions.Creators.authorsFailure(error));
  }
}
