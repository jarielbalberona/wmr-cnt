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
} from './constants';

const data = {
  personal_history_statement: {
    personal_data: {
      dialects: ['Bisaya, Tagalog'],
      first_name: 'Xandel',
      last_name: 'Areja',
      middle_name: 'Wakwak',
      birth_date: '02/16/1996',
      age: 22,
      birth_place: 'Bukidnon City',
      gender: 'Male',
      marital_status: 'Single',
      address_home: 'TV5 Road, Camp Marina, Brgy Kalunasan',
      address_former: 'Kilid Lahug',
      tribe: 'Tribu Wakwak',
      religion: 'Catholic',
    },
    physical_description: {
      height: '153',
      weight: 55,
      complexion: 'Black',
      identifying_marks: 'Gwapo',
      eyes: 'Brown',
      hair: 'Long black',
      build: 'small',
    },
    family_background: {
      father: {
        alive: true,
        full_name: 'Bentong Kah',
        age: 46,
        birth_date: '11/11/61',
        birth_place: 'Bukidnon',
        present_address: 'Bukidnon Mindaanao',
        occupation: 'teacher',
      },
      mother: {
        alive: true,
        full_name: 'Bentong Kah XX',
        age: 66,
        birth_date: '11/11/61',
        birth_place: 'Bukidnon',
        present_address: 'Bukidnon Mindaanao',
        occupation: 'teacher',
      },
      siblings: [
        {
          full_name: 'Mura Kah',
          age: 25,
          address: 'Bukid Bukidnon',
        },
        {
          full_name: 'Mahal Kah',
          age: 28,
          address: 'Bukid Bukidnon',
        },
      ],
    },
    education: {
      attainment: "Bachelor's degree",
      description: 'Bukidnon State',
    },
    relatives: {
      government_working: [
        {
          full_name: 'Wah Ehl',
          description: 'Fixer CCAS',
        },
        {
          full_name: 'Wahj Apn Ehl',
          description: 'Brgy Tanod',
        },
      ],
      lcm_org: [
        {
          full_name: 'Nah Ehl He',
          description: 'Wa rah ghud',
        },
        {
          full_name: 'Bruno Apn Ehl',
          description: 'Yeah yeah',
        },
      ],
    },
    employment_before_ugm: 'Barber',
  },
  alias_nickname: 'Pabo',
  rebel_group: '5d7cc388d6610f43b748589e',
  group_type: 'Red',
  group: 'Cancers',
  neutralization: {
    classification: 'Surrendered',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    surrender_reason:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  ugm_entry_background: {
    propaganda:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    personal_motivation:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  ugm_involvement: {
    promotion:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    demotion:
      'Magna eget est lorem ipsum dolor sit. Risus ultricies tristique nulla aliquet enim tortor.',
    violent_activities: 'In eu mi bibendum neque egestas congue.',
    nonviolent_activities:
      'Tincidunt praesent semper feugiat nibh sed pulvinar proin.',
  },
  battle_factors: {
    composition: 'This is the org chart',
    dispositions: [
      {
        municipality: 'Oslob',
        barangay: 'Napo',
        posting_area: 'Bakahan',
        identified_contact: 'Ang Baka',
        supply_flow: 'Kuha og dahon sa sagbot',
        caa_contacts: 'None',
      },
      {
        municipality: 'Oslob',
        barangay: 'Napo',
        posting_area: 'Bakahan',
        identified_contact: 'Ang Baka',
        supply_flow: 'Kuha og dahon sa sagbot',
        caa_contacts: 'None',
      },
    ],
    strengths: 'Way kusog',
    tactics: 'Camper',
    trainings: 'Bootcamp',
    logistics: 'Motor',
    effectiveness: 'Dili effectiveness',
    plans: 'Magcheat gamit og wallhack',
    miscellaneous: [
      {
        name: 'Kanor',
        unit: 'Unit 5',
        description:
          'Urna duis convallis convallis tellus id interdum velit laoreet.',
        remarks: 'Marka Utso',
      },
      {
        name: 'Maria',
        unit: 'Unit 122',
        description: 'Est ante in nibh mauris cursus mattis molestie.',
        remarks: 'Marka Kaka',
      },
    ],
  },
  comments: 'Will order again.',
  recommendations: 'Quis commodo odio aenean sed adipiscing diam.',
  introductions: 'Lorem ipsum dolor de color',
};

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
  introductions: '',
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
  loading: data,
  form: form_initial,
  errors: errors_initial,
  sample_profile: data,
};

/* eslint-disable default-case, no-param-reassign, no-case-declarations */
const personAddReducer = produce((draft, action) => {
  switch (action.type) {
    case LOAD_ADD_PERSON:
      draft.form = form_initial;
      break;
    case GET_REBEL_SUCCESS:
      draft.form = action.data;
      break;
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
