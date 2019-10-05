/**
 *
 * PersonAdd
 *
 */

import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import BioPersonal from 'components/PersonAddComponents/BioPersonal';
import BioDescription from 'components/PersonAddComponents/BioDescription';
import BioFamily from 'components/PersonAddComponents/BioFamily';
import FormParagraphWithTitle from 'components/PersonAddComponents/FormParagraphWithTitle';

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
  getRebelGroups,
  getDialects,
  personalChangeInput,
  personalChangeSelect,
  savePerson,
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

function PersonAdd() {
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

  const onPersonalChangeInput = (evt, date) => {
    let property = '';
    let val = '';
    if (evt === 'birth_date') {
      property = 'birth_date';
      val = date;
    } else {
      property = evt.target.name;
      val = evt.target.value;
    }

    dispatch(personalChangeInput(property, val));
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

  const onGetRebelGroups = () => dispatch(getRebelGroups());
  const onGetDialects = () => dispatch(getDialects());

  const onChangeData = (property, selected_value) => {
    let data = selected_value;
    if (property !== 'alias_nickname') {
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
                onClick={onSave}
              >
                Save
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
                    <Tab>Educational Attainment</Tab>
                    <Tab>Employment before UGM</Tab>
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
                      educational_attainment={educational_attainment}
                      ethnic_tribes={ethnic_tribes}
                      rebel_groups={rebel_groups}
                      religions={religions}
                      onCreateNewOption={onCreateNewOption}
                      onChangeInput={onPersonalChangeInput}
                      onChangeData={onChangeData}
                      onpersonalChangeSelect={onPersonalChangeSelect}
                    />
                  </TabPanel>
                  <TabPanel>
                    <BioDescription
                      errors={errors}
                      description={personal_description}
                    />
                  </TabPanel>
                  <TabPanel>
                    <BioFamily errors={errors} family={personal_family} />
                  </TabPanel>
                  <TabPanel>
                    <BioFamily errors={errors} family={personal_family} />
                  </TabPanel>
                  <TabPanel>
                    <BioFamily errors={errors} family={personal_family} />
                  </TabPanel>
                  <TabPanel>
                    <BioFamily errors={errors} family={personal_family} />
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
                      title="Status/Classification & Details of Neutralization - add dropdown for classification"
                      value={neutralization.details}
                      rows="20"
                      form_title="tactics"
                      onChange={e => console.log(e.currentTarget.value)}
                    />
                  </TabPanel>
                  <TabPanel>
                    <FormParagraphWithTitle
                      title="Reason for Surrender"
                      value={neutralization.surrender_reason}
                      rows="20"
                      form_title="tactics"
                      onChange={e => console.log(e.currentTarget.value)}
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
                      rows="20"
                      form_title="tactics"
                      onChange={e => console.log(e.currentTarget.value)}
                    />
                  </TabPanel>
                  <TabPanel>
                    <FormParagraphWithTitle
                      title="Personal Reason/Motivation For Joining"
                      value={ugm_entry_background.personal_motivation}
                      rows="20"
                      form_title="tactics"
                      onChange={e => console.log(e.currentTarget.value)}
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
                      rows="20"
                      form_title="tactics"
                      onChange={e => console.log(e.currentTarget.value)}
                    />
                  </TabPanel>
                  <TabPanel>
                    <FormParagraphWithTitle
                      title="Demotion/Disciplinary Action"
                      value={ugm_involvement.demotion}
                      rows="20"
                      form_title="tactics"
                      onChange={e => console.log(e.currentTarget.value)}
                    />
                  </TabPanel>
                  <TabPanel>
                    <FormParagraphWithTitle
                      title="Involvement In Significant Violent Activities"
                      value={ugm_involvement.violent_activities}
                      rows="20"
                      form_title="tactics"
                      onChange={e => console.log(e.currentTarget.value)}
                    />
                  </TabPanel>
                  <TabPanel>
                    <FormParagraphWithTitle
                      title="Involvement In Non-Violent Activities"
                      value={ugm_involvement.nonviolent_activities}
                      rows="20"
                      form_title="tactics"
                      onChange={e => console.log(e.currentTarget.value)}
                    />
                  </TabPanel>
                </Tabs>
              </TabPanel>
              <TabPanel>
                <Tabs forceRenderTabPanel>
                  <TabList>
                    <Tab>Composition</Tab>
                    <Tab>Disposition </Tab>
                    <Tab>Strength </Tab>
                    <Tab>Tactics </Tab>
                    <Tab>Training </Tab>
                    <Tab>Logistics </Tab>
                    <Tab>Effectiveness </Tab>
                    <Tab>Plans </Tab>
                    <Tab>Miscellaneous </Tab>
                  </TabList>
                  <TabPanel>
                    <FormParagraphWithTitle title="Composition: See Annex A" />
                  </TabPanel>
                  <TabPanel>
                    <FormParagraphWithTitle title="Disposition" />
                  </TabPanel>
                  <TabPanel>
                    <FormParagraphWithTitle title="Strengths: See Annex A" />
                  </TabPanel>
                  <TabPanel>
                    <FormParagraphWithTitle
                      title="Tactics"
                      value={battle_factors.tactics}
                      rows="20"
                      form_title="tactics"
                      onChange={e => console.log(e.currentTarget.value)}
                    />
                  </TabPanel>
                  <TabPanel>
                    <FormParagraphWithTitle
                      title="Trainings"
                      value={battle_factors.trainings}
                      rows="20"
                      form_title="trainings"
                      onChange={e => console.log(e.currentTarget.value)}
                    />
                  </TabPanel>
                  <TabPanel>
                    <FormParagraphWithTitle
                      title="Logistics"
                      value={battle_factors.logistics}
                      rows="20"
                      form_title="logistics"
                      onChange={e => console.log(e.currentTarget.value)}
                    />
                  </TabPanel>
                  <TabPanel>
                    <FormParagraphWithTitle
                      title="Effectiveness"
                      value={battle_factors.effectiveness}
                      rows="20"
                      form_title="effectiveness"
                      onChange={e => console.log(e.currentTarget.value)}
                    />
                  </TabPanel>
                  <TabPanel>
                    <FormParagraphWithTitle
                      title="Plans"
                      value={battle_factors.plans}
                      rows="20"
                      form_title="plans"
                      onChange={e => console.log(e.currentTarget.value)}
                    />
                  </TabPanel>
                  <TabPanel>
                    <FormParagraphWithTitle title="Miscellaneous" />
                  </TabPanel>
                </Tabs>
              </TabPanel>
              <TabPanel>
                <FormParagraphWithTitle
                  title="Comments"
                  value={comments}
                  rows="20"
                  form_title="comments"
                  onChange={e => console.log(e.currentTarget.value)}
                />
              </TabPanel>
              <TabPanel>
                <FormParagraphWithTitle
                  title="Recommendations"
                  value={recommendations}
                  rows="20"
                  form_title="recommendation"
                  onChange={e => console.log(e.currentTarget.value)}
                />
              </TabPanel>
              <TabPanel>
                <FormParagraphWithTitle
                  title="Background / Introduction"
                  value={introductions}
                  rows="20"
                  form_title="introduction"
                  onChange={e => console.log(e.currentTarget.value)}
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

export default PersonAdd;
