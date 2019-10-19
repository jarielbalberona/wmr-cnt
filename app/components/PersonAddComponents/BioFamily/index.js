/**
 *
 * BioPersonal
 *
 */

import React, { memo, useState } from 'react';
import FloatingLabel from 'floating-label-react';
import Calendar from 'react-calendar';
import './styles';

function ParentsForm({
  parent,
  data,
  is_calendar_open,
  is_deceased,
  setCalendarOpen,
  setIsDeceased,
  onChange,
}) {
  const aliveChange = e => {
    setIsDeceased({
      ...is_deceased,
      [e.currentTarget.id]: e.currentTarget.checked,
    });
    onChange(parent, e);
  };

  return (
    <div>
      <div className="columns">
        <div className="column bulma-switch">
          <div className="inputs">
            <div className="field">
              <input
                id={parent}
                type="checkbox"
                name="alive"
                className="switch is-primary"
                onChange={e => aliveChange(e)}
              />
              <label htmlFor={parent}>Deceased</label>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="inputs">
            <FloatingLabel
              id="full_name"
              name="full_name"
              placeholder="Full name"
              className=""
              type="text"
              value={data[parent].full_name}
              onChange={e => onChange(parent, e)}
              disabled={is_deceased[parent]}
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
              value={data[parent].age}
              onChange={e => onChange(parent, e)}
              disabled={is_deceased[parent]}
            />
          </div>
        </div>
        <div className="column">
          <div className="inputs date-input">
            <div className="date-actions">
              <button
                type="button"
                className="button"
                onClick={() => onChange(parent, 'birth_date', '')}
                disabled={is_deceased[parent]}
              >
                <i className="fas fa-times" />
              </button>
              <button
                type="button"
                className="button"
                onClick={() =>
                  setCalendarOpen({
                    ...is_calendar_open,
                    [parent]: !is_calendar_open[parent],
                  })
                }
                disabled={is_deceased[parent]}
              >
                <i className="fas fa-calendar-alt" />
              </button>
            </div>
            <FloatingLabel
              id="birth_date"
              name="birth_date"
              placeholder="Birth date"
              className=""
              type="text"
              value={data[parent].birth_date}
              onFocus={() =>
                setCalendarOpen({
                  ...is_calendar_open,
                  [parent]: true,
                })
              }
              onChange={() => {}}
              disabled={is_deceased[parent]}
            />
            <Calendar
              name="birth_date"
              className={is_calendar_open[parent] ? '' : 'is-hidden'}
              onChange={e => onChange(parent, e)}
              disabled={is_deceased[parent]}
              onClickDay={() =>
                setCalendarOpen({
                  ...is_calendar_open,
                  [parent]: !is_calendar_open[parent],
                })
              }
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
              value={data[parent].birth_place}
              onChange={e => onChange(parent, e)}
              disabled={is_deceased[parent]}
            />
          </div>
        </div>
        <div className="column">
          <div className="inputs">
            <FloatingLabel
              id="present_address"
              name="present_address"
              placeholder="Present address"
              className=""
              type="text"
              value={data[parent].present_address}
              onChange={e => onChange(parent, e)}
              disabled={is_deceased[parent]}
            />
          </div>
        </div>
        <div className="column">
          <div className="inputs">
            <FloatingLabel
              id="occupation"
              name="occupation"
              placeholder="Occupation"
              className=""
              type="text"
              value={data[parent].occupation}
              onChange={e => onChange(parent, e)}
              disabled={is_deceased[parent]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SiblingForm({ siblings, onAddSibling, onFamilySiblingChangeInput }) {
  const Siblings = siblings.map((sibling, key) => (
    // eslint-disable-next-line react/no-array-index-key
    <div key={key} className="columns">
      <div className="column">
        <div className="inputs">
          <FloatingLabel
            id="full_name"
            name="full_name"
            placeholder="Full name"
            className=""
            type="text"
            value={sibling.full_name}
            onChange={e => onFamilySiblingChangeInput(key, e)}
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
            value={sibling.age}
            onChange={e => onFamilySiblingChangeInput(key, e)}
          />
        </div>
      </div>
      <div className="column">
        <div className="inputs">
          <FloatingLabel
            id="address"
            name="address"
            placeholder="Address"
            className=""
            type="text"
            value={sibling.address}
            onChange={e => onFamilySiblingChangeInput(key, e)}
          />
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <div className="field sibling-btn">
        <div className="control">
          <button
            type="button"
            className="button is-primary"
            onClick={onAddSibling}
          >
            + Sibling
          </button>
        </div>
      </div>
      {Siblings}
    </div>
  );
}

function BioFamily({
  family,
  onChange,
  onAddSibling,
  onFamilySiblingChangeInput,
}) {
  const [is_calendar_open, setCalendarOpen] = useState({
    mother: false,
    father: false,
  });
  const [is_deceased, setIsDeceased] = useState({
    mother: false,
    father: false,
  });
  return (
    <section id="BioFamily" className="form-page">
      <div className="container">
        <div className="title is-size-4">Family</div>
        <div className="title is-size-6 input-title">Father</div>
        <ParentsForm
          parent="father"
          data={family}
          is_deceased={is_deceased}
          is_calendar_open={is_calendar_open}
          setCalendarOpen={setCalendarOpen}
          setIsDeceased={setIsDeceased}
          onChange={onChange}
        />
        <div className="title is-size-6 input-title">Mother</div>
        <ParentsForm
          parent="mother"
          data={family}
          is_deceased={is_deceased}
          is_calendar_open={is_calendar_open}
          setCalendarOpen={setCalendarOpen}
          setIsDeceased={setIsDeceased}
          onChange={onChange}
        />
        <div className="title is-size-6 input-title">Sibling/s</div>
        <SiblingForm
          onAddSibling={onAddSibling}
          siblings={family.siblings}
          onFamilySiblingChangeInput={onFamilySiblingChangeInput}
        />
      </div>
    </section>
  );
}

BioFamily.propTypes = {};

export default memo(BioFamily);
