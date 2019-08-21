/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  APP_AUTH_ERROR,
  APP_NOTIFY,
  LOAD_USER_SESSION,
  LOG_OUT,
} from './constants';

// The initial state of the App
export const initialState = {
  token: null,
  loading: false,
  notification: {
    error: '',
    info: '',
    success: '',
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = produce((draft, action) => {
  switch (action.type) {
    case APP_NOTIFY:
      draft.notification[action.notify] = action.message;
      break;
    case LOAD_USER_SESSION:
      draft.token = action.token;
      break;
    case LOG_OUT:
      draft.token = null;
      break;
    case APP_AUTH_ERROR:
      draft.token = null;
      break;
  }
}, initialState);

export default appReducer;
