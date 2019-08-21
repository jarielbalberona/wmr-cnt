/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectHome = () =>
  createSelector(
    selectHome,
    homeState => homeState,
  );

const makeSelectLoginAuthenticated = () =>
  createSelector(
    selectHome,
    homeState => homeState.is_authenticated,
  );

const makeSelectLoginForm = () =>
  createSelector(
    selectHome,
    homeState => homeState.form,
  );

const makeSelectLoginFormErrors = () =>
  createSelector(
    selectHome,
    homeState => homeState.form_errors,
  );

export {
  selectHome,
  makeSelectHome,
  makeSelectLoginAuthenticated,
  makeSelectLoginForm,
  makeSelectLoginFormErrors,
};
