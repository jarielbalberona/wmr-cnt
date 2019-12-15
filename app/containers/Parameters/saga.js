import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import RebelGroups from 'services/rebel-groups';
import Dialects from 'services/dialects';
import { appNotify } from 'containers/App/actions';
import { makeSelectAppToken } from 'containers/App/selectors';
import {
  saveGroupEnd,
  saveGroupSuccess,
  getRebelGroupsSuccess,
  getRebelGroupsEnd,
  getDialectsSuccess,
} from './actions';
import {
  SAVE_GROUP,
  SAVE_GROUP_ERROR,
  GET_REBEL_GROUPS,
  DELETE_REBEL_GROUP,
  DELETE_REBEL_GROUP_END,
  SAVE_DIALECT,
  SAVE_DIALECT_SUCCESS,
  SAVE_DIALECT_ERROR,
  SAVE_DIALECT_END,
  GET_DIALECTS,
  GET_DIALECTS_END,
  DELETE_DIALECT,
  DELETE_DIALECT_END,
} from './constants';

export function* getRebelGroups() {
  try {
    const token = yield select(makeSelectAppToken());
    const rebels = yield call(RebelGroups.list, token);
    if (rebels.status >= 400) {
      throw rebels;
    }
    yield put(getRebelGroupsSuccess(rebels.data));
  } catch (err) {
    if (err.status === 401) {
      window.location.href = '/';
    }
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
    if (err.status === 401) {
      window.location.href = '/';
    }
    yield put(appNotify('error', err.message));
  } finally {
    yield put({ type: GET_DIALECTS_END });
  }
}

export function* deleteRebelGroups({ id }) {
  try {
    const token = yield select(makeSelectAppToken());
    const deleted_rebel = yield call(RebelGroups.delete, token, id);
    if (deleted_rebel.status >= 400) {
      throw deleted_rebel;
    }
    yield put(appNotify('success', deleted_rebel.message));
    yield put({ type: GET_REBEL_GROUPS });
  } catch (err) {
    if (err.status === 401) {
      window.location.href = '/';
    }
    yield put(appNotify('error', err.message));
  } finally {
    yield put({ type: DELETE_REBEL_GROUP_END });
  }
}

export function* deleteDialect({ id }) {
  try {
    const token = yield select(makeSelectAppToken());
    const deleted_dialect = yield call(Dialects.delete, token, id);
    if (deleted_dialect.status >= 400) {
      throw deleted_dialect;
    }
    yield put(appNotify('success', deleted_dialect.message));
    yield put({ type: GET_DIALECTS });
  } catch (err) {
    if (err.status === 401) {
      window.location.href = '/';
    }
    yield put(appNotify('error', err.message));
  } finally {
    yield put({ type: DELETE_DIALECT_END });
  }
}

export function* saveGroup({ form }) {
  try {
    const token = yield select(makeSelectAppToken());
    const rebel = yield call(RebelGroups.add, token, form);
    if (rebel.status >= 400) {
      throw rebel;
    }
    yield put(appNotify('success', rebel.message));
    yield put(saveGroupSuccess());
  } catch (err) {
    if (err.status === 401) {
      window.location.href = '/';
    }
    yield put(appNotify('error', err.message));
    yield put({ type: SAVE_GROUP_ERROR, errors: err });
  } finally {
    yield put(saveGroupEnd());
  }
}

export function* saveDialect({ form }) {
  try {
    const token = yield select(makeSelectAppToken());
    const dialect = yield call(Dialects.add, token, form);
    if (dialect.status >= 400) {
      throw dialect;
    }
    yield put(appNotify('success', dialect.message));
    yield put({ type: SAVE_DIALECT_SUCCESS });
  } catch (err) {
    if (err.status === 401) {
      window.location.href = '/';
    }
    yield put(appNotify('error', err.message));
    yield put({ type: SAVE_DIALECT_ERROR, errors: err });
  } finally {
    yield put({ type: SAVE_DIALECT_END });
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function*() {
  yield all([takeLatest(SAVE_GROUP, saveGroup)]);
  yield all([takeLatest(GET_REBEL_GROUPS, getRebelGroups)]);
  yield all([takeLatest(DELETE_REBEL_GROUP, deleteRebelGroups)]);
  yield all([takeLatest(SAVE_DIALECT, saveDialect)]);
  yield all([takeLatest(GET_DIALECTS, getDialects)]);
  yield all([takeLatest(DELETE_DIALECT, deleteDialect)]);
}
