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
    personListState => personListState,
  );

const makeSelectList = () =>
  createSelector(
    selectPersonListDomain,
    personListState => personListState.person_list,
  );

const makeSelectPersonLoading = () =>
  createSelector(
    selectPersonListDomain,
    personListState => personListState.loading,
  );

export {
  selectPersonListDomain,
  makeSelectPersonList,
  makeSelectList,
  makeSelectPersonLoading,
};
