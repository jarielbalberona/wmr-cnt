/*
 * App Actions
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

import { toast } from 'react-toastify';
import {
  APP_AUTH_ERROR,
  APP_NOTIFY,
  LOAD_USER_SESSION,
  LOG_OUT,
} from './constants';

export function appAuthError() {
  return {
    type: APP_AUTH_ERROR,
  };
}

export function appNotify(type, message) {
  toast(message, {
    type: toast.TYPE[type.toUpperCase()],
    autoClose: 3000,
    draggable: false,
    hideProgressBar: true,
    position: toast.POSITION.BOTTOM_RIGHT,
    className: 'app-toast',
  });
  return {
    type: APP_NOTIFY,
    notify: type,
    message,
  };
}

export function loadUserSession(token) {
  return {
    type: LOAD_USER_SESSION,
    token,
  };
}

export function logOut() {
  return {
    type: LOG_OUT,
  };
}
