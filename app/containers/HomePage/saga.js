/**
 * Gets the repositories of the user from Github
 */

import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import Auth from 'services/auth';
import { appNotify } from 'containers/App/actions';
import { makeSelectLoginForm } from 'containers/HomePage/selectors';
import { LOGIN } from './constants';
import { loginError } from './actions';

/**
 * Github repos request/response handler
 */
export function* login() {
  // Select username from store
  const credentials = yield select(makeSelectLoginForm());
  try {
    const auth = yield call(Auth.login, credentials);
    if (auth.status === 400) {
      throw auth;
    }
    // to do, store token to cookie
    // yield put(loadUserSession(auth));
    yield put(appNotify('success', auth.message));
  } catch (err) {
    yield put(loginError(err.errors));
    yield put(appNotify('error', err.message));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function*() {
  yield all([takeLatest(LOGIN, login)]);
}
