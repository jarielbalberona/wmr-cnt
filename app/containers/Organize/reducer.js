/*
 *
 * PersonList reducer
 *
 */

import produce from 'immer';
import { GET_PERSON, GET_PERSON_SUCCESS, GET_PERSON_END } from './constants';

export const initialState = {
  loading: false,
  data: [],
};

/* eslint-disable default-case, no-param-reassign */
const personListReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_PERSON:
      draft.loading = true;
      break;
    case GET_PERSON_SUCCESS:
      draft.data = action.data;
      break;
    case GET_PERSON_END:
      draft.loading = false;
      break;
  }
}, initialState);

export default personListReducer;
