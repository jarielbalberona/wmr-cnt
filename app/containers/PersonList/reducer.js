/*
 *
 * PersonList reducer
 *
 */

import produce from 'immer';
import {
  LOAD_PERSON_LIST,
  LOAD_PERSON_LIST_SUCCESS,
  LOAD_PERSON_LIST_END,
} from './constants';

export const initialState = {
  loading: false,
  person_list: [],
};

/* eslint-disable default-case, no-param-reassign */
const personListReducer = produce((draft, action) => {
  switch (action.type) {
    case LOAD_PERSON_LIST:
      draft.loading = true;
      break;
    case LOAD_PERSON_LIST_SUCCESS:
      draft.person_list = action.list;
      break;
    case LOAD_PERSON_LIST_END:
      draft.loading = false;
      break;
  }
}, initialState);

export default personListReducer;
