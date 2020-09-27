import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import RebelGroups from 'services/rebel-groups';
import Rebels from 'services/rebels';
import { appNotify } from 'containers/App/actions';
import { makeSelectAppToken } from 'containers/App/selectors';
import {
  getGroupsEnd,
  getGroupsSuccess,
  getGroupSuccess,
  getGroupEnd,
  getRebelByGroupSuccess,
  getRebelByGroupEnd,
  saveFormSuccess,
} from './actions';
import { ActionTypes } from './constants';

export function* getGroups() {
  try {
    const token = yield select(makeSelectAppToken());
    const groups = yield call(RebelGroups.list, token);
    if (groups.status >= 400) {
      throw groups;
    }
    yield put(getGroupsSuccess(groups.data));
  } catch (err) {
    if (err.status === 401) {
      window.location.href = '/';
    }
    yield put(appNotify('error', err.message));
  } finally {
    yield put(getGroupsEnd());
  }
}

export function* getGroup({ id }) {
  try {
    const token = yield select(makeSelectAppToken());
    const group = yield call(RebelGroups.get, token, id);
    if (group.status >= 400) {
      throw group;
    }
    yield put(getGroupSuccess(group.data));
  } catch (err) {
    if (err.status === 401) {
      window.location.href = '/';
    }
    yield put(appNotify('error', err.message));
  } finally {
    yield put(getGroupEnd());
  }
}

export function* getRebelByGroup({ id }) {
  try {
    const token = yield select(makeSelectAppToken());
    const rebels = yield call(Rebels.getByGroupId, id, token);
    if (rebels.status >= 400) {
      throw rebels;
    }
    yield put(getRebelByGroupSuccess(rebels.data));
  } catch (err) {
    if (err.status === 401) {
      window.location.href = '/';
    }
    yield put(appNotify('error', err.message));
  } finally {
    yield put(getRebelByGroupEnd());
  }
}

export function* saveGroupForm({ id, form }) {
  try {
    const token = yield select(makeSelectAppToken());
    const new_form = {
      ...form,
    };

    delete new_form._id;
    delete new_form.__v;
    delete new_form.created;
    delete new_form.type;
    delete new_form.name;
    delete new_form.leader;

    const group = yield call(RebelGroups.update, token, id, new_form);
    if (group.status >= 400) {
      throw group;
    }

    yield put(appNotify('success', group.message));
    yield put(saveFormSuccess(group.data));
  } catch (err) {
    if (err.status === 401) {
      window.location.href = '/';
    }
    yield put(appNotify('error', err.message));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function*() {
  yield all([takeLatest(ActionTypes.GET_GROUPS, getGroups)]);
  yield all([takeLatest(ActionTypes.GET_GROUP, getGroup)]);
  yield all([takeLatest(ActionTypes.GET_REBELS_BY_GROUP, getRebelByGroup)]);
  yield all([takeLatest(ActionTypes.SAVE_FORM, saveGroupForm)]);
}
