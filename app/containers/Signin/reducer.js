import produce from 'immer';
import {
  CHANGE_INPUT,
  CHECK_AUTH,
  CHECK_END,
  CHECK_AUTH_ERROR,
  LOGIN_ERROR,
} from './constants';

const form_errors = {
  email: '',
  password: '',
};

// The initial state of the App
export const initialState = {
  loading: false,
  form_errors,
  form: {
    email: '',
    password: '',
  },
};

/* eslint-disable default-case, no-param-reassign, no-case-declarations */
const homeReducer = produce((draft, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      draft.form[action.name] = action.value;
      break;
    case CHECK_AUTH:
      draft.loading = true;
      break;
    case CHECK_AUTH_ERROR:
      draft.loading = false;
      break;
    case CHECK_END:
      draft.loading = false;
      break;
    case LOGIN_ERROR:
      const { errors } = action;
      const f_errors = {
        ...draft.form_errors,
        ...errors,
      };
      draft.form_errors = f_errors;
      break;
  }
}, initialState);

export default homeReducer;
