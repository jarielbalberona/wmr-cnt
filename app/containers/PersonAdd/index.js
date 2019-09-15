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

import BioPersonal from 'components/BioPersonal';
import {
  makeSelectPersonErrors,
  makeSelectCivilStatus,
  makeSelectDialects,
  makeSelectEducationalAttainment,
  makeSelectEthnicTribes,
  makeSelectFormTabs,
  makeSelectForm,
  makeSelectReligions,
  makeSelectRebelGroups,
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
  form_tabs: makeSelectFormTabs(),
  form: makeSelectForm(),
  errors: makeSelectPersonErrors(),
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
    form,
    rebel_groups,
    religions,
    errors,
  } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onCreateNewOption = (type, value) => {
    dispatch(createNewDialect(value));
  };

  const onPersonalChangeInput = evt =>
    dispatch(personalChangeInput(evt.target.name, evt.target.value));

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
        } else if (form.group_type !== selected_value.label) {
          dispatch(changeData('group', null));
          dispatch(changeData('rebel_group', null));
        }
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
                    <Tab>Description</Tab>
                    <Tab>Family</Tab>
                  </TabList>
                  <TabPanel>
                    <BioPersonal
                      errors={errors}
                      dialects={dialects}
                      group_type={form.group_type}
                      group={{ value: form.group }}
                      alias_nickname={form.alias_nickname}
                      personal={form.personal_data}
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
                    <p>Description Form</p>
                  </TabPanel>
                  <TabPanel>
                    <p>Family Form</p>
                  </TabPanel>
                </Tabs>
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
