/*
 *
 * PersonList actions
 *
 */

import {
  LOAD_PERSON_LIST,
  LOAD_PERSON_LIST_END,
  LOAD_PERSON_LIST_SUCCESS,
  DELETE_PERSON,
  DELETE_PERSON_END,
  DELETE_PERSON_ERROR,
  DELETE_PERSON_SUCCESS,
} from './constants';

export function loadPersonList() {
  return {
    type: LOAD_PERSON_LIST,
  };
}

export function loadPersonListSuccess(list) {
  return {
    type: LOAD_PERSON_LIST_SUCCESS,
    list,
  };
}

export function loadPersonListEnd() {
  return {
    type: LOAD_PERSON_LIST_END,
  };
}

export function deletePerson(id) {
  return {
    type: DELETE_PERSON,
    id,
  };
}

export function deletePersonSuccess() {
  return {
    type: DELETE_PERSON_SUCCESS,
  };
}

export function deletePersonError() {
  return {
    type: DELETE_PERSON_ERROR,
  };
}

export function deletePersonEnd() {
  return {
    type: DELETE_PERSON_END,
  };
}
