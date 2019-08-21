/*
 * Signup Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { CHANGE_INPUT, SIGNUP, SIGNUP_ERROR } from './constants';

/**
 * Changes the input fields
 *
 * @param  {string} name name of the input field
 * @param  {string} value value of the input field
 *
 * @return {object} An action object with a type of CHANGE_INPUT
 */
export function changeInput(name, value) {
  return {
    type: CHANGE_INPUT,
    name,
    value,
  };
}

/**
 * Signup
 *
 */
export function signUp() {
  return {
    type: SIGNUP,
  };
}

/**
 * Signup Error
 *
 */
export function signupError(errors) {
  return {
    type: SIGNUP_ERROR,
    errors,
  };
}
