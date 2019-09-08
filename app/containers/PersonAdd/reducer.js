/*
 *
 * PersonAdd reducer
 *
 */

import produce from 'immer';
import {
  PERSONAL_CHANGE_INPUT,
  PERSON_DATA_CHANGE,
  PERSON_DATA_SAVE,
  PERSON_DATA_SAVE_END,
  PERSON_DATA_SAVE_SUCCESS,
} from './constants';

const form_initial = {
  alias_nickname: '',
  group_type: '',
  group: '',
  personal_data: {
    first_name: '',
    last_name: '',
    middle_name: '',
    birth_date: '',
    age: '',
    birth_place: '',
    ethnic_tribe: '',
    educational_attainment: '',
    school_name: '',
  },
};
export const initialState = {
  civil_status: [
    {
      value: 'single',
      label: 'Single',
    },
    {
      value: 'married',
      label: 'Married',
    },
    {
      value: 'widowed',
      label: 'Widowed',
    },
    {
      value: 'separated',
      label: 'Separated',
    },
    {
      value: 'divorced',
      label: 'Divorced',
    },
    {
      value: 'married',
      label: '',
    },
  ],
  form_tabs: [
    {
      title: 'Bio',
    },
    {
      title: 'Family Affiliation',
    },
    {
      title: 'Education/ Employment',
    },
    {
      title: 'Circumstances of Neutralization',
    },
    {
      title: 'Background of Entity',
    },
    {
      title: 'Significant Involvement',
    },
    {
      title: 'Order of Battle Factors',
    },
  ],
  loading: false,
  form: form_initial,
};

/* eslint-disable default-case, no-param-reassign */
const personAddReducer = produce((draft, action) => {
  switch (action.type) {
    case PERSONAL_CHANGE_INPUT:
      draft.form.personal_data[action.name] = action.value;
      break;
    case PERSON_DATA_CHANGE:
      draft.form[action.property] = action.value;
      break;
    case PERSON_DATA_SAVE:
      draft.loading = true;
      break;
    case PERSON_DATA_SAVE_END:
      draft.loading = false;
      break;
    case PERSON_DATA_SAVE_SUCCESS:
      draft.form = form_initial;
      break;
  }
}, initialState);

export default personAddReducer;
