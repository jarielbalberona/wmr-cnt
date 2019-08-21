import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the personAdd state domain
 */

const selectPersonAddDomain = state => state.personAdd || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PersonAdd
 */

const makeSelectPersonAdd = () =>
  createSelector(
    selectPersonAddDomain,
    substate => substate,
  );

export default makeSelectPersonAdd;
export { selectPersonAddDomain };
