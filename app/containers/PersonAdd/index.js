/**
 *
 * PersonAdd
 *
 */

import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import BioPersonal from 'components/PersonAddComponents/BioPersonal';
import BioDescription from 'components/PersonAddComponents/BioDescription';
import BioFamily from 'components/PersonAddComponents/BioFamily';
import EducationEmployment from 'components/PersonAddComponents/EducationEmployment';
import FormParagraphWithTitle from 'components/PersonAddComponents/FormParagraphWithTitle';
import FamAffRelatives from 'components/PersonAddComponents/FamAffRelatives';
import BattleFactorsDispositions from 'components/PersonAddComponents/BattleFactorsDispositions';
import BattleFactorsMiscellaneous from 'components/PersonAddComponents/BattleFactorsMiscellaneous';

import {
  makeSelectPersonErrors,
  makeSelectCivilStatus,
  makeSelectDialects,
  makeSelectEducationalAttainment,
  makeSelectEthnicTribes,
  makeSelectFormTabs,
  makeSelectReligions,
  makeSelectRebelGroups,
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
  makeSelectFormIntroductions,
} from './selectors';
import {
  createNewDialect,
  changeData,
  getRebel,
  getRebelGroups,
  getDialects,
  personalChangeInput,
  personalChangeSelect,
  savePerson,
  changeTextarea,
  familyChangeInput,
  addSibling,
  familySiblingChangeInput,
  addRelativeLcm,
  addRelativeGs,
  relativeGsChangeInput,
  relativeLcmChangeInput,
  battleFactorsDisMis,
  addBattleFactorsDisMis,
  loadAddPerson,
} from './actions';
import reducer from './reducer';
import saga from './saga';

import './styles';

const key = 'personAdd';

const stateSelector = createStructuredSelector({
  civil_status: makeSelectCivilStatus(),
  educational_attainment: makeSelectEducationalAttainment(),
  ethnic_tribes: makeSelectEthnicTribes(),
  dialects: makeSelectDialects(),
  rebel_groups: makeSelectRebelGroups(),
  religions: makeSelectReligions(),
  errors: makeSelectPersonErrors(),
  form_tabs: makeSelectFormTabs(),
  form: makeSelectForm(),
  alias_nickname: makeSelectFormAlias(),
  group_type: makeSelectFormGroupType(),
  group: makeSelectFormGroup(),
  personal_data: makeSelectFormPersonalData(),
  personal_description: makeSelectFormPersonalDescription(),
  personal_family: makeSelectFormPersonalFamily(),
  personal_education: makeSelectFormPersonalEducation(),
  personal_relatives: makeSelectFormPersonalRelatives(),
  personal_employment: makeSelectFormPersonalEmployment(),
  neutralization: makeSelectFormNeutralization(),
  ugm_entry_background: makeSelectFormUGMEntryBackground(),
  ugm_involvement: makeSelectFormUGMEntryInvolvement(),
  battle_factors: makeSelectFormBattleFactors(),
  comments: makeSelectFormComments(),
  recommendations: makeSelectFormRecommendations(),
  introductions: makeSelectFormIntroductions(),
});

function PersonAdd({ match }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const {
    civil_status,
    dialects,
    educational_attainment,
    ethnic_tribes,
    form_tabs,
    rebel_groups,
    religions,
    errors,
    alias_nickname,
    group_type,
    group,
    personal_data,
    personal_description,
    personal_family,
    personal_education,
    personal_employment,
    personal_relatives,
    neutralization,
    ugm_entry_background,
    ugm_involvement,
    battle_factors,
    comments,
    recommendations,
    introductions,
  } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onCreateNewOption = (type, value) => {
    dispatch(createNewDialect(value));
  };

  const onFamilySiblingChangeInput = (sibling_key, evt) => {
    dispatch(
      familySiblingChangeInput(
        sibling_key,
        evt.currentTarget.name,
        evt.currentTarget.value,
      ),
    );
  };

  const onRelativeGsChangeInput = (sibling_key, evt) => {
    dispatch(
      relativeGsChangeInput(
        sibling_key,
        evt.currentTarget.name,
        evt.currentTarget.value,
      ),
    );
  };

  const onRelativeLcmChangeInput = (sibling_key, evt) => {
    dispatch(
      relativeLcmChangeInput(
        sibling_key,
        evt.currentTarget.name,
        evt.currentTarget.value,
      ),
    );
  };

  const onBattleFactorsDisMis = (ob, sibling_key, evt) => {
    dispatch(
      battleFactorsDisMis(
        ob,
        sibling_key,
        evt.currentTarget.name,
        evt.currentTarget.value,
      ),
    );
  };

  const onFamilyChangeInput = (parent, evt) => {
    let property = '';
    let val = '';
    if (!(evt.target instanceof HTMLInputElement)) {
      property = 'birth_date';
      val = evt === 'birth_date' ? '' : moment(evt).format('MM/DD/YYYY');
    } else if (evt.currentTarget.name === 'alive') {
      property = evt.currentTarget.name;
      val = !evt.currentTarget.checked;
    } else {
      property = evt.currentTarget.name;
      val = evt.currentTarget.value;
    }

    dispatch(familyChangeInput(parent, property, val));
  };

  const onAddSibling = () => {
    dispatch(addSibling());
  };

  const onAddRelativeGs = () => {
    dispatch(addRelativeGs());
  };

  const onAddRelativeLcm = () => {
    dispatch(addRelativeLcm());
  };

  const onAddBattleFactorsDisMis = obj => {
    dispatch(addBattleFactorsDisMis(obj));
  };

  const onPersonalChangeInput = (parent, evt, obj_prop) => {
    let property = '';
    let val = '';
    if (evt.target instanceof HTMLInputElement) {
      if (
        evt.currentTarget.name === 'Male' ||
        evt.currentTarget.name === 'Female'
      ) {
        property = 'gender';
        val = evt.currentTarget.name;
      } else if (
        evt.currentTarget.name === 'Killed' ||
        evt.currentTarget.name === 'Captured' ||
        evt.currentTarget.name === 'Surrendered' ||
        evt.currentTarget.name === 'Arrested'
      ) {
        property = 'classification';
        val = evt.currentTarget.name;
        dispatch(changeTextarea(parent, property, val));
        return;
      } else {
        property = evt.currentTarget.name;
        val = evt.currentTarget.value;
      }
    } else if (evt.value && parent === 'education') {
      property = obj_prop;
      val = evt.value;
    } else {
      property = 'birth_date';
      val = evt === 'birth_date' ? '' : moment(evt).format('MM/DD/YYYY');
    }

    dispatch(personalChangeInput(parent, property, val));
  };

  const onChangeTextarea = (parent, evt) => {
    dispatch(
      changeTextarea(parent, evt.currentTarget.name, evt.currentTarget.value),
    );
  };

  const onPersonalChangeSelect = (property, selected_value) => {
    let data = selected_value;
    const selectted_dialects = [];
    if (selected_value) {
      if (property === 'dialects' && selected_value.length !== 0) {
        selected_value.forEach(item => {
          selectted_dialects.push(item.label);
        });
        data = selectted_dialects;
      } else if (property !== 'dialects') {
        data = selected_value.label;
      } else {
        data = '';
      }
    }
    dispatch(personalChangeSelect(property, data));
  };

  const onGetRebel = id => dispatch(getRebel(id));
  const onLoadAddPerson = () => dispatch(loadAddPerson());
  const onGetRebelGroups = () => dispatch(getRebelGroups());
  const onGetDialects = () => dispatch(getDialects());

  const onChangeData = (property, selected_value) => {
    let data = selected_value;
    if (property === 'group_type' || property === 'group') {
      if (property === 'group_type') {
        if (!selected_value) {
          dispatch(changeData('group_type', null));
          dispatch(changeData('group', null));
          dispatch(changeData('rebel_group', null));
        } else if (group_type !== selected_value.label) {
          dispatch(changeData('group', null));
          dispatch(changeData('rebel_group', null));
        }
      } else if (property === 'group' && selected_value === null) {
        dispatch(changeData('rebel_group', null));
      }
      if (selected_value) {
        data = selected_value.label;
        if (property === 'group') {
          dispatch(changeData('group_type', selected_value.type));
          dispatch(changeData('rebel_group', selected_value.value));
        }
      }
    }

    dispatch(changeData(property, data));
  };
  const onSave = () => dispatch(savePerson());

  useEffect(() => {
    const { id } = match.params;
    if (id) {
      onGetRebel(id);
    } else {
      onLoadAddPerson();
    }
    onGetRebelGroups();
    onGetDialects();
  }, []);

  return (
    <article>
      <Helmet>
        <title>Person Add</title>
        <meta name="description" content="Add a new record of person" />
      </Helmet>
      <section id="PersonAdd">
        <div className="container is-fluid">
          <div>
            <div className="form-actions">
              <button
                type="button"
                className="button is-primary"
                onClick={match.params.id ? () => console.log('Update') : onSave}
              >
                {match.params.id ? 'Update' : 'Save'}
              </button>
            </div>
            <Tabs forceRenderTabPanel defaultIndex={0}>
              <TabList>
                {form_tabs.map((tab, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Tab key={index}>{tab.title}</Tab>
                ))}
              </TabList>
              <TabPanel>
                <Tabs forceRenderTabPanel>
                  <TabList>
                    <Tab>Personal Data</Tab>
                    <Tab>Physical Description</Tab>
                    <Tab>Family Background</Tab>
                    <Tab>Education / Employment</Tab>
                    <Tab>Relatives</Tab>
                  </TabList>
                  <TabPanel>
                    <BioPersonal
                      errors={errors}
                      dialects={dialects}
                      group_type={group_type}
                      group={{ value: group }}
                      alias_nickname={alias_nickname}
                      personal={personal_data}
                      civil_status={civil_status}
                      ethnic_tribes={ethnic_tribes}
                      rebel_groups={rebel_groups}
                      religions={religions}
                      onCreateNewOption={onCreateNewOption}
                      onChangeInput={e =>
                        onPersonalChangeInput('personal_data', e)
                      }
                      onChangeData={onChangeData}
                      onpersonalChangeSelect={onPersonalChangeSelect}
                    />
                  </TabPanel>
                  <TabPanel>
                    <BioDescription
                      errors={errors}
                      onChangeInput={e =>
                        onPersonalChangeInput('physical_description', e)
                      }
                      description={personal_description}
                    />
                  </TabPanel>
                  <TabPanel>
                    <BioFamily
                      errors={errors}
                      family={personal_family}
                      onChange={onFamilyChangeInput}
                      onAddSibling={onAddSibling}
                      onFamilySiblingChangeInput={onFamilySiblingChangeInput}
                    />
                  </TabPanel>
                  <TabPanel>
                    <EducationEmployment
                      personal_employment={personal_employment}
                      education={personal_education}
                      educational_attainment_options={educational_attainment}
                      onChange={onChangeTextarea}
                      onChangeEmp={onChangeTextarea}
                      onChangeEdu={onPersonalChangeInput}
                    />
                  </TabPanel>
                  <TabPanel>
                    <FamAffRelatives
                      onRelativeGsChangeInput={onRelativeGsChangeInput}
                      onRelativeLcmChangeInput={onRelativeLcmChangeInput}
                      relatives={personal_relatives}
                      onAddRelativeGs={onAddRelativeGs}
                      onAddRelativeLcm={onAddRelativeLcm}
                    />
                  </TabPanel>
                </Tabs>
              </TabPanel>
              <TabPanel>
                <Tabs forceRenderTabPanel>
                  <TabList>
                    <Tab>Status/Classification & Details of Neutralization</Tab>
                    <Tab>Reason/Motivation</Tab>
                  </TabList>
                  <TabPanel>
                    <FormParagraphWithTitle
                      type="status-classification"
                      classification={neutralization.classification}
                      onChangeInput={e =>
                        onPersonalChangeInput('neutralization', e)
                      }
                      title="Status/Classification & Details of Neutralization"
                      value={neutralization.details}
                      rows="15"
                      form_title="details"
                      onChange={e => onChangeTextarea('neutralization', e)}
                    />
                  </TabPanel>
                  <TabPanel>
                    <FormParagraphWithTitle
                      title="Reason for Surrender"
                      value={neutralization.surrender_reason}
                      rows="15"
                      form_title="surrender_reason"
                      onChange={e => onChangeTextarea('neutralization', e)}
                    />
                  </TabPanel>
                </Tabs>
              </TabPanel>
              <TabPanel>
                <Tabs forceRenderTabPanel>
                  <TabList>
                    <Tab>Propaganda</Tab>
                    <Tab>Reason/Motivation</Tab>
                  </TabList>
                  <TabPanel>
                    <FormParagraphWithTitle
                      title="Propaganda/Themes Used By The Recruiters"
                      value={ugm_entry_background.propaganda}
                      rows="15"
                      form_title="propaganda"
                      onChange={e =>
                        onChangeTextarea('ugm_entry_background', e)
                      }
                    />
                  </TabPanel>
                  <TabPanel>
                    <FormParagraphWithTitle
                      title="Personal Reason/Motivation For Joining"
                      value={ugm_entry_background.personal_motivation}
                      rows="15"
                      form_title="personal_motivation"
                      onChange={e =>
                        onChangeTextarea('ugm_entry_background', e)
                      }
                    />
                  </TabPanel>
                </Tabs>
              </TabPanel>
              <TabPanel>
                <Tabs forceRenderTabPanel>
                  <TabList>
                    <Tab>Promotion</Tab>
                    <Tab>Demotion/Disciplinary</Tab>
                    <Tab>Significant Violent Activities</Tab>
                    <Tab>Non-Violent Activities</Tab>
                  </TabList>
                  <TabPanel>
                    <FormParagraphWithTitle
                      title="Series Of Promotion"
                      value={ugm_involvement.promotion}
                      rows="15"
                      form_title="promotion"
                      onChange={e => onChangeTextarea('ugm_involvement', e)}
                    />
                  </TabPanel>
                  <TabPanel>
                    <FormParagraphWithTitle
                      title="Demotion/Disciplinary Action"
                      value={ugm_involvement.demotion}
                      rows="15"
                      form_title="demotion"
                      onChange={e => onChangeTextarea('ugm_involvement', e)}
                    />
                  </TabPanel>
                  <TabPanel>
                    <FormParagraphWithTitle
                      title="Involvement In Significant Violent Activities"
                      value={ugm_involvement.violent_activities}
                      rows="15"
                      form_title="violent_activities"
                      onChange={e => onChangeTextarea('ugm_involvement', e)}
                    />
                  </TabPanel>
                  <TabPanel>
                    <FormParagraphWithTitle
                      title="Involvement In Non-Violent Activities"
                      value={ugm_involvement.nonviolent_activities}
                      rows="15"
                      form_title="nonviolent_activities"
                      onChange={e => onChangeTextarea('ugm_involvement', e)}
                    />
                  </TabPanel>
                </Tabs>
              </TabPanel>
              <TabPanel>
                <Tabs forceRenderTabPanel>
                  <TabList>
                    <Tab>Composition</Tab>
                    <Tab>Dispositions </Tab>
                    <Tab>Strength </Tab>
                    <Tab>Tactics </Tab>
                    <Tab>Training </Tab>
                    <Tab>Logistics </Tab>
                    <Tab>Effectiveness </Tab>
                    <Tab>Plans </Tab>
                    <Tab>Miscellaneous </Tab>
                  </TabList>
                  <TabPanel>
                    <FormParagraphWithTitle
                      title="Composition"
                      value={battle_factors.composition}
                      rows="1"
                      form_title="composition"
                      onChange={e => onChangeTextarea('battle_factors', e)}
                    />
                  </TabPanel>
                  <TabPanel>
                    <BattleFactorsDispositions
                      dispositions={battle_factors.dispositions}
                      onBattleFactorsDisMis={onBattleFactorsDisMis}
                      onAddBattleFactorsDisMis={() =>
                        onAddBattleFactorsDisMis('dispositions')
                      }
                    />
                  </TabPanel>
                  <TabPanel>
                    <FormParagraphWithTitle
                      title="Strengths"
                      value={battle_factors.strengths}
                      rows="1"
                      form_title="strengths"
                      onChange={e => onChangeTextarea('battle_factors', e)}
                    />
                  </TabPanel>
                  <TabPanel>
                    <FormParagraphWithTitle
                      title="Tactics"
                      value={battle_factors.tactics}
                      rows="15"
                      form_title="tactics"
                      onChange={e => onChangeTextarea('battle_factors', e)}
                    />
                  </TabPanel>
                  <TabPanel>
                    <FormParagraphWithTitle
                      title="Trainings"
                      value={battle_factors.trainings}
                      rows="15"
                      form_title="trainings"
                      onChange={e => onChangeTextarea('battle_factors', e)}
                    />
                  </TabPanel>
                  <TabPanel>
                    <FormParagraphWithTitle
                      title="Logistics"
                      value={battle_factors.logistics}
                      rows="15"
                      form_title="logistics"
                      onChange={e => onChangeTextarea('battle_factors', e)}
                    />
                  </TabPanel>
                  <TabPanel>
                    <FormParagraphWithTitle
                      title="Effectiveness"
                      value={battle_factors.effectiveness}
                      rows="15"
                      form_title="effectiveness"
                      onChange={e => onChangeTextarea('battle_factors', e)}
                    />
                  </TabPanel>
                  <TabPanel>
                    <FormParagraphWithTitle
                      title="Plans"
                      value={battle_factors.plans}
                      rows="15"
                      form_title="plans"
                      onChange={e => onChangeTextarea('battle_factors', e)}
                    />
                  </TabPanel>
                  <TabPanel>
                    <BattleFactorsMiscellaneous
                      miscellaneous={battle_factors.miscellaneous}
                      onAddBattleFactorsDisMis={() =>
                        onAddBattleFactorsDisMis('miscellaneous')
                      }
                      onBattleFactorsDisMis={onBattleFactorsDisMis}
                    />
                  </TabPanel>
                </Tabs>
              </TabPanel>
              <TabPanel>
                <FormParagraphWithTitle
                  title="Comments"
                  value={comments}
                  rows="15"
                  form_title="comments"
                  onChange={e =>
                    onChangeData(e.currentTarget.name, e.currentTarget.value)
                  }
                />
              </TabPanel>
              <TabPanel>
                <FormParagraphWithTitle
                  title="Recommendations"
                  value={recommendations}
                  rows="15"
                  form_title="recommendations"
                  onChange={e =>
                    onChangeData(e.currentTarget.name, e.currentTarget.value)
                  }
                />
              </TabPanel>
              <TabPanel>
                <FormParagraphWithTitle
                  title="Background / Introduction"
                  value={introductions}
                  rows="15"
                  form_title="introductions"
                  onChange={e =>
                    onChangeData(e.currentTarget.name, e.currentTarget.value)
                  }
                />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </section>
    </article>
  );
}

PersonAdd.propTypes = {};

export default withRouter(PersonAdd);
