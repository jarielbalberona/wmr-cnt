/*
 *
 * PersonView actions
 *
 */

import { GET_PERSON, GET_PERSON_END, GET_PERSON_SUCCESS } from './constants';

export function getPerson(id) {
  return {
    type: GET_PERSON,
    id,
  };
}

export function getPersonEnd() {
  return {
    type: GET_PERSON_END,
  };
}

export function getPersonSuccess(data) {
  return {
    type: GET_PERSON_SUCCESS,
    data,
  };
}
