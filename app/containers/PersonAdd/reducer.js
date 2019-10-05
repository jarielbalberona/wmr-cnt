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
      attainment: 'College',
      school: 'Bukidnon State',
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
    classification: 'Surrender',
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
    disposition: [
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
  description: {
    gender: '',
    hair: 'white',
    eyes: 'black',
    height: '',
    weight: '',
    complexion: '',
    identifying_marks: 'gwapo',
  },
  family: {
    father: {
      full_name: 'Jariel Balberona',
      occupation: '',
      age: '',
    },
    mother: {
      full_name: '',
      occupation: '',
      age: '',
    },
    sibling: [
      {
        full_name: 'test jawr',
        age: '',
        address: '',
        gender: '',
      },
    ],
  },
  family_affiliation: {
    relatives: {
      government_service: [
        {
          full_name: 'test jawr',
          occupation: '',
          address: '',
          gender: '',
        },
      ],
      lcm_organization: [
        {
          full_name: 'test jawr',
          occupation: '',
          address: '',
          gender: '',
        },
      ],
    },
  },
  education: [{}],
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
  form: data,
  errors: errors_initial,
  sample_profile: data,
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
