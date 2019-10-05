/**
 *
 * FormSample
 *
 */

import React, { memo } from 'react';
import FloatingLabel from 'floating-label-react';
import './styles';

function EducationForm() {
  return (
    <div>
      <div className="title is-size-6 input-title">College</div>
      <div className="columns">
        <div className="column">
          <div className="inputs">
            <FloatingLabel
              id="school_name"
              name="school_name"
              placeholder="School name"
              className=""
              type="text"
              value=""
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
              value=""
              onChange={() => {}}
            />
          </div>
        </div>
        <div className="column">
          <div className="inputs">
            <FloatingLabel
              id="school_year"
              name="school_year"
              placeholder="School year"
              className=""
              type="text"
              value=""
              onChange={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Education() {
  return (
    <section id="Education" className="form-page">
      <div className="container">
        <div className="title is-size-4">Education</div>
        <div className="columns">
          <div className="column">
            <div className="dropdown is-hoverable">
              <div className="dropdown-trigger">
                <button
                  type="button"
                  className="button is-primary"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
                  <span>Add Education</span>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <a className="dropdown-item button">Elementary</a>
                  <a className="dropdown-item button">High School</a>
                  <a className="dropdown-item button">College</a>
                  <a className="dropdown-item button">
                    Vocational (Situational)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <EducationForm />
      </div>
    </section>
  );
}

Education.propTypes = {};

export default memo(Education);
