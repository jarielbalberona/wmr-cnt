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
import {
  changeInput,
  saveGroup,
  getRebelGroups,
  deleteRebelGroup,
  saveDialect,
  getDialects,
  deleteDialect,
} from './actions';
import {
  makeSelectGroups,
  makeSelectGroupForm,
  makeSelectDialects,
  makeSelectDialectForm,
  makeSelectPersonLoading,
  makeSelectErrors,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

import './styles';

const stateSelector = createStructuredSelector({
  groups: makeSelectGroups(),
  group_form: makeSelectGroupForm(),
  dialects: makeSelectDialects(),
  dialect_form: makeSelectDialectForm(),
  loading: makeSelectPersonLoading(),
  errors: makeSelectErrors(),
});

function Parameters() {
  useInjectReducer({ key: 'parameters', reducer });
  useInjectSaga({ key: 'parameters', saga });

  const { groups, group_form, dialects, dialect_form, errors } = useSelector(
    stateSelector,
  );
  const dispatch = useDispatch();
  const [selected_tab, setSelectedTab] = useState({ parent: 0, child: 0 });
  const [selected_type, setSelectedType] = useState();

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
                    onClick={() => {
                      setSelectedTab({ ...selected_tab, child: 1 });
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
                        <th>Leader/Founder</th>
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
                            <td>{group.leader}</td>
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
                      <FloatingLabel
                        id="leader"
                        name="leader"
                        placeholder="Founder/Leader"
                        className=""
                        type="text"
                        value={group_form.leader}
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
                        Save
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
