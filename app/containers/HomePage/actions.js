/*
 * Homepage Actions
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

import {
  CHANGE_INPUT,
  CHECK_AUTH,
  CHECK_AUTH_ERROR,
  CHECK_END,
} from './constants';

export function changeInput(name, value) {
  return {
    type: CHANGE_INPUT,
    name,
    value,
  };
}

export function checkAuth() {
  return {
    type: CHECK_AUTH,
  };
}

export function checkAuthEnd() {
  return {
    type: CHECK_END,
  };
}

export function checkAuthError() {
  return {
    type: CHECK_AUTH_ERROR,
  };
}
