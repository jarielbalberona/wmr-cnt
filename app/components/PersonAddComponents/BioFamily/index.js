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
}) {
  return (
    <div>
      <div className="columns">
        <div className="column bulma-switch">
          <div className="inputs">
            <div className="field">
              <input
                id={parent}
                type="checkbox"
                name={parent}
                className="switch is-primary"
                onChange={e =>
                  setIsDeceased({
                    ...is_deceased,
                    [e.currentTarget.name]: e.currentTarget.checked,
                  })
                }
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
              onChange={() => {}}
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
              onChange={() => {}}
              disabled={is_deceased[parent]}
            />
          </div>
        </div>
        <div className="column">
          <div className="inputs date-input">
            <div className="date-actions">
              <button type="button" className="button" onClick={() => {}}>
                <i className="fas fa-times" />
              </button>
              <button
                type="button"
                className="button"
                onClick={() => setCalendarOpen(!is_calendar_open)}
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
              value=""
              onFocus={() => setCalendarOpen(true)}
              onChange={() => {}}
            />
            <Calendar
              name="birth_date"
              className={is_calendar_open ? '' : 'is-hidden'}
              onChange={() => {}}
              // onChange={value =>
              //   onChangeInput(
              //     'birth_date',
              //     moment(value).format('MM/DD/YYYY'),
              //   )
              // }
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
              onChange={() => {}}
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
              onChange={() => {}}
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
              onChange={() => {}}
              disabled={is_deceased[parent]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
function SiblingForm({ sibling }) {
  return (
    <div className="columns">
      <div className="column">
        <div className="inputs">
          <FloatingLabel
            id="full_name"
            name="full_name"
            placeholder="Full name"
            className=""
            type="text"
            value={sibling.full_name}
            onChange={() => {}}
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
            value={sibling.age}
            onChange={() => {}}
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
            onChange={() => {}}
          />
        </div>
      </div>
      <div className="column gender-radio">
        <div className="">
          <p>Gender</p>
        </div>
        <div className="control">
          <label className="radio">
            <input type="radio" name="answer" />
            Male
          </label>
          <label className="radio">
            <input type="radio" name="answer" />
            Female
          </label>
        </div>
      </div>
    </div>
  );
}
function BioFamily({ family }) {
  const [is_calendar_open, setCalendarOpen] = useState(false);
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
        />
        <div className="title is-size-6 input-title">Mother</div>
        <ParentsForm
          parent="mother"
          data={family}
          is_deceased={is_deceased}
          is_calendar_open={is_calendar_open}
          setCalendarOpen={setCalendarOpen}
          setIsDeceased={setIsDeceased}
        />
        <div className="title is-size-6 input-title">Sibling/s</div>
        <SiblingForm sibling={family.siblings[0]} />
      </div>
    </section>
  );
}

BioFamily.propTypes = {};

export default memo(BioFamily);
