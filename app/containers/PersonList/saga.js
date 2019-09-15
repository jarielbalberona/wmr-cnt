import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import Rebel from 'services/rebels';
import { appNotify } from 'containers/App/actions';
import { makeSelectAppToken } from 'containers/App/selectors';
import { loadPersonListEnd, loadPersonListSuccess } from './actions';
import { LOAD_PERSON_LIST } from './constants';

export function* listPerson() {
  try {
    const token = yield select(makeSelectAppToken());
    const rebel = yield call(Rebel.list, token);
    if (rebel.status >= 400) {
      throw rebel;
    }
    yield put(loadPersonListSuccess(rebel.data));
  } catch (err) {
    yield put(appNotify('error', err.message));
  } finally {
    yield put(loadPersonListEnd());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function*() {
  yield all([takeLatest(LOAD_PERSON_LIST, listPerson)]);
}
