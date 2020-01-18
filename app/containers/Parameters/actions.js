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
  GET_REBEL_GROUP,
  GET_REBEL_GROUP_END,
  GET_REBEL_GROUP_SUCCESS,
  ADD_PLATOON_GROUP,
  ADD_SQUAD_GROUP,
  ADD_PLATOON_SQUAD_GROUP,
  ADD_PLATOON_SQUAD_TEAM_GROUP,
  ADD_SQUAD_TEAM_GROUP,
  DELETE_PLATOON_GROUP,
  DELETE_SQUAD_GROUP,
  DELETE_PLATOON_SQUAD_GROUP,
  DELETE_PLATOON_SQUAD_TEAM_GROUP,
  DELETE_SQUAD_TEAM_GROUP,
  CHANGE_INPUT_PLATOON_SQUAD,
  CHANGE_INPUT_PLATOON_SQUAD_NAME,
  CHANGE_INPUT_PLATOON_SQUAD_TEAM_NAME,
  CHANGE_INPUT_SQUAD_TEAM_NAME,
  SAVE_GROUP_ORG,
} from './constants';

export function saveGroupOrg(id, group_org_form) {
  return {
    type: SAVE_GROUP_ORG,
    id,
    group_org_form,
  };
}

export function changeInputSquadTeamName(squad_index, team_index, name, value) {
  return {
    type: CHANGE_INPUT_SQUAD_TEAM_NAME,
    squad_index,
    team_index,
    name,
    value,
  };
}

export function changeInputPlatoonSquadTeamName(
  platoon_index,
  squad_index,
  team_index,
  name,
  value,
) {
  return {
    type: CHANGE_INPUT_PLATOON_SQUAD_TEAM_NAME,
    platoon_index,
    squad_index,
    team_index,
    name,
    value,
  };
}

export function changeInputPlatoonSquadName(
  platoon_index,
  squad_index,
  name,
  value,
) {
  return {
    type: CHANGE_INPUT_PLATOON_SQUAD_NAME,
    platoon_index,
    squad_index,
    name,
    value,
  };
}

export function changeInputPlatoonSquad(group, index, name, value) {
  return {
    type: CHANGE_INPUT_PLATOON_SQUAD,
    group,
    index,
    name,
    value,
  };
}

export function addPlatoonGroup() {
  return {
    type: ADD_PLATOON_GROUP,
  };
}

export function addSquadGroup() {
  return {
    type: ADD_SQUAD_GROUP,
  };
}

export function addPlatoonSquadGroup(key) {
  return {
    type: ADD_PLATOON_SQUAD_GROUP,
    key,
  };
}

export function addPlatoonSquadTeamGroup(platoon_index, squad_index) {
  return {
    type: ADD_PLATOON_SQUAD_TEAM_GROUP,
    platoon_index,
    squad_index,
  };
}

export function addSquadTeamGroup(key) {
  return {
    type: ADD_SQUAD_TEAM_GROUP,
    key,
  };
}

export function deletePlatoonGroup(key) {
  return {
    type: DELETE_PLATOON_GROUP,
    key,
  };
}

export function deleteSquadGroup(key) {
  return {
    type: DELETE_SQUAD_GROUP,
    key,
  };
}

export function deletePlatoonSquadGroup(platoon_index, squad_index) {
  return {
    type: DELETE_PLATOON_SQUAD_GROUP,
    platoon_index,
    squad_index,
  };
}

export function deletePlatoonSquadTeamGroup(
  platoon_index,
  squad_index,
  team_index,
) {
  return {
    type: DELETE_PLATOON_SQUAD_TEAM_GROUP,
    platoon_index,
    squad_index,
    team_index,
  };
}

export function deleteSquadTeamGroup(squad_index, team_index) {
  return {
    type: DELETE_SQUAD_TEAM_GROUP,
    squad_index,
    team_index,
  };
}

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

export function getRebelGroup(group) {
  return {
    type: GET_REBEL_GROUP,
    id: group.value,
  };
}

export function getRebelGroupEnd() {
  return {
    type: GET_REBEL_GROUP_END,
  };
}

export function getRebelGroupSuccess(data) {
  return {
    type: GET_REBEL_GROUP_SUCCESS,
    data,
  };
}
