/*
 *
 * PersonAdd reducer
 *
 */

import produce from 'immer';
import {
  civil_status,
  educational_attainment,
  ethnic_tribes,
  form_tabs,
  religions,
  criminal_cases as criminal_cases_options,
  rtc_regions,
} from 'constants/lists';

import {
  CREATE_DIALECT_SUCCESS,
  GET_DIALECTS_SUCCESS,
  GET_REBEL_GROUPS,
  GET_REBEL_GROUPS_SUCCESS,
  GET_REBEL_GROUPS_END,
  PERSONAL_CHANGE_INPUT,
  PERSONAL_CHANGE_SELECT,
  PERSON_DATA_CHANGE,
  PERSON_DATA_SAVE_ERROR,
  PERSON_DATA_SAVE_SUCCESS,
  CHANGE_TEXTAREA,
  FAMILY_CHANGE_INPUT,
  FAMILY_SIBLING_CHANGE_INPUT,
  GET_REBEL_SUCCESS,
  ADD_SIBLING,
  ADD_RELATIVE_GS,
  ADD_RELATIVE_LCM,
  RELATIVE_GS_CHANGE_INPUT,
  RELATIVE_LCM_CHANGE_INPUT,
  BATTLE_DIS_MIS_CHANGE_INPIUT,
  ADD_BATTLE_DIS_MIS,
  LOAD_ADD_PERSON,
  FAMILY_SIBLING_REMOVE,
  RELATIVE_GS_REMOVE,
  RELATIVE_LCM_REMOVE,
  BATTLE_DIS_MIS_REMOVE,
  PERSON_RESET,
  CASE_INPUT_CHANGE,
  ADD_CASE,
  REMOVE_CASE,
} from './constants';

const form_initial = {
  personal_history_statement: {
    personal_data: {
      dialects: [],
      first_name: '',
      last_name: '',
      middle_name: '',
      birth_date: '',
      age: '',
      birth_place: '',
      gender: '',
      marital_status: '',
      address_home: '',
      address_former: '',
      tribe: '',
      religion: '',
    },
    physical_description: {
      height: '',
      weight: '',
      complexion: '',
      identifying_marks: '',
      eyes: '',
      hair: '',
      build: '',
    },
    family_background: {
      father: {
        alive: true,
        full_name: '',
        age: '',
        birth_date: '',
        birth_place: '',
        present_address: '',
        occupation: '',
      },
      mother: {
        alive: true,
        full_name: '',
        age: '',
        birth_date: '',
        birth_place: '',
        present_address: '',
        occupation: '',
      },
      siblings: [],
    },
    education: {
      attainment: '',
      description: '',
    },
    relatives: {
      government_working: [],
      lcm_org: [],
    },
    criminal_cases: [],
    employment_before_ugm: '',
  },
  alias_nickname: '',
  rebel_group: '',
  group_type: '',
  group: '',
  neutralization: {
    classification: '',
    details: '',
    surrender_reason: '',
  },
  ugm_entry_background: {
    propaganda: '',
    personal_motivation: '',
  },
  ugm_involvement: {
    promotion: '',
    demotion: '',
    violent_activities: '',
    nonviolent_activities: '',
  },
  battle_factors: {
    composition: '',
    dispositions: [],
    strengths: '',
    tactics: '',
    trainings: '',
    logistics: '',
    effectiveness: '',
    plans: '',
    miscellaneous: [],
  },
  comments: '',
  recommendations: '',
  introduction: '',
};

const errors_initial = {
  alias_nickname: '',
  rebel_group: '',
};

export const initialState = {
  options: {
    criminal_cases_options,
    rtc_regions,
    civil_status,
    educational_attainment,
    ethnic_tribes,
    religions,
    rebel_groups: [],
    dialects: [],
  },
  form_tabs,
  loading: false,
  form: form_initial,
  errors: errors_initial,
};

/* eslint-disable default-case, no-param-reassign, no-case-declarations */
const personAddReducer = produce((draft, action) => {
  switch (action.type) {
    case LOAD_ADD_PERSON:
      draft.form = form_initial;
      draft.errors = errors_initial;
      break;
    case GET_REBEL_SUCCESS:
      draft.form = action.data;
      draft.errors = errors_initial;
      break;
    case CREATE_DIALECT_SUCCESS:
      const { option } = action;
      const new_options = draft.options.dialects;
      new_options.push(option);
      draft.options.dialects = new_options;
      break;
    case GET_REBEL_GROUPS:
      draft.loading = true;
      break;
    case GET_REBEL_GROUPS_SUCCESS:
      draft.options.rebel_groups = action.data;
      break;
    case GET_REBEL_GROUPS_END:
      draft.loading = false;
      break;
    case GET_DIALECTS_SUCCESS:
      draft.options.dialects = action.data;
      break;
    case PERSONAL_CHANGE_INPUT:
      draft.form.personal_history_statement[action.parent][action.name] =
        action.value;
      break;
    case CHANGE_TEXTAREA:
      draft.form[action.parent][action.name] = action.value;
      break;
    case PERSONAL_CHANGE_SELECT:
      draft.form.personal_history_statement.personal_data[action.property] =
        action.value;
      break;
    case FAMILY_CHANGE_INPUT:
      draft.form.personal_history_statement.family_background[action.parent][
        action.name
      ] = action.value;
      break;
    case FAMILY_SIBLING_CHANGE_INPUT:
      draft.form.personal_history_statement.family_background.siblings[
        action.key
      ][action.name] = action.value;
      break;
    case ADD_SIBLING:
      draft.form.personal_history_statement.family_background.siblings = [
        ...draft.form.personal_history_statement.family_background.siblings,
        {},
      ];
      break;
    case FAMILY_SIBLING_REMOVE:
      const {
        siblings,
      } = draft.form.personal_history_statement.family_background;
      if (action.key > -1) {
        siblings.splice(action.key, 1);
      }
      draft.form.personal_history_statement.family_background.siblings = [
        ...siblings,
      ];
      break;
    case CASE_INPUT_CHANGE:
      draft.form.personal_history_statement.criminal_cases[action.key][
        action.name
      ] = action.value;
      break;
    case ADD_CASE:
      draft.form.personal_history_statement.criminal_cases = [
        ...draft.form.personal_history_statement.criminal_cases,
        {},
      ];
      break;
    case REMOVE_CASE:
      const { criminal_cases } = draft.form.personal_history_statement;
      if (action.key > -1) {
        criminal_cases.splice(action.key, 1);
      }
      draft.form.personal_history_statement.criminal_cases = [
        ...criminal_cases,
      ];
      break;
    case RELATIVE_GS_REMOVE:
      const {
        government_working,
      } = draft.form.personal_history_statement.relatives;
      if (action.key > -1) {
        government_working.splice(action.key, 1);
      }
      draft.form.personal_history_statement.relatives.government_working = [
        ...government_working,
      ];
      break;
    case RELATIVE_LCM_REMOVE:
      const { lcm_org } = draft.form.personal_history_statement.relatives;
      if (action.key > -1) {
        lcm_org.splice(action.key, 1);
      }
      draft.form.personal_history_statement.relatives.lcm_org = [...lcm_org];
      break;
    case ADD_RELATIVE_GS:
      draft.form.personal_history_statement.relatives.government_working = [
        ...draft.form.personal_history_statement.relatives.government_working,
        {},
      ];
      break;
    case ADD_RELATIVE_LCM:
      draft.form.personal_history_statement.relatives.lcm_org = [
        ...draft.form.personal_history_statement.relatives.lcm_org,
        {},
      ];
      break;
    case ADD_BATTLE_DIS_MIS:
      draft.form.battle_factors[action.obj] = [
        ...draft.form.battle_factors[action.obj],
        {},
      ];
      break;
    case RELATIVE_GS_CHANGE_INPUT:
      draft.form.personal_history_statement.relatives.government_working[
        action.key
      ][action.name] = action.value;
      break;
    case RELATIVE_LCM_CHANGE_INPUT:
      draft.form.personal_history_statement.relatives.lcm_org[action.key][
        action.name
      ] = action.value;
      break;
    case BATTLE_DIS_MIS_CHANGE_INPIUT:
      draft.form.battle_factors[action.obj][action.key][action.name] =
        action.value;
      break;
    case BATTLE_DIS_MIS_REMOVE:
      const parent = draft.form.battle_factors[action.parent];
      if (action.key > -1) {
        parent.splice(action.key, 1);
      }
      draft.form.battle_factors[action.parent] = [...parent];
      break;
    case PERSON_DATA_CHANGE:
      draft.form[action.property] = action.value;
      break;
    case PERSON_DATA_SAVE_ERROR:
      draft.errors = action.errors;
      break;
    case PERSON_DATA_SAVE_SUCCESS:
      if (action.save_type === 'new') {
        draft.form = form_initial;
      }
      draft.errors = errors_initial;
      break;
    case PERSON_RESET:
      draft.form = form_initial;
      draft.errors = errors_initial;
      break;
  }
}, initialState);

export default personAddReducer;
