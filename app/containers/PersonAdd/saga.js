import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import Rebel from 'services/rebel';
import { appNotify } from 'containers/App/actions';
import { makeSelectAppToken } from 'containers/App/selectors';
import { makeSelectForm } from './selectors';
import { savePersonEnd, savePersonSuccess } from './actions';
import { PERSON_DATA_SAVE } from './constants';

export function* savePerson() {
  try {
    const token = yield select(makeSelectAppToken());
    const form = yield select(makeSelectForm());
    const rebel = yield call(Rebel.add, token, form);
    if (rebel.status >= 400) {
      throw rebel;
    }
    yield put(savePersonSuccess());
  } catch (err) {
    yield put(appNotify('error', err.message));
  } finally {
    yield put(savePersonEnd());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function*() {
  yield all([takeLatest(PERSON_DATA_SAVE, savePerson)]);
}
