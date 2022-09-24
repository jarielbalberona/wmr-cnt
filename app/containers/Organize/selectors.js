import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the personView state domain
 */

const selectOrganizeDomain = state => state.organize || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by personView
 */

const makeSelectOrganize = () =>
  createSelector(
    selectOrganizeDomain,
    organizeState => organizeState,
  );
const makeSelectOrganizeGroups = () =>
  createSelector(
    selectOrganizeDomain,
    organizeState => organizeState.groups,
  );
const makeSelectOrganizeLoading = () =>
  createSelector(
    selectOrganizeDomain,
    organizeState => organizeState.loading,
  );

export {
  selectOrganizeDomain,
  makeSelectOrganize,
  makeSelectOrganizeGroups,
  makeSelectOrganizeLoading,
};
