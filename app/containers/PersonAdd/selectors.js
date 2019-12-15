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

const makeSelectFormAlias = () =>
  createSelector(
    selectPersonAddDomain,
    personAddState => personAddState.form.alias_nickname,
  );

const makeSelectFormGroupType = () =>
  createSelector(
    selectPersonAddDomain,
    personAddState => personAddState.form.group_type,
  );

const makeSelectFormGroup = () =>
  createSelector(
    selectPersonAddDomain,
    personAddState => personAddState.form.group,
  );

const makeSelectFormPersonalData = () =>
  createSelector(
    selectPersonAddDomain,
    personAddState =>
      personAddState.form.personal_history_statement.personal_data,
  );

const makeSelectFormPersonalDescription = () =>
  createSelector(
    selectPersonAddDomain,
    personAddState =>
      personAddState.form.personal_history_statement.physical_description,
  );

const makeSelectFormPersonalFamily = () =>
  createSelector(
    selectPersonAddDomain,
    personAddState =>
      personAddState.form.personal_history_statement.family_background,
  );

const makeSelectFormPersonalEducation = () =>
  createSelector(
    selectPersonAddDomain,
    personAddState => personAddState.form.personal_history_statement.education,
  );

const makeSelectFormPersonalRelatives = () =>
  createSelector(
    selectPersonAddDomain,
    personAddState => personAddState.form.personal_history_statement.relatives,
  );

const makeSelectFormPersonalEmployment = () =>
  createSelector(
    selectPersonAddDomain,
    personAddState =>
      personAddState.form.personal_history_statement.employment_before_ugm,
  );

const makeSelectFormNeutralization = () =>
  createSelector(
    selectPersonAddDomain,
    personAddState => personAddState.form.neutralization,
  );

const makeSelectFormUGMEntryBackground = () =>
  createSelector(
    selectPersonAddDomain,
    personAddState => personAddState.form.ugm_entry_background,
  );

const makeSelectFormUGMEntryInvolvement = () =>
  createSelector(
    selectPersonAddDomain,
    personAddState => personAddState.form.ugm_involvement,
  );

const makeSelectFormBattleFactors = () =>
  createSelector(
    selectPersonAddDomain,
    personAddState => personAddState.form.battle_factors,
  );

const makeSelectFormComments = () =>
  createSelector(
    selectPersonAddDomain,
    personAddState => personAddState.form.comments,
  );

const makeSelectFormRecommendations = () =>
  createSelector(
    selectPersonAddDomain,
    personAddState => personAddState.form.recommendations,
  );

const makeSelectFormIntroduction = () =>
  createSelector(
    selectPersonAddDomain,
    personAddState => personAddState.form.introduction,
  );
const makeSelectLoading = () =>
  createSelector(
    selectPersonAddDomain,
    personAddState => personAddState.loading,
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
  makeSelectFormAlias,
  makeSelectFormGroupType,
  makeSelectFormGroup,
  makeSelectFormPersonalData,
  makeSelectFormPersonalDescription,
  makeSelectFormPersonalFamily,
  makeSelectFormPersonalEducation,
  makeSelectFormPersonalRelatives,
  makeSelectFormPersonalEmployment,
  makeSelectFormNeutralization,
  makeSelectFormUGMEntryBackground,
  makeSelectFormUGMEntryInvolvement,
  makeSelectFormBattleFactors,
  makeSelectFormComments,
  makeSelectFormRecommendations,
  makeSelectFormIntroduction,
  makeSelectRebelGroups,
  makeSelectReligions,
  makeSelectLoading,
};
