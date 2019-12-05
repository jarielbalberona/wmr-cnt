import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import Rebel from 'services/rebels';
import { appNotify } from 'containers/App/actions';
import { makeSelectAppToken } from 'containers/App/selectors';
import {
  loadPersonListEnd,
  loadPersonListSuccess,
  deletePersonSuccess,
  deletePersonEnd,
} from './actions';
import { LOAD_PERSON_LIST, DELETE_PERSON } from './constants';

export function* listPerson() {
  try {
    const token = yield select(makeSelectAppToken());
    const rebel = yield call(Rebel.list, token);
    if (rebel.status >= 400) {
      throw rebel;
    }
    yield put(loadPersonListSuccess(rebel.data));
  } catch (err) {
    if (err.status === 401) {
      window.location.href = '/';
    }
    yield put(appNotify('error', err.message));
  } finally {
    yield put(loadPersonListEnd());
  }
}

export function* deletePerson({ id }) {
  try {
    const token = yield select(makeSelectAppToken());
    const rebel = yield call(Rebel.delete, id, token);
    if (rebel.status >= 400) {
      throw rebel;
    }
    yield put({ type: LOAD_PERSON_LIST });
    yield put(deletePersonSuccess());
    yield put(appNotify('success', rebel.message));
  } catch (err) {
    if (err.status === 401) {
      window.location.href = '/';
    }
    yield put(appNotify('error', err.message));
  } finally {
    yield put(deletePersonEnd());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function*() {
  yield all([takeLatest(LOAD_PERSON_LIST, listPerson)]);
  yield all([takeLatest(DELETE_PERSON, deletePerson)]);
}
