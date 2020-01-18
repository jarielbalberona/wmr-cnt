import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the parameters state domain
 */

const selectParametersDomain = state => state.parameters || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by parameters
 */

const makeSelectGroups = () =>
  createSelector(
    selectParametersDomain,
    parametersState => parametersState.groups,
  );
const makeSelectSelectedGroupOrg = () =>
  createSelector(
    selectParametersDomain,
    parametersState => parametersState.group_org,
  );
const makeSelectSelectedGroupOrgForm = () =>
  createSelector(
    selectParametersDomain,
    parametersState => parametersState.group_org_form,
  );
const makeSelectGroupForm = () =>
  createSelector(
    selectParametersDomain,
    parametersState => parametersState.group_form,
  );
const makeSelectDialects = () =>
  createSelector(
    selectParametersDomain,
    parametersState => parametersState.dialects,
  );
const makeSelectDialectForm = () =>
  createSelector(
    selectParametersDomain,
    parametersState => parametersState.dialect_form,
  );
const makeSelectPersonLoading = () =>
  createSelector(
    selectParametersDomain,
    parametersState => parametersState.loading,
  );
const makeSelectErrors = () =>
  createSelector(
    selectParametersDomain,
    parametersState => parametersState.errors,
  );

export {
  selectParametersDomain,
  makeSelectGroups,
  makeSelectSelectedGroupOrg,
  makeSelectSelectedGroupOrgForm,
  makeSelectGroupForm,
  makeSelectDialects,
  makeSelectDialectForm,
  makeSelectPersonLoading,
  makeSelectErrors,
};
