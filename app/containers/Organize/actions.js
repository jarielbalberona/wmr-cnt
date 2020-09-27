/*
 *
 * Organize actions
 *
 */

import { ActionTypes } from './constants';

export function clearForm() {
  return {
    type: ActionTypes.CLEAR_FORM,
  };
}
export function saveForm(id, form) {
  return {
    type: ActionTypes.SAVE_FORM,
    id,
    form,
  };
}

export function saveFormSuccess(data) {
  return {
    type: ActionTypes.SAVE_FORM_SUCCESS,
    data,
  };
}

export function saveFormSuccessEnd() {
  return {
    type: ActionTypes.SAVE_FORM_END,
  };
}

export function saveFormSuccessError() {
  return {
    type: ActionTypes.SAVE_FORM_ERROR,
  };
}

export function changeSquadTeamMember(data) {
  return {
    type: ActionTypes.CHANGE_SQUAD_TEAM_MEMBER,
    data,
  };
}

export function changeSquadTeamOfficer(data) {
  return {
    type: ActionTypes.CHANGE_SQUAD_TEAM_OFFICER,
    data,
  };
}

export function changeSquadOfficer(data) {
  return {
    type: ActionTypes.CHANGE_SQUAD_OFFICER,
    data,
  };
}
export function changePlatoonSquadTeamMember(data) {
  return {
    type: ActionTypes.CHANGE_PLATOON_SQUAD_TEAM_MEMBER,
    data,
  };
}

export function changePlatoonSquadTeamOfficer(data) {
  return {
    type: ActionTypes.CHANGE_PLATOON_SQUAD_TEAM_OFFICER,
    data,
  };
}

export function changePlatoonSquadOfficer(data) {
  return {
    type: ActionTypes.CHANGE_PLATOON_SQUAD_OFFICER,
    data,
  };
}

export function changePlatoonOfficer(data) {
  return {
    type: ActionTypes.CHANGE_PLATOON_OFFICER,
    data,
  };
}

export function changeStaff(data) {
  return {
    type: ActionTypes.CHANGE_STAFF,
    data,
  };
}

export function clearSelectedGroup() {
  return {
    type: ActionTypes.CLEAR_SELECTED_GROUP,
  };
}

export function getRebelByGroup(id) {
  return {
    type: ActionTypes.GET_REBELS_BY_GROUP,
    id,
  };
}

export function getRebelByGroupSuccess(data) {
  return {
    type: ActionTypes.GET_REBELS_BY_GROUP_SUCCESS,
    data,
  };
}

export function getRebelByGroupEnd() {
  return {
    type: ActionTypes.GET_REBELS_BY_GROUP_END,
  };
}

export function getGroup(id) {
  return {
    type: ActionTypes.GET_GROUP,
    id,
  };
}

export function getGroupSuccess(data) {
  return {
    type: ActionTypes.GET_GROUP_SUCCESS,
    data,
  };
}

export function getGroupEnd() {
  return {
    type: ActionTypes.GET_GROUP_END,
  };
}

export function getGroups() {
  return {
    type: ActionTypes.GET_GROUPS,
  };
}
export function getGroupsSuccess(data) {
  return {
    type: ActionTypes.GET_GROUPS_SUCCESS,
    data,
  };
}
export function getGroupsEnd() {
  return {
    type: ActionTypes.GET_GROUPS_END,
  };
}
