/*
 * SignupReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { CHANGE_INPUT, SIGNUP, SIGNUP_ERROR } from './constants';

const form_errors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
};

// The initial state of the App
export const initialState = {
  form_errors,
  form: {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  },
};

/* eslint-disable default-case, no-param-reassign, no-case-declarations */
const SignupReducer = produce((draft, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      draft.form[action.name] = action.value;
      break;
    case SIGNUP:
      draft.form_errors = form_errors;
      break;
    case SIGNUP_ERROR:
      const { errors } = action;
      const f_errors = {
        ...draft.form_errors,
        ...errors,
      };
      draft.form_errors = f_errors;
      break;
  }
}, initialState);

export default SignupReducer;
