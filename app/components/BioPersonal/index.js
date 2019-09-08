/**
 *
 * BioPersonal
 *
 */

import React, { memo } from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import FloatingLabel from 'floating-label-react';
import _string from 'lodash/string';
import './styles';

function BioPersonal({
  group_type,
  group,
  alias_nickname,
  civil_status,
  personal,
  onChangeInput,
  onChangeData,
}) {
  const group_type_option = [
    { value: 'red', label: 'Red' },
    { value: 'white', label: 'White' },
  ];
  const group_category_by_type = [
    { value: 'red group 1', label: 'Red Group 1', type: 'red' },
    { value: 'red group 2', label: 'Red Group 2', type: 'red' },
    { value: 'white group 1', label: 'White Group 1', type: 'white' },
    { value: 'white group 2', label: 'White Group 2', type: 'white' },
  ];
  const dialect = [
    { value: 'bisaya', label: 'Bisaya' },
    { value: 'tagalog', label: 'Tagalog' },
  ];
  const religion = [
    { value: 'catholic', label: 'catholic' },
    { value: 'muslim', label: 'muslim' },
  ];
  let group_default = null;
  let type_default = null;

  if (group_type) {
    type_default = { value: group_type, label: _string.upperFirst(group_type) };
  }
  if (group.value) {
    group_default = {
      value: group.value,
      label: _string.upperFirst(group.value),
    };
  }

  return (
    <section id="BioPersonal" className="form-page">
      <div className="container">
        <div className="title">Personal Data</div>
        <div className="columns">
          <div className="column">
            <Select
              isClearable
              placeholder="Group type"
              className="cx-create-select"
              classNamePrefix="cx"
              value={type_default}
              options={group_type_option}
              onChange={selected => onChangeData('group_type', selected)}
            />
          </div>
          <div className="column">
            <Select
              isClearable
              placeholder="Group"
              className="cx-create-select"
              classNamePrefix="cx"
              value={group_default}
              options={group_category_by_type}
              onChange={selected => onChangeData('group', selected)}
            />
          </div>
          <div className="column">
            <div className="inputs">
              <FloatingLabel
                id="alias_nickname"
                name="alias_nickname"
                placeholder="Alias / Nickname"
                className=""
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
            <div className="inputs">
              <FloatingLabel
                id="birth_date"
                name="birth_date"
                placeholder="Birth date"
                className=""
                type="text"
                value={personal.birth_date}
                onChange={onChangeInput}
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
                type="text"
                value={personal.age}
                onChange={onChangeInput}
              />
            </div>
          </div>
          <div className="column">
            <div className="inputs">
              <CreatableSelect
                isClearable
                placeholder="Civil status"
                className="cx-create-select"
                classNamePrefix="cx"
                options={civil_status}
                onChange={() => console.log('x')}
              />
            </div>
          </div>
          <div className="column">
            <div className="inputs">
              <CreatableSelect
                isClearable
                placeholder="Religion"
                className="cx-create-select"
                classNamePrefix="cx"
                options={religion}
                onChange={() => console.log('x')}
              />
            </div>
          </div>
        </div>

        <div className="columns">
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
          <div className="column">
            <div className="inputs">
              <CreatableSelect
                isMulti
                isClearable
                placeholder="Dialect/s spoken"
                className="cx-create-select"
                classNamePrefix="cx"
                options={dialect}
                onChange={() => console.log('x')}
              />
            </div>
          </div>
          <div className="column">
            <div className="inputs">
              <FloatingLabel
                id="ethnic_tribe"
                name="ethnic_tribe"
                placeholder="Ethnic Tribe"
                className=""
                type="text"
                value={personal.ethnic_tribe}
                onChange={onChangeInput}
              />
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="inputs">
              <FloatingLabel
                id="educational_attainment"
                name="educational_attainment"
                placeholder="Educational Attainment"
                className=""
                type="text"
                value={personal.educational_attainment}
                onChange={onChangeInput}
              />
            </div>
          </div>
          <div className="column">
            <div className="inputs">
              <FloatingLabel
                id="school_name"
                name="school_name"
                placeholder="School name"
                className=""
                type="text"
                value={personal.school_name}
                onChange={onChangeInput}
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
