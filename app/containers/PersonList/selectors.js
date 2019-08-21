import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the personList state domain
 */

const selectPersonListDomain = state => state.personList || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PersonList
 */

const makeSelectPersonList = () =>
  createSelector(
    selectPersonListDomain,
    substate => substate,
  );

export default makeSelectPersonList;
export { selectPersonListDomain };
