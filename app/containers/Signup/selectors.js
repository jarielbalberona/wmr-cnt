/**
 * Signup selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSignup = state => state.signup || initialState;

const makeSelectSignup = () =>
  createSelector(
    selectSignup,
    signupState => signupState,
  );

const makeSelectSignupForm = () =>
  createSelector(
    selectSignup,
    signupState => signupState.form,
  );

const makeSelectSignupFormErrors = () =>
  createSelector(
    selectSignup,
    signupState => signupState.form_errors,
  );

export {
  selectSignup,
  makeSelectSignup,
  makeSelectSignupForm,
  makeSelectSignupFormErrors,
};
