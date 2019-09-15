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

const makeSelectPersonErrors = () =>
  createSelector(
    selectPersonAddDomain,
    personAddState => personAddState.errors,
  );

const makeSelectCivilStatus = () =>
  createSelector(
    selectPersonAddDomain,
    personAddState => personAddState.options.civil_status,
  );

const makeSelectEducationalAttainment = () =>
  createSelector(
    selectPersonAddDomain,
    personAddState => personAddState.options.educational_attainment,
  );

const makeSelectDialects = () =>
  createSelector(
    selectPersonAddDomain,
    personAddState => personAddState.options.dialects,
  );

const makeSelectEthnicTribes = () =>
  createSelector(
    selectPersonAddDomain,
    personAddState => personAddState.options.ethnic_tribes,
  );

const makeSelectReligions = () =>
  createSelector(
    selectPersonAddDomain,
    personAddState => personAddState.options.religions,
  );

const makeSelectRebelGroups = () =>
  createSelector(
    selectPersonAddDomain,
    personAddState => personAddState.options.rebel_groups,
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
  makeSelectPersonErrors,
  makeSelectCivilStatus,
  makeSelectEducationalAttainment,
  makeSelectEthnicTribes,
  makeSelectDialects,
  makeSelectFormTabs,
  makeSelectForm,
  makeSelectRebelGroups,
  makeSelectReligions,
};
