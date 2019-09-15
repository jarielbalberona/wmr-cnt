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
} from 'constants/lists';

import {
  CREATE_DIALECT_SUCCESS,
  GET_DIALECTS_SUCCESS,
  GET_REBEL_GROUPS_SUCCESS,
  PERSONAL_CHANGE_INPUT,
  PERSONAL_CHANGE_SELECT,
  PERSON_DATA_CHANGE,
  PERSON_DATA_SAVE,
  PERSON_DATA_SAVE_END,
  PERSON_DATA_SAVE_ERROR,
  PERSON_DATA_SAVE_SUCCESS,
} from './constants';

const form_initial = {
  alias_nickname: '',
  group_type: '',
  group: '',
  rebel_group: '',
  personal_data: {
    first_name: '',
    last_name: '',
    middle_name: '',
    birth_date: '',
    age: '',
    birth_place: '',
    civil_status: '',
    religion: '',
    dialects: null,
    ethnic_tribe: '',
    educational_attainment: '',
    school_name: '',
  },
};
const errors_initial = {
  alias_nickname: '',
  rebel_group: '',
};

export const initialState = {
  options: {
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
    case CREATE_DIALECT_SUCCESS:
      const { option } = action;
      const new_options = draft.options.dialects;
      new_options.push(option);
      draft.options.dialects = new_options;
      break;
    case GET_REBEL_GROUPS_SUCCESS:
      draft.options.rebel_groups = action.data;
      break;
    case GET_DIALECTS_SUCCESS:
      draft.options.dialects = action.data;
      break;
    case PERSONAL_CHANGE_INPUT:
      draft.form.personal_data[action.name] = action.value;
      break;
    case PERSONAL_CHANGE_SELECT:
      draft.form.personal_data[action.property] = action.value;
      break;
    case PERSON_DATA_CHANGE:
      draft.form[action.property] = action.value;
      break;
    case PERSON_DATA_SAVE:
      draft.loading = true;
      break;
    case PERSON_DATA_SAVE_ERROR:
      draft.errors = action.errors;
      break;
    case PERSON_DATA_SAVE_END:
      draft.loading = false;
      break;
    case PERSON_DATA_SAVE_SUCCESS:
      draft.form = form_initial;
      draft.errors = errors_initial;
      break;
  }
}, initialState);

export default personAddReducer;
