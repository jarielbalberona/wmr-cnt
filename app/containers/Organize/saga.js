import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import Rebel from 'services/rebels';
import { appNotify } from 'containers/App/actions';
import { makeSelectAppToken } from 'containers/App/selectors';
import { getPersonEnd, getPersonSuccess } from './actions';
import { GET_PERSON } from './constants';

export function* getPerson({ id }) {
  try {
    const token = yield select(makeSelectAppToken());
    const rebel = yield call(Rebel.getById, id, token);
    if (rebel.status >= 400) {
      throw rebel;
    }
    yield put(getPersonSuccess(rebel.data));
  } catch (err) {
    if (err.status === 401) {
      window.location.href = '/';
    }
    yield put(appNotify('error', err.message));
  } finally {
    yield put(getPersonEnd());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function*() {
  yield all([takeLatest(GET_PERSON, getPerson)]);
}
