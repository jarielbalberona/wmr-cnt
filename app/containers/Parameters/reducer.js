/*
 *
 * Parameters Reducer
 *
 */

import produce from 'immer';
import {
  CHANGE_INPUT,
  SAVE_GROUP_SUCCESS,
  SAVE_GROUP_ERROR,
  GET_REBEL_GROUPS,
  GET_REBEL_GROUPS_END,
  GET_REBEL_GROUPS_SUCCESS,
  SAVE_DIALECT_SUCCESS,
  SAVE_DIALECT_ERROR,
  GET_DIALECTS_SUCCESS,
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
} from './constants';

// officers: {
//   leader: '',
//   vice_leader: '',
// },

const team_template = {
  name: '',
  members: [],
};

// officers: {
//   leader: '',
//   vice_leader: '',
// },

const squad_template = {
  name: '',

  teams: [],
};

// officers: {
//   leader: '',
//   vice_leader: '',
//   political_instructor: '',
//   vice_political_instructor: '',
// },

const platoon_template = {
  name: '',
  squads: [],
};

export const initialState = {
  loading: false,
  groups: [],
  group_org: null,
  group_org_form: null,
  group_form: {
    name: '',
    leader: '',
    type: '',
  },
  dialects: [],
  dialect_form: {
    name: '',
  },
  errors: {
    group_form: {},
    dialect_form: {},
  },
};

/* eslint-disable default-case, no-param-reassign, no-case-declarations */
const parametersReducer = produce((draft, action) => {
  switch (action.type) {
    case CHANGE_INPUT_SQUAD_TEAM_NAME:
      draft.group_org_form.squads[action.squad_index].teams[action.team_index][
        action.name
      ] = action.value;
      break;
    case CHANGE_INPUT_PLATOON_SQUAD_TEAM_NAME:
      draft.group_org_form.platoons[action.platoon_index].squads[
        action.squad_index
      ].teams[action.team_index][action.name] = action.value;
      break;
    case CHANGE_INPUT_PLATOON_SQUAD_NAME:
      draft.group_org_form.platoons[action.platoon_index].squads[
        action.squad_index
      ][action.name] = action.value;
      break;
    case CHANGE_INPUT_PLATOON_SQUAD:
      draft.group_org_form[action.group][action.index][action.name] =
        action.value;
      break;
    case DELETE_PLATOON_GROUP:
      const { platoons } = draft.group_org_form;
      if (action.key > -1) {
        platoons.splice(action.key, 1);
      }
      draft.group_org_form.platoons = [...platoons];
      break;
    case DELETE_SQUAD_GROUP:
      const { squads } = draft.group_org_form;
      if (action.key > -1) {
        squads.splice(action.key, 1);
      }
      draft.group_org_form.squads = [...squads];
      break;
    case DELETE_PLATOON_SQUAD_GROUP:
      const platoon_squads =
        draft.group_org_form.platoons[action.platoon_index].squads;
      if (action.squad_index > -1) {
        platoon_squads.splice(action.squad_index, 1);
      }
      draft.group_org_form.platoons[action.platoon_index].squads = [
        ...platoon_squads,
      ];
      break;
    case DELETE_PLATOON_SQUAD_TEAM_GROUP:
      const platoon_squad_teams =
        draft.group_org_form.platoons[action.platoon_index].squads[
          action.squad_index
        ].teams;
      if (action.team_index > -1) {
        platoon_squad_teams.splice(action.team_index, 1);
      }
      draft.group_org_form.platoons[action.platoon_index].squads[
        action.squad_index
      ].teams = [...platoon_squad_teams];
      break;
    case DELETE_SQUAD_TEAM_GROUP:
      const squads_team = draft.group_org_form.squads[action.squad_index].teams;
      if (action.team_index > -1) {
        squads_team.splice(action.team_index, 1);
      }
      draft.group_org_form.squads[action.squad_index].teams = [...squads_team];
      break;
    case ADD_PLATOON_GROUP:
      draft.group_org_form.platoons = [
        ...draft.group_org_form.platoons,
        platoon_template,
      ];
      break;
    case ADD_SQUAD_GROUP:
      draft.group_org_form.squads = [
        ...draft.group_org_form.squads,
        squad_template,
      ];
      break;
    case ADD_PLATOON_SQUAD_GROUP:
      draft.group_org_form.platoons[action.key].squads = [
        ...draft.group_org_form.platoons[action.key].squads,
        squad_template,
      ];
      break;
    case ADD_PLATOON_SQUAD_TEAM_GROUP:
      draft.group_org_form.platoons[action.platoon_index].squads[
        action.squad_index
      ].teams = [
        ...draft.group_org_form.platoons[action.platoon_index].squads[
          action.squad_index
        ].teams,
        team_template,
      ];
      break;
    case ADD_SQUAD_TEAM_GROUP:
      draft.group_org_form.squads[action.key].teams = [
        ...draft.group_org_form.squads[action.key].teams,
        team_template,
      ];
      break;

    case CHANGE_INPUT:
      draft[action.parent][action.name] = action.value;
      break;
    case SAVE_GROUP_SUCCESS:
      draft.group_form = {
        ...initialState.group_form,
      };
      draft.errors = {
        ...initialState.errors,
      };
      break;
    case SAVE_GROUP_ERROR:
      draft.errors.group_form = action.errors.errors;
      break;
    case SAVE_DIALECT_ERROR:
      draft.errors.dialect_form = action.errors.errors;
      break;
    case SAVE_DIALECT_SUCCESS:
      draft.dialect_form = {
        ...initialState.group_form,
      };
      draft.errors = {
        ...initialState.errors,
      };
      break;
    case GET_REBEL_GROUPS:
      draft.loading = true;
      break;
    case GET_REBEL_GROUPS_SUCCESS:
      draft.groups = action.data;
      break;
    case GET_REBEL_GROUP_SUCCESS:
      draft.group_org = action.data;
      draft.group_org_form = action.data;
      break;
    case GET_REBEL_GROUPS_END:
      draft.loading = false;
      break;
    case GET_DIALECTS_SUCCESS:
      draft.dialects = action.data;
      break;
  }
}, initialState);

export default parametersReducer;
