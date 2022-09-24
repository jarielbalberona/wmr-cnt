import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the personView state domain
 */

const selectPersonViewDomain = state => state.personView || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by personView
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
