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
  makeSelectCivilStatus,
  makeSelectFormTabs,
  makeSelectForm,
} from './selectors';
import { personalChangeInput, changeData, savePerson } from './actions';
import reducer from './reducer';
import saga from './saga';

import './styles';

const key = 'personAdd';

const stateSelector = createStructuredSelector({
  civil_status: makeSelectCivilStatus(),
  form_tabs: makeSelectFormTabs(),
  form: makeSelectForm(),
});

function PersonAdd() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const { civil_status, form_tabs, form } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onPersonalChangeInput = evt =>
    dispatch(personalChangeInput(evt.target.name, evt.target.value));

  const onChangeData = (property, selected_value) => {
    let data = selected_value;
    if (property !== 'alias_nickname') {
      if (selected_value) {
        data = selected_value.value;
        if (property === 'group') {
          dispatch(changeData('group_type', selected_value.type));
        }
      }
    }

    dispatch(changeData(property, data));
  };
  const onSave = () => dispatch(savePerson());

  useEffect(() => {}, []);

  return (
    <article>
      <Helmet>
        <title>Person Add</title>
        <meta name="description" content="Add a new record of person" />
      </Helmet>
      <section id="PersonAdd">
        <div className="container is-fluid">
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
                    group_type={form.group_type}
                    group={{ value: form.group }}
                    alias_nickname={form.alias_nickname}
                    personal={form.personal_data}
                    onChangeInput={onPersonalChangeInput}
                    onChangeData={onChangeData}
                    civil_status={civil_status}
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
      </section>
    </article>
  );
}

PersonAdd.propTypes = {};

export default PersonAdd;
