/*
 *
 * PersonAdd actions
 *
 */

import {
  PERSONAL_CHANGE_INPUT,
  PERSON_DATA_CHANGE,
  PERSON_DATA_SAVE,
  PERSON_DATA_SAVE_END,
  PERSON_DATA_SAVE_SUCCESS,
} from './constants';

export function personalChangeInput(name, value) {
  return {
    type: PERSONAL_CHANGE_INPUT,
    name,
    value,
  };
}

export function changeData(property, value) {
  return {
    type: PERSON_DATA_CHANGE,
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

export function savePersonSuccess() {
  return {
    type: PERSON_DATA_SAVE_SUCCESS,
  };
}
