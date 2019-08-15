/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const makeSelectApp = () =>
  createSelector(
    selectGlobal,
    globalState => globalState,
  );

const makeSelectAppNotifyError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.notification.error,
  );

const makeSelectAppNotifyInfo = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.notification.info,
  );

const makeSelectAppNotifySuccess = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.notification.success,
  );

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export {
  selectGlobal,
  makeSelectApp,
  makeSelectAppNotifyError,
  makeSelectAppNotifyInfo,
  makeSelectAppNotifySuccess,
  makeSelectLoading,
  makeSelectLocation,
};
