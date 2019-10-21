import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import Auth from 'services/auth';
import { appNotify } from 'containers/App/actions';
import { makeSelectSignupForm } from 'containers/Signup/selectors';
import { SIGNUP } from './constants';
import { signupError } from './actions';

export function* signup() {
  // Select username from store
  const form = yield select(makeSelectSignupForm());
  try {
    const auth = yield call(Auth.signup, form);
    if (auth.status >= 400 || !auth.success) {
      throw auth;
    }
    yield put(appNotify('success', auth.message));
    yield put(push('/'));
  } catch (err) {
    yield put(signupError(err.errors));
    yield put(appNotify('error', 'Some error occurred.'));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function*() {
  yield all([takeLatest(SIGNUP, signup)]);
}
