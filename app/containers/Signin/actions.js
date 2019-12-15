import {
  CHANGE_INPUT,
  CHECK_AUTH,
  CHECK_AUTH_ERROR,
  CHECK_END,
  LOGIN,
  LOGIN_ERROR,
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

export function login() {
  return {
    type: LOGIN,
  };
}

export function loginError(errors) {
  return {
    type: LOGIN_ERROR,
    errors,
  };
}

export function checkAuthError() {
  return {
    type: CHECK_AUTH_ERROR,
  };
}
