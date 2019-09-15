/*
 *
 * PersonAdd actions
 *
 */

import {
  CREATE_DIALECT,
  CREATE_DIALECT_END,
  CREATE_DIALECT_SUCCESS,
  GET_DIALECTS,
  GET_DIALECTS_END,
  GET_DIALECTS_ERROR,
  GET_DIALECTS_SUCCESS,
  GET_REBEL_GROUPS,
  GET_REBEL_GROUPS_END,
  GET_REBEL_GROUPS_SUCCESS,
  PERSONAL_CHANGE_INPUT,
  PERSONAL_CHANGE_SELECT,
  PERSON_DATA_CHANGE,
  PERSON_DATA_SAVE,
  PERSON_DATA_SAVE_END,
  PERSON_DATA_SAVE_ERROR,
  PERSON_DATA_SAVE_SUCCESS,
} from './constants';

export function createNewDialect(value) {
  return {
    type: CREATE_DIALECT,
    value,
  };
}

export function createNewDialectEnd() {
  return {
    type: CREATE_DIALECT_END,
  };
}

export function createNewDialectSuccess(option) {
  return {
    type: CREATE_DIALECT_SUCCESS,
    option,
  };
}

export function getDialects() {
  return {
    type: GET_DIALECTS,
  };
}

export function getDialectsEnd() {
  return {
    type: GET_DIALECTS_END,
  };
}

export function getDialectsError(error) {
  return {
    type: GET_DIALECTS_ERROR,
    error,
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

export function personalChangeInput(name, value) {
  return {
    type: PERSONAL_CHANGE_INPUT,
    name,
    value,
  };
}

export function changeData(property, value, rebel_group_id) {
  return {
    type: PERSON_DATA_CHANGE,
    property,
    value,
    rebel_group_id,
  };
}

export function personalChangeSelect(property, value) {
  return {
    type: PERSONAL_CHANGE_SELECT,
    property,
    value,
  };
}

export function savePerson() {
  return {
    type: PERSON_DATA_SAVE,
  };
}

export function savePersonEnd() {
  return {
    type: PERSON_DATA_SAVE_END,
  };
}
export function savePersonError(errors) {
  return {
    type: PERSON_DATA_SAVE_ERROR,
    errors,
  };
}

export function savePersonSuccess() {
  return {
    type: PERSON_DATA_SAVE_SUCCESS,
  };
}
