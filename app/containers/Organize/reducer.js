/*
 *
 * PersonList reducer
 *
 */

import produce from 'immer';
import { ActionTypes } from './constants';

export const initialState = {
  loading: false,
  groups: [],
  group: {},
  group_form: {},
  rebels: [],
};

/* eslint-disable default-case, no-param-reassign */
const organizeReducer = produce((draft, action) => {
  switch (action.type) {
    case ActionTypes.CLEAR_FORM:
      draft.group_form = {};
      draft.group = {};
      break;
    case ActionTypes.CHANGE_SQUAD_TEAM_MEMBER:
      draft.group_form.squads[action.data.squad_index].teams[
        action.data.team_index
      ].members = action.data.value;
      break;
    case ActionTypes.CHANGE_SQUAD_TEAM_OFFICER:
      draft.group_form.squads[action.data.squad_index].teams[
        action.data.team_index
      ].officers[action.data.name] = action.data.value;
      break;
    case ActionTypes.CHANGE_SQUAD_OFFICER:
      draft.group_form.squads[action.data.squad_index].officers[
        action.data.name
      ] = action.data.value;
      break;
    case ActionTypes.CHANGE_PLATOON_SQUAD_TEAM_MEMBER:
      draft.group_form.platoons[action.data.platoon_index].squads[
        action.data.squad_index
      ].teams[action.data.team_index].members = action.data.value;
      break;
    case ActionTypes.CHANGE_PLATOON_SQUAD_TEAM_OFFICER:
      draft.group_form.platoons[action.data.platoon_index].squads[
        action.data.squad_index
      ].teams[action.data.team_index].officers[action.data.name] =
        action.data.value;
      break;
    case ActionTypes.CHANGE_PLATOON_SQUAD_OFFICER:
      draft.group_form.platoons[action.data.platoon_index].squads[
        action.data.squad_index
      ].officers[action.data.name] = action.data.value;
      break;
    case ActionTypes.CHANGE_PLATOON_OFFICER:
      draft.group_form.platoons[action.data.index].officers[action.data.name] =
        action.data.value;
      break;
    case ActionTypes.CHANGE_STAFF:
      draft.group_form.staffs[action.data.name] = action.data.value;
      break;
    case ActionTypes.GET_GROUPS_SUCCESS:
      draft.groups = action.data;
      break;
    case ActionTypes.GET_GROUP_SUCCESS:
      draft.group = action.data;
      draft.group_form = action.data;
      break;
    case ActionTypes.GET_REBELS_BY_GROUP_SUCCESS:
      draft.rebels = action.data;
      break;
    case ActionTypes.CLEAR_SELECTED_GROUP:
      draft.group = {};
      draft.group_form = {};
      break;
  }
}, initialState);

export default organizeReducer;
