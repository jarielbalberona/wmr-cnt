/*
 *
 * Parameters actions
 *
 */

import {
  CHANGE_INPUT,
  SAVE_GROUP,
  SAVE_GROUP_END,
  SAVE_GROUP_SUCCESS,
  GET_REBEL_GROUPS,
  GET_REBEL_GROUPS_END,
  GET_REBEL_GROUPS_SUCCESS,
  DELETE_REBEL_GROUP,
  SAVE_DIALECT,
  GET_DIALECTS,
  GET_DIALECTS_SUCCESS,
  DELETE_DIALECT,
} from './constants';

export function getDialects() {
  return {
    type: GET_DIALECTS,
  };
}

export function deleteDialect(id) {
  return {
    type: DELETE_DIALECT,
    id,
  };
}

export function getDialectsSuccess(data) {
  return {
    type: GET_DIALECTS_SUCCESS,
    data,
  };
}

export function getRebelGroups() {
  return {
    type: GET_REBEL_GROUPS,
  };
}

export function getRebelGroupsEnd() {
  return {
    type: GET_REBEL_GROUPS_END,
  };
}

export function getRebelGroupsSuccess(data) {
  return {
    type: GET_REBEL_GROUPS_SUCCESS,
    data,
  };
}

export function deleteRebelGroup(id) {
  return {
    type: DELETE_REBEL_GROUP,
    id,
  };
}

export function changeInput(parent, name, value) {
  return {
    type: CHANGE_INPUT,
    parent,
    name,
    value,
  };
}

export function saveGroup(form) {
  return {
    type: SAVE_GROUP,
    form,
  };
}

export function saveGroupEnd() {
  return {
    type: SAVE_GROUP_END,
  };
}

export function saveGroupSuccess() {
  return {
    type: SAVE_GROUP_SUCCESS,
  };
}

export function saveDialect(form) {
  return {
    type: SAVE_DIALECT,
    form,
  };
}
