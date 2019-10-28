import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the personList state domain
 */

const selectPersonViewDomain = state => state.personList || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PersonList
 */

const makeSelectPerson = () =>
  createSelector(
    selectPersonViewDomain,
    personViewtate => personViewtate.data,
  );
const makeSelectPersonLoading = () =>
  createSelector(
    selectPersonViewDomain,
    personViewtate => personViewtate.loading,
  );

export { selectPersonViewDomain, makeSelectPerson, makeSelectPersonLoading };
