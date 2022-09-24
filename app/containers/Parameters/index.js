/**
 *
 * Parameters
 *
 */

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import FloatingLabel from 'floating-label-react';
import Select from 'react-select';
import Platoons from 'components/ParametersComponents/Platoons';
import Squads from 'components/ParametersComponents/Squads';
import GroupStructure from './Add/GroupStructure';

import {
  makeSelectGroups,
  makeSelectSelectedGroupOrg,
  makeSelectSelectedGroupOrgForm,
  makeSelectGroupForm,
  makeSelectDialects,
  makeSelectDialectForm,
  makeSelectPersonLoading,
  makeSelectErrors,
} from './selectors';

import {
  changeInput,
  saveGroup,
  getRebelGroups,
  deleteRebelGroup,
  saveDialect,
  getDialects,
  deleteDialect,
  getRebelGroup,
  addPlatoonGroup,
  addSquadGroup,
  addPlatoonSquadGroup,
  addPlatoonSquadTeamGroup,
  addSquadTeamGroup,
  deletePlatoonGroup,
  deleteSquadGroup,
  deletePlatoonSquadGroup,
  deletePlatoonSquadTeamGroup,
  deleteSquadTeamGroup,
  changeInputPlatoonSquad,
  changeInputPlatoonSquadName,
  changeInputPlatoonSquadTeamName,
  changeInputSquadTeamName,
  saveGroupOrg,
} from './actions';
import reducer from './reducer';
import saga from './saga';

import './styles';

const stateSelector = createStructuredSelector({
  groups: makeSelectGroups(),
  group_org: makeSelectSelectedGroupOrg(),
  group_org_form: makeSelectSelectedGroupOrgForm(),
  group_form: makeSelectGroupForm(),
  dialects: makeSelectDialects(),
  dialect_form: makeSelectDialectForm(),
  loading: makeSelectPersonLoading(),
  errors: makeSelectErrors(),
});

function Parameters() {
  useInjectReducer({ key: 'parameters', reducer });
  useInjectSaga({ key: 'parameters', saga });

  const {
    groups,
    group_org,
    group_org_form,
    group_form,
    dialects,
    dialect_form,
    errors,
  } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const [selected_tab, setSelectedTab] = useState({ parent: 0, child: 0 });
  const [selected_type, setSelectedType] = useState();
  const [selected_group, setSelectedGroup] = useState();
  const [dd_open, setDDOpen] = useState({ pltnsqd: false });

  useEffect(() => {
    dispatch(getRebelGroups());
  }, []);

  const onChangeInput = (parent, evt) =>
    dispatch(changeInput(parent, evt.target.name, evt.target.value));

  const onChangeSelect = (parent, name, selected) => {
    setSelectedType(selected);
    dispatch(changeInput(parent, name, selected.value));
  };

  const onSaveGroup = () => dispatch(saveGroup(group_form));
  const onSaveDialect = () => dispatch(saveDialect(dialect_form));

  const onAddPlatoonGroup = () => dispatch(addPlatoonGroup());
  const onAddSquadGroup = () => dispatch(addSquadGroup());
  const onAddPlatoonSquadGroup = key => dispatch(addPlatoonSquadGroup(key));
  const onAddPlatoonSquadTeamGroup = (platoon_index, squad_index) =>
    dispatch(addPlatoonSquadTeamGroup(platoon_index, squad_index));
  const onAddSquadTeamGroup = key => dispatch(addSquadTeamGroup(key));

  const onDeletePlatoonGroup = key => dispatch(deletePlatoonGroup(key));
  const onDeleteSquadGroup = key => dispatch(deleteSquadGroup(key));
  const onDeletePlatoonSquadGroup = (platoon_index, squad_index) =>
    dispatch(deletePlatoonSquadGroup(platoon_index, squad_index));

  const onDeletePlatoonSquadTeamGroup = (
    platoon_index,
    squad_index,
    team_index,
  ) =>
    dispatch(
      deletePlatoonSquadTeamGroup(platoon_index, squad_index, team_index),
    );

  const onDeleteSquadTeamGroup = (platoon_index, squad_index, team_index) =>
    dispatch(deleteSquadTeamGroup(platoon_index, squad_index, team_index));

  const onSelectGroup = selected => {
    setSelectedGroup(selected);
    dispatch(getRebelGroup(selected));
  };

  const onChangeInputPlatoonSquad = (gruop, index, name, value) =>
    dispatch(changeInputPlatoonSquad(gruop, index, name, value));

  const onChangeInputPlatoonSquadName = (
    platoon_index,
    squad_index,
    name,
    value,
  ) =>
    dispatch(
      changeInputPlatoonSquadName(platoon_index, squad_index, name, value),
    );

  const onChangeInputPlatoonSquadTeamName = (
    platoon_index,
    squad_index,
    team_index,
    name,
    value,
  ) =>
    dispatch(
      changeInputPlatoonSquadTeamName(
        platoon_index,
        squad_index,
        team_index,
        name,
        value,
      ),
    );

  const onChangeInputSquadTeamName = (squad_index, team_index, name, value) =>
    dispatch(changeInputSquadTeamName(squad_index, team_index, name, value));

  const onSaveGroupOrg = () =>
    dispatch(saveGroupOrg(group_org_form._id, group_org_form));

  const rebel_group_options = [];
  if (groups) {
    groups.forEach(item => {
      rebel_group_options.push({
        value: item._id,
        label: item.name,
      });
    });
  }

  return (
    <section id="Parameters">
      <div className="container is-fluid">
        <div className="tabs">
          <ul>
            <li className={`${selected_tab.parent === 0 ? 'is-active' : ''}`}>
              {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
              <a
                onClick={() => {
                  setSelectedTab({ parent: 0, child: 0 });
                  dispatch(getRebelGroups());
                }}
              >
                List
              </a>
            </li>
            <li className={`${selected_tab.parent === 1 ? 'is-active' : ''}`}>
              {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
              <a onClick={() => setSelectedTab({ parent: 1, child: 0 })}>Add</a>
            </li>
          </ul>
        </div>
        {selected_tab.parent === 0 ? (
          <>
            <div className="tabs">
              <ul>
                <li
                  className={`${selected_tab.child === 0 ? 'is-active' : ''}`}
                >
                  {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                  <a
                    onClick={() =>
                      setSelectedTab({ ...selected_tab, child: 0 })
                    }
                  >
                    Groups
                  </a>
                </li>
                <li
                  className={`${selected_tab.child === 1 ? 'is-active' : ''}`}
                >
                  {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                  <a
                    onClick={() =>
                      setSelectedTab({ ...selected_tab, child: 1 })
                    }
                  >
                    Group Structure
                  </a>
                </li>
                <li
                  className={`${selected_tab.child === 2 ? 'is-active' : ''}`}
                >
                  {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                  <a
                    onClick={() => {
                      setSelectedTab({ ...selected_tab, child: 2 });
                      dispatch(getDialects());
                    }}
                  >
                    Dialects
                  </a>
                </li>
              </ul>
            </div>

            {selected_tab.child === 0 ? (
              <div className="">
                <div className="title">Groups</div>
                <div className="table-container wmr-table-container">
                  <table className="table is-fullwidth">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {groups &&
                        groups.length !== 0 &&
                        groups.map(group => (
                          <tr key={group._id}>
                            <td>{group.name}</td>
                            <td>{group.type}</td>
                            <td>
                              <button
                                type="button"
                                className="button is-danger is-small"
                                onClick={() => {
                                  // eslint-disable-next-line no-alert
                                  if (window.confirm('Delete this record?')) {
                                    dispatch(deleteRebelGroup(group._id));
                                  }
                                }}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <></>
            )}
            {selected_tab.child === 1 ? (
              <>
                <div className="">
                  <div className="title">Group Structure</div>
                  <div className="columns">
                    <div className="column is-two-fifths">
                      <Select
                        placeholder="Group"
                        className="cx-create-select"
                        classNamePrefix="cx"
                        value={selected_group}
                        options={rebel_group_options}
                        onChange={selected => onSelectGroup(selected)}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="columns">
                    {group_org ? (
                      <div className="column">
                        <div className="title is-4">{group_org.name}</div>
                        {group_org.platoons.length === 0 &&
                        group_org.squads.length === 0 ? (
                          <div className="column">
                            <div className="title is-size-6 has-text-weight-light container-title">
                              Platoon and/or squad are empty, consider adding.
                            </div>
                          </div>
                        ) : (
                          <>
                            <Platoons platoons={group_org.platoons} />
                            <Squads squads={group_org.squads} />
                          </>
                        )}
                      </div>
                    ) : (
                      <div className="column">
                        <p>Select a group.</p>
                      </div>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
            {selected_tab.child === 2 ? (
              <div className="">
                <div className="title">Dialects</div>
                <div className="table-container">
                  <table className="table is-fullwidth">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dialects &&
                        dialects.length !== 0 &&
                        dialects.map(dialect => (
                          <tr key={dialect._id}>
                            <td>{dialect.name}</td>
                            <td>
                              <button
                                type="button"
                                className="button is-danger is-small"
                                onClick={() => {
                                  // eslint-disable-next-line no-alert
                                  if (window.confirm('Delete this record?')) {
                                    dispatch(deleteDialect(dialect._id));
                                  }
                                }}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <></>
            )}
          </>
        ) : (
          ''
        )}
        {selected_tab.parent === 1 ? (
          <>
            <div className="tabs">
              <ul>
                <li
                  className={`${selected_tab.child === 0 ? 'is-active' : ''}`}
                >
                  {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                  <a
                    onClick={() =>
                      setSelectedTab({ ...selected_tab, child: 0 })
                    }
                  >
                    Group
                  </a>
                </li>
                <li
                  className={`${selected_tab.child === 1 ? 'is-active' : ''}`}
                >
                  {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                  <a
                    onClick={() =>
                      setSelectedTab({ ...selected_tab, child: 1 })
                    }
                  >
                    Group Structure
                  </a>
                </li>
                <li
                  className={`${selected_tab.child === 2 ? 'is-active' : ''}`}
                >
                  {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                  <a
                    onClick={() =>
                      setSelectedTab({ ...selected_tab, child: 2 })
                    }
                  >
                    Dialect
                  </a>
                </li>
              </ul>
            </div>

            {selected_tab.child === 0 ? (
              <div className="">
                <div className="title">Group</div>
                <div className="columns">
                  <div className="column is-three-fifths-desktop is-offset-one-fifth-desktop is-four-fifths-mobile is-offset-1-mobile">
                    <div className="inputs">
                      <FloatingLabel
                        id="name"
                        name="name"
                        type="text"
                        className={`${
                          errors.group_form.name &&
                          errors.group_form.name.message
                            ? 'has-form-error'
                            : ''
                        }`}
                        placeholder={
                          (errors.group_form.name &&
                            `Name ${errors.group_form.name.message.toLowerCase()}`) ||
                          'Name'
                        }
                        value={group_form.name}
                        onChange={e => onChangeInput('group_form', e)}
                      />
                    </div>
                    <div className="inputs">
                      <Select
                        isClearable
                        placeholder="Group Type"
                        className="cx-create-select"
                        classNamePrefix="cx"
                        value={selected_type}
                        options={[
                          { value: 'White', key: 'White', label: 'White' },
                          { value: 'Red', key: 'Red', label: 'Red' },
                        ]}
                        onChange={selected =>
                          onChangeSelect('group_form', 'type', selected)
                        }
                      />
                    </div>
                    <div className="inputs">
                      <button
                        type="button"
                        className="button is-medium is-fullwidth is-primary"
                        onClick={onSaveGroup}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ''
            )}
            {selected_tab.child === 1 ? (
              <GroupStructure
                group_org={group_org_form}
                selected_group={selected_group}
                rebel_group_options={rebel_group_options}
                dd_open={dd_open}
                onSelectGroup={onSelectGroup}
                setDDOpen={setDDOpen}
                onAddPlatoonGroup={onAddPlatoonGroup}
                onAddSquadGroup={onAddSquadGroup}
                onAddPlatoonSquadGroup={onAddPlatoonSquadGroup}
                onAddPlatoonSquadTeamGroup={onAddPlatoonSquadTeamGroup}
                onAddSquadTeamGroup={onAddSquadTeamGroup}
                onDeletePlatoonGroup={onDeletePlatoonGroup}
                onDeleteSquadGroup={onDeleteSquadGroup}
                onDeletePlatoonSquadGroup={onDeletePlatoonSquadGroup}
                onDeletePlatoonSquadTeamGroup={onDeletePlatoonSquadTeamGroup}
                onDeleteSquadTeamGroup={onDeleteSquadTeamGroup}
                onChangeInputPlatoonSquad={onChangeInputPlatoonSquad}
                onChangeInputPlatoonSquadName={onChangeInputPlatoonSquadName}
                onChangeInputPlatoonSquadTeamName={
                  onChangeInputPlatoonSquadTeamName
                }
                onChangeInputSquadTeamName={onChangeInputSquadTeamName}
                onSaveGroupOrg={onSaveGroupOrg}
              />
            ) : (
              <></>
            )}
            {selected_tab.child === 2 ? (
              <div className="">
                <div className="title">Dialect</div>
                <div className="columns">
                  <div className="column is-three-fifths-desktop is-offset-one-fifth-desktop is-four-fifths-mobile is-offset-1-mobile">
                    <div className="inputs">
                      <FloatingLabel
                        id="name"
                        name="name"
                        type="text"
                        className={`${
                          errors.dialect_form.name &&
                          errors.dialect_form.name.message
                            ? 'has-form-error'
                            : ''
                        }`}
                        placeholder={
                          (errors.dialect_form.name &&
                            `Name ${errors.dialect_form.name.message.toLowerCase()}`) ||
                          'Name'
                        }
                        value={dialect_form.name}
                        onChange={e => onChangeInput('dialect_form', e)}
                      />
                    </div>
                    <div className="inputs">
                      <button
                        type="button"
                        className="button is-medium is-fullwidth is-primary"
                        onClick={onSaveDialect}
                      >
                        Save Dialect
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </>
        ) : (
          ''
        )}
      </div>
    </section>
  );
}

export default Parameters;
