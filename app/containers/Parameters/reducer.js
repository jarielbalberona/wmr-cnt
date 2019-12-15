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
} from './constants';

export const initialState = {
  loading: false,
  groups: [],
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

/* eslint-disable default-case, no-param-reassign */
const parametersReducer = produce((draft, action) => {
  switch (action.type) {
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
    case GET_REBEL_GROUPS_END:
      draft.loading = false;
      break;
    case GET_DIALECTS_SUCCESS:
      draft.dialects = action.data;
      break;
  }
}, initialState);

export default parametersReducer;
