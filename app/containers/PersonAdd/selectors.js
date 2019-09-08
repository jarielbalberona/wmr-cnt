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
    personAddState => personAddState,
  );

const makeSelectCivilStatus = () =>
  createSelector(
    selectPersonAddDomain,
    personAddState => personAddState.civil_status,
  );

const makeSelectFormTabs = () =>
  createSelector(
    selectPersonAddDomain,
    personAddState => personAddState.form_tabs,
  );

const makeSelectForm = () =>
  createSelector(
    selectPersonAddDomain,
    personAddState => personAddState.form,
  );

export {
  selectPersonAddDomain,
  makeSelectPersonAdd,
  makeSelectCivilStatus,
  makeSelectFormTabs,
  makeSelectForm,
};
