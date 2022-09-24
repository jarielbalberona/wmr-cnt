/**
 *
 * Organize
 *
 */

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { isEmpty } from 'lodash';
import Select from 'react-select';
import ViewOrganization from 'components/OrganizeComponents/ViewOrganization';
import OrganizeOrganization from 'components/OrganizeComponents/OrganizeOrganization';
import {
  getGroups,
  getGroup,
  getRebelByGroup,
  clearSelectedGroup,
  changeStaff,
  changePlatoonOfficer,
  changePlatoonSquadOfficer,
  changePlatoonSquadTeamOfficer,
  changePlatoonSquadTeamMember,
  changeSquadOfficer,
  changeSquadTeamOfficer,
  changeSquadTeamMember,
  saveForm,
  clearForm,
} from './actions';
import {
  makeSelectOrganize,
  makeSelectOrganizeGroups,
  makeSelectOrganizeLoading,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

import './styles';

const stateSelector = createStructuredSelector({
  organize: makeSelectOrganize(),
  groups: makeSelectOrganizeGroups(),
  loading: makeSelectOrganizeLoading(),
});

function Organize() {
  useInjectReducer({ key: 'organize', reducer });
  useInjectSaga({ key: 'organize', saga });
  const { organize, groups } = useSelector(stateSelector);
  const { group, group_form, rebels } = organize;
  const dispatch = useDispatch();
  const [selected_tab, setSelectedTab] = useState(0);
  const [selected_group, setSelectedGroup] = useState(0);

  const onGetGroups = () => dispatch(getGroups());
  const onClearForm = () => dispatch(clearForm());
  const onSaveForm = () => dispatch(saveForm(group_form._id, group_form));
  const onChangeStaff = data => dispatch(changeStaff(data));
  const onChangePlatoonOfficer = data => dispatch(changePlatoonOfficer(data));
  const onChangePlatoonSquadOfficer = data =>
    dispatch(changePlatoonSquadOfficer(data));
  const onChangePlatoonSquadTeamOfficer = data =>
    dispatch(changePlatoonSquadTeamOfficer(data));
  const onChangePlatoonSquadTeamMember = data => {
    const members = [];
    if (data.value.length !== 0) {
      data.value.map(member => members.push({ name: member.label }));
    }
    dispatch(changePlatoonSquadTeamMember({ ...data, value: members }));
  };

  const onChangeSquadOfficer = data => dispatch(changeSquadOfficer(data));
  const onChangeSquadTeamOfficer = data =>
    dispatch(changeSquadTeamOfficer(data));
  const onChangeSquadTeamMember = data => {
    const squad_team_members = [];
    if (data.value.length !== 0) {
      data.value.map(member => squad_team_members.push({ name: member.label }));
    }
    dispatch(changeSquadTeamMember({ ...data, value: squad_team_members }));
  };

  const onSelectGroup = selected => {
    setSelectedGroup(selected);
    if (selected && selected.value) {
      dispatch(getGroup(selected.value));
      dispatch(getRebelByGroup(selected.value));
    } else {
      dispatch(clearSelectedGroup());
    }
  };

  useEffect(() => {
    onGetGroups();
    onClearForm();
  }, []);

  const rebel_group_options = [];
  const rebels_options = [];
  if (groups) {
    groups.forEach(item => {
      rebel_group_options.push({
        value: item._id,
        label: item.name,
      });
    });
  }
  if (rebels && rebels.length !== 0) {
    rebels.forEach(item => {
      rebels_options.push({
        value: item.alias_nickname,
        label: item.alias_nickname,
      });
    });
  }

  return (
    <section id="Organize">
      <div className="container is-fluid">
        <div className="columns">
          <div className="column">
            <div className="tabs">
              <ul>
                <li className={`${selected_tab === 0 ? 'is-active' : ''}`}>
                  {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                  <a onClick={() => setSelectedTab(0)}>View</a>
                </li>
                <li className={`${selected_tab === 1 ? 'is-active' : ''}`}>
                  {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                  <a onClick={() => setSelectedTab(1)}>Organize</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="title is-4">Organize Group</div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-two-fifths">
            <Select
              isClearable
              placeholder="Group type"
              className="cx-create-select"
              classNamePrefix="cx"
              value={selected_group}
              options={rebel_group_options}
              onChange={selected => onSelectGroup(selected)}
            />
          </div>
          {!isEmpty(group_form) && selected_tab === 1 ? (
            <div className="column organize-action">
              <button
                type="button"
                className="button is-primary"
                onClick={() => onSaveForm()}
              >
                Save
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
        {selected_tab === 0 ? (
          <ViewOrganization group={group} />
        ) : (
          <OrganizeOrganization
            group_form={group_form}
            rebels_options={rebels_options}
            onChangeStaff={onChangeStaff}
            onChangePlatoonOfficer={onChangePlatoonOfficer}
            onChangePlatoonSquadOfficer={onChangePlatoonSquadOfficer}
            onChangePlatoonSquadTeamOfficer={onChangePlatoonSquadTeamOfficer}
            onChangePlatoonSquadTeamMember={onChangePlatoonSquadTeamMember}
            onChangeSquadOfficer={onChangeSquadOfficer}
            onChangeSquadTeamOfficer={onChangeSquadTeamOfficer}
            onChangeSquadTeamMember={onChangeSquadTeamMember}
          />
        )}
      </div>
    </section>
  );
}

export default Organize;
