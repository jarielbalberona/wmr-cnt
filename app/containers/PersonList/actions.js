/*
 *
 * PersonList actions
 *
 */

import {
  LOAD_PERSON_LIST,
  LOAD_PERSON_LIST_END,
  LOAD_PERSON_LIST_SUCCESS,
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
