/**
 *
 * FormSample
 *
 */

import React, { memo } from 'react';
import FloatingLabel from 'floating-label-react';
import './styles';

function EmploymentForm() {
  return (
    <div className="columns">
      <div className="column">
        <div className="inputs">
          <FloatingLabel
            id="company_name"
            name="company_name"
            placeholder="Company name"
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
            id="job_title"
            name="job_title"
            placeholder="Job title"
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
            id="duration"
            name="duration"
            placeholder="Duration"
            className=""
            type="text"
            value=""
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  );
}

function Employment() {
  return (
    <section id="Employment" className="form-page">
      <div className="container">
        <div className="title is-size-4">Employment</div>
        <div className="columns">
          <div className="column">
            <button
              type="button"
              className="button is-primary"
              aria-haspopup="true"
              aria-controls="dropdown-menu"
            >
              Add Employment
            </button>
          </div>
        </div>
        <EmploymentForm />
      </div>
    </section>
  );
}

Employment.propTypes = {};

export default memo(Employment);
