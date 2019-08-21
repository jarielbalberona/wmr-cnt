import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the admin state domain
 */

const selectAdminDomain = state => state.admin || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Admin
 */

const makeSelectAdmin = () =>
  createSelector(
    selectAdminDomain,
    substate => substate,
  );
const makeSelectAdminSideMenu = () =>
  createSelector(
    selectAdminDomain,
    substate => substate.side_expanded,
  );

export { selectAdminDomain, makeSelectAdmin, makeSelectAdminSideMenu };
