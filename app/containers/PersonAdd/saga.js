import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import Rebel from 'services/rebels';
import RebelGroups from 'services/rebel-groups';
import Dialects from 'services/dialects';
import { appNotify } from 'containers/App/actions';
import { makeSelectAppToken } from 'containers/App/selectors';
import { makeSelectForm } from './selectors';
import {
  createNewDialectEnd,
  createNewDialectSuccess,
  getDialectsEnd,
  getDialectsSuccess,
  getRebelGroupsEnd,
  getRebelGroupsSuccess,
  savePersonEnd,
  savePersonError,
  savePersonSuccess,
} from './actions';
import {
  CREATE_DIALECT,
  GET_DIALECTS,
  GET_REBEL_GROUPS,
  PERSON_DATA_SAVE,
} from './constants';

export function* savePerson() {
  try {
    const token = yield select(makeSelectAppToken());
    const form = yield select(makeSelectForm());
    const rebel = yield call(Rebel.add, token, form);
    if (rebel.status >= 400) {
      throw rebel;
    }
    yield put(savePersonSuccess());
    yield put(appNotify('success', rebel.message));
  } catch (err) {
    yield put(appNotify('error', err.message));
    yield put(savePersonError(err.errors));
  } finally {
    yield put(savePersonEnd());
  }
}

export function* getRebelGroups() {
  try {
    const token = yield select(makeSelectAppToken());
    const rebel_groups = yield call(RebelGroups.list, token);
    if (rebel_groups.status >= 400) {
      throw rebel_groups;
    }
    yield put(getRebelGroupsSuccess(rebel_groups.data));
  } catch (err) {
    yield put(appNotify('error', err.message));
  } finally {
    yield put(getRebelGroupsEnd());
  }
}

export function* getDialects() {
  try {
    const token = yield select(makeSelectAppToken());
    const dialects = yield call(Dialects.list, token);
    if (dialects.status >= 400) {
      throw dialects;
    }
    yield put(getDialectsSuccess(dialects.data));
  } catch (err) {
    yield put(appNotify('error', err.message));
  } finally {
    yield put(getDialectsEnd());
  }
}

export function* createDialect({ value }) {
  try {
    const token = yield select(makeSelectAppToken());
    const response = yield call(Dialects.add, token, { name: value });
    if (response.status >= 400) {
      throw response;
    }
    yield put(appNotify('success', response.message));
    yield put(createNewDialectSuccess(response.data));
  } catch (err) {
    yield put(appNotify('error', err.message));
  } finally {
    yield put(createNewDialectEnd());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function*() {
  yield all([
    takeLatest(PERSON_DATA_SAVE, savePerson),
    takeLatest(GET_REBEL_GROUPS, getRebelGroups),
    takeLatest(GET_DIALECTS, getDialects),
    takeLatest(CREATE_DIALECT, createDialect),
  ]);
}
