import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import Auth from 'services/auth';
import { appAuthError, appNotify } from 'containers/App/actions';
import { makeSelectAppToken } from 'containers/App/selectors';
import { CHECK_AUTH } from './constants';
import { checkAuthError, checkAuthEnd } from './actions';

export function* checkAuth() {
  const token = yield select(makeSelectAppToken());
  try {
    const auth = yield call(Auth.checkAuth, token);
    if (auth.status >= 400) {
      throw auth;
    }
  } catch (err) {
    yield put(checkAuthError());
    yield put(appNotify('error', err.message));
    yield put(appAuthError());
  } finally {
    yield put(checkAuthEnd());
  }
}
/**
 * Root saga manages watcher lifecycle
 */
export default function*() {
  yield all([takeLatest(CHECK_AUTH, checkAuth)]);
}
