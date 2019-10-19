/**
 *
 * BioPersonal
 *
 */

import React, { memo, useState } from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import FloatingLabel from 'floating-label-react';
import Calendar from 'react-calendar';
import _string from 'lodash/string';
import _array from 'lodash/array';
import './styles';

function BioPersonal({
  errors,
  dialects,
  group_type,
  group,
  alias_nickname,
  civil_status,
  ethnic_tribes,
  rebel_groups,
  religions,
  personal,
  onChangeInput,
  onChangeData,
  onCreateNewOption,
  onpersonalChangeSelect,
}) {
  const [isCalendarOpen, setCalendarOpen] = useState(false);

  const dialect_options = [];
  const rebel_group_options = [];
  let rebel_group_distinct_type = [];
  const rebel_group_type_options = [];

  if (rebel_groups) {
    rebel_group_distinct_type = _array.uniqBy(rebel_groups, 'type');

    rebel_groups.forEach(item => {
      if (group_type) {
        if (group_type !== item.type) return;
      }
      rebel_group_options.push({
        value: item._id,
        label: item.name,
        type: item.type,
      });
    });

    rebel_group_distinct_type.forEach(item => {
      rebel_group_type_options.push({
        value: item.type,
        label: item.type,
      });
    });
  }

  if (dialects) {
    dialects.forEach(item => {
      dialect_options.push({
        value: item.name,
        label: item.name,
      });
    });
  }

  let group_value = null;
  let type_value = null;
  let marital_status_value = null;
  let religion_value = null;
  let ethnic_tribe_value = null;

  const dialects_value = [];

  if (group_type) {
    type_value = { value: group_type, label: _string.upperFirst(group_type) };
  }

  if (group.value) {
    group_value = {
      value: group.value,
      label: _string.upperFirst(group.value),
    };
  }

  if (personal.marital_status) {
    marital_status_value = {
      value: personal.marital_status,
      label: personal.marital_status,
    };
  }

  if (personal.religion) {
    religion_value = {
      value: personal.religion,
      label: personal.religion,
    };
  }

  if (personal.tribe) {
    ethnic_tribe_value = {
      value: personal.tribe,
      label: personal.tribe,
    };
  }

  if (personal.dialects) {
    const dialect_selected = personal.dialects;
    dialect_selected.forEach(item => {
      dialects_value.push({
        value: item,
        label: item,
        key: item,
      });
    });
  }

  return (
    <section id="BioPersonal" className="form-page">
      <div className="container">
        <div className="title is-size-4">Personal Data</div>
        <div className="columns">
          <div className="column">
            <Select
              isClearable
              placeholder="Group type"
              className="cx-create-select"
              classNamePrefix="cx"
              value={type_value}
              options={rebel_group_type_options}
              onChange={selected => onChangeData('group_type', selected)}
            />
          </div>
          <div className="column">
            <Select
              isClearable
              className={`cx-create-select ${
                errors.rebel_group && errors.rebel_group.message
                  ? 'has-form-error'
                  : ''
              }`}
              placeholder={
                (errors.rebel_group && errors.rebel_group.message) || 'Group'
              }
              classNamePrefix="cx"
              value={group_value}
              options={rebel_group_options}
              onChange={selected => onChangeData('group', selected)}
            />
          </div>
          <div className="column">
            <div className="inputs">
              <FloatingLabel
                id="alias_nickname"
                name="alias_nickname"
                className={`${
                  errors.alias_nickname && errors.alias_nickname.message
                    ? 'has-form-error'
                    : ''
                }`}
                placeholder={
                  (errors.alias_nickname && errors.alias_nickname.message) ||
                  'Alias / Nickname'
                }
                type="text"
                value={alias_nickname}
                onChange={evt =>
                  onChangeData('alias_nickname', evt.target.value)
                }
              />
            </div>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <div className="inputs">
              <FloatingLabel
                id="first_name"
                name="first_name"
                placeholder="First name"
                className=""
                type="text"
                value={personal.first_name}
                onChange={onChangeInput}
              />
            </div>
          </div>
          <div className="column">
            <div className="inputs">
              <FloatingLabel
                id="last_name"
                name="last_name"
                placeholder="Last name"
                className=""
                type="text"
                value={personal.last_name}
                onChange={onChangeInput}
              />
            </div>
          </div>
          <div className="column">
            <div className="inputs">
              <FloatingLabel
                id="middle_name"
                name="middle_name"
                placeholder="Middle name"
                className=""
                type="text"
                value={personal.middle_name}
                onChange={onChangeInput}
              />
            </div>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <div className="inputs date-input">
              <div className="date-actions">
                <button
                  type="button"
                  className="button"
                  onClick={() => onChangeInput('birth_date', '')}
                >
                  <i className="fas fa-times"></i>
                </button>
                <button
                  type="button"
                  className="button"
                  onClick={() => setCalendarOpen(!isCalendarOpen)}
                >
                  <i className="fas fa-calendar-alt"></i>
                </button>
              </div>
              <FloatingLabel
                id="birth_date"
                name="birth_date"
                placeholder="Birth date"
                className=""
                type="text"
                onFocus={() => setCalendarOpen(true)}
                value={personal.birth_date}
                onChange={() => {}}
              />
              <Calendar
                name="birth_date"
                className={isCalendarOpen ? '' : 'is-hidden'}
                onChange={onChangeInput}
                onClickDay={() => setCalendarOpen(!isCalendarOpen)}
              />
            </div>
          </div>
          <div className="column">
            <div className="inputs">
              <FloatingLabel
                id="age"
                name="age"
                placeholder="Age"
                className=""
                type="number"
                value={personal.age}
                onChange={onChangeInput}
              />
            </div>
          </div>
          <div className="column">
            <div className="inputs">
              <FloatingLabel
                id="birth_place"
                name="birth_place"
                placeholder="Birth place"
                className=""
                type="text"
                value={personal.birth_place}
                onChange={onChangeInput}
              />
            </div>
          </div>
        </div>

        <div className="columns">
          <div className="column gender-radio">
            <div className="">
              <p>Gender</p>
            </div>
            <div className="inputs">
              <div className="field">
                <input
                  className="is-checkradio is-primary"
                  id="Male"
                  type="radio"
                  name="Male"
                  checked={personal.gender === 'Male'}
                  onChange={onChangeInput}
                />
                <label htmlFor="Male">Male</label>
                <input
                  className="is-checkradio is-primary"
                  id="Female"
                  type="radio"
                  name="Female"
                  checked={personal.gender === 'Female'}
                  onChange={onChangeInput}
                />
                <label htmlFor="Female">Female</label>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="inputs">
              <div className="inputs">
                <FloatingLabel
                  id="address_home"
                  name="address_home"
                  placeholder="Home address"
                  className=""
                  type="text"
                  value={personal.address_home}
                  onChange={onChangeInput}
                />
              </div>
            </div>
          </div>
          <div className="column">
            <div className="inputs">
              <FloatingLabel
                id="address_former"
                name="address_former"
                placeholder="Address former"
                className=""
                type="text"
                value={personal.address_former}
                onChange={onChangeInput}
              />
            </div>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <div className="inputs">
              <Select
                isClearable
                placeholder="Civil Status"
                className="cx-create-select"
                classNamePrefix="cx"
                value={marital_status_value}
                options={civil_status}
                onChange={selected =>
                  onpersonalChangeSelect('marital_status', selected)
                }
              />
            </div>
          </div>
          <div className="column">
            <div className="inputs">
              <Select
                isClearable
                placeholder="Religion"
                className="cx-create-select"
                classNamePrefix="cx"
                value={religion_value}
                options={religions}
                onChange={selected =>
                  onpersonalChangeSelect('religion', selected)
                }
              />
            </div>
          </div>
          <div className="column">
            <div className="inputs">
              <CreatableSelect
                isMulti
                isClearable
                placeholder="Dialect/s spoken"
                className="cx-create-select"
                classNamePrefix="cx"
                value={dialects_value}
                options={dialect_options}
                onChange={selected =>
                  onpersonalChangeSelect('dialects', selected)
                }
                onCreateOption={value => onCreateNewOption('dialect', value)}
              />
            </div>
          </div>
          <div className="column">
            <div className="inputs">
              <Select
                isClearable
                placeholder="Ethnic Tribe"
                className="cx-create-select"
                classNamePrefix="cx"
                value={ethnic_tribe_value}
                options={ethnic_tribes}
                onChange={selected => onpersonalChangeSelect('tribe', selected)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

BioPersonal.propTypes = {};

export default memo(BioPersonal);
