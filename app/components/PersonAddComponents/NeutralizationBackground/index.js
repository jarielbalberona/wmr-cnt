/**
 *
 * Neutralization
 *
 */

import React, { memo, useState } from 'react';
import FloatingLabel from 'floating-label-react';
import CreatableSelect from 'react-select/creatable';

import FormParagraph from '../FormParagraph';
import './styles';

function NeutralizationForm() {
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  return (
    <div className="columns">
      <div className="column">
        <div className="inputs date-input">
          <div className="date-actions">
            <button type="button" className="button" onClick={() => {}}>
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
            placeholder="Date"
            className=""
            type="text"
            value=""
            onChange={() => {}}
          />
          {/* <Calendar
            name="birth_date"
            className={isCalendarOpen ? '' : 'is-hidden'}
            onChange={value => console.log(value)}
          /> */}
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
            value=""
            onChange={() => {}}
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
            value=""
            options=""
            onChange={selected => console.log('dialects', selected)}
            onCreateOption={value => console.log('dialect', value)}
          />
        </div>
      </div>
    </div>
  );
}
function Neutralization() {
  return (
    <section id="Neutralization" className="form-page">
      <div className="container">
        <div className="title is-size-4">Neutralization & Background</div>
        <div className="title is-size-6 input-title">
          Circumstances of Neutralization
        </div>
        <NeutralizationForm />
        <div className="title is-size-6 input-title">Background of Entity</div>
        <FormParagraph />
      </div>
    </section>
  );
}

Neutralization.propTypes = {};

export default memo(Neutralization);
