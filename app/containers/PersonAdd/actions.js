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
  FAMILY_CHANGE_INPUT,
  FAMILY_SIBLING_CHANGE_INPUT,
  PERSONAL_CHANGE_SELECT,
  PERSON_DATA_CHANGE,
  PERSON_DATA_SAVE,
  PERSON_DATA_SAVE_END,
  PERSON_DATA_SAVE_ERROR,
  PERSON_DATA_SAVE_SUCCESS,
  CHANGE_TEXTAREA,
  GET_REBEL,
  GET_REBEL_SUCCESS,
  GET_REBEL_END,
  ADD_SIBLING,
  ADD_RELATIVE_GS,
  ADD_RELATIVE_LCM,
  RELATIVE_GS_CHANGE_INPUT,
  RELATIVE_LCM_CHANGE_INPUT,
  BATTLE_DIS_MIS_CHANGE_INPIUT,
  ADD_BATTLE_DIS_MIS,
  LOAD_ADD_PERSON,
  PERSON_DATA_UPDATE,
  FAMILY_SIBLING_REMOVE,
  RELATIVE_GS_REMOVE,
  RELATIVE_LCM_REMOVE,
  BATTLE_DIS_MIS_REMOVE,
  PERSON_RESET,
  ADD_CASE,
  REMOVE_CASE,
  CASE_INPUT_CHANGE,
} from './constants';

export function loadAddPerson() {
  return {
    type: LOAD_ADD_PERSON,
  };
}

export function createNewDialect(value) {
  return {
    type: CREATE_DIALECT,
    value,
  };
}

export function getRebel(id) {
  return {
    type: GET_REBEL,
    id,
  };
}

export function getRebelSuccess(data) {
  return {
    type: GET_REBEL_SUCCESS,
    data,
  };
}

export function getRebelEnd(data) {
  return {
    type: GET_REBEL_END,
    data,
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

export function personalChangeInput(parent, name, value) {
  return {
    type: PERSONAL_CHANGE_INPUT,
    parent,
    name,
    value,
  };
}

export function familyChangeInput(parent, name, value) {
  return {
    type: FAMILY_CHANGE_INPUT,
    parent,
    name,
    value,
  };
}

export function familySiblingChangeInput(key, name, value) {
  return {
    type: FAMILY_SIBLING_CHANGE_INPUT,
    key,
    name,
    value,
  };
}

export function removeSibling(key) {
  return {
    type: FAMILY_SIBLING_REMOVE,
    key,
  };
}

export function removeRelativeGs(key) {
  return {
    type: RELATIVE_GS_REMOVE,
    key,
  };
}

export function removeRelativeLcm(key) {
  return {
    type: RELATIVE_LCM_REMOVE,
    key,
  };
}

export function relativeGsChangeInput(key, name, value) {
  return {
    type: RELATIVE_GS_CHANGE_INPUT,
    key,
    name,
    value,
  };
}

export function removeBattleFactorsDisMis(parent, key) {
  return {
    type: BATTLE_DIS_MIS_REMOVE,
    parent,
    key,
  };
}

export function battleFactorsDisMis(obj, key, name, value) {
  return {
    type: BATTLE_DIS_MIS_CHANGE_INPIUT,
    obj,
    key,
    name,
    value,
  };
}

export function relativeLcmChangeInput(key, name, value) {
  return {
    type: RELATIVE_LCM_CHANGE_INPUT,
    key,
    name,
    value,
  };
}

export function addSibling() {
  return {
    type: ADD_SIBLING,
  };
}

export function addRelativeGs() {
  return {
    type: ADD_RELATIVE_GS,
  };
}

export function addRelativeLcm() {
  return {
    type: ADD_RELATIVE_LCM,
  };
}

export function addBattleFactorsDisMis(obj) {
  return {
    type: ADD_BATTLE_DIS_MIS,
    obj,
  };
}

export function changeTextarea(parent, name, value) {
  return {
    type: CHANGE_TEXTAREA,
    parent,
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

export function caseInputChange(key, name, value) {
  return {
    type: CASE_INPUT_CHANGE,
    key,
    name,
    value,
  };
}

export function addCase() {
  return {
    type: ADD_CASE,
  };
}

export function removeCase(key) {
  return {
    type: REMOVE_CASE,
    key,
  };
}

export function savePerson() {
  return {
    type: PERSON_DATA_SAVE,
  };
}

export function updatePerson(id) {
  return {
    type: PERSON_DATA_UPDATE,
    id,
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

export function savePersonSuccess(type) {
  return {
    type: PERSON_DATA_SAVE_SUCCESS,
    save_type: type,
  };
}

export function resetPerson() {
  return {
    type: PERSON_RESET,
  };
}
