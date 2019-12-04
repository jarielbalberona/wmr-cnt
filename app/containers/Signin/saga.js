import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import Auth from 'services/auth';
import {
  appAuthError,
  appNotify,
  loadUserSession,
} from 'containers/App/actions';
import { makeSelectAppToken } from 'containers/App/selectors';
import { makeSelectLoginForm } from 'containers/HomePage/selectors';
import { CHECK_AUTH, LOGIN } from './constants';
import { loginError, checkAuthError, checkAuthEnd } from './actions';

export function* checkAuth() {
  const token = yield select(makeSelectAppToken());
  try {
    const auth = yield call(Auth.checkAuth, token);
    if (auth.status >= 400) {
      throw auth;
    }
  } catch (err) {
    if (err.status === 401) {
      window.location.href = '/';
    }
    yield put(checkAuthError());
    yield put(appNotify('error', err.message));
    yield put(appAuthError());
  } finally {
    yield put(checkAuthEnd());
  }
}
export function* login() {
  const credentials = yield select(makeSelectLoginForm());
  try {
    const auth = yield call(Auth.login, credentials);
    if (auth.status === 400) {
      throw auth;
    }
    // to do, store token to cookie
    yield put(loadUserSession(auth.token));
    yield put(appNotify('success', auth.message));
    yield put(push('/admin/person-list'));
  } catch (err) {
    if (err.status === 401) {
      window.location.href = '/';
    }
    yield put(loginError(err.errors));
    yield put(appNotify('error', err.message));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function*() {
  yield all([takeLatest(LOGIN, login), takeLatest(CHECK_AUTH, checkAuth)]);
}
