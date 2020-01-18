/**
 *
 * BioPersonal
 *
 */

import React, { memo } from 'react';
import FloatingLabel from 'floating-label-react';
import Select from 'react-select';
import './styles';

/* eslint-disable react/no-array-index-key */
function CriminalCase({
  cases,
  onAddCase,
  onCaseInputChange,
  onRemoveCase,
  cases_options,
  rtc_region_options,
}) {
  const Cases = cases.map((ccase, key) => (
    <>
      <div key={key} className="columns">
        <div className="column">
          <div className="inputs">
            <Select
              isClearable
              placeholder="Case name"
              className="cx-create-select"
              classNamePrefix="cx"
              value={
                ccase.case_name
                  ? { value: ccase.case_name, label: ccase.case_name }
                  : ''
              }
              options={cases_options}
              onChange={selected =>
                onCaseInputChange(key, 'case_name', selected.value)
              }
            />
          </div>
        </div>
        <div className="column">
          <div className="inputs">
            <FloatingLabel
              id="case_number"
              name="case_number"
              placeholder="Case number"
              className=""
              type="number"
              value={ccase.case_number}
              onChange={e =>
                onCaseInputChange(key, 'case_number', e.currentTarget.value)
              }
            />
          </div>
        </div>
        <div className="column">
          <div className="inputs">
            <Select
              isClearable
              placeholder="RTC Region"
              className="cx-create-select"
              classNamePrefix="cx"
              value={
                ccase.rtc_region
                  ? { value: ccase.rtc_region, label: ccase.rtc_region }
                  : ''
              }
              options={rtc_region_options}
              onChange={selected =>
                onCaseInputChange(key, 'rtc_region', selected.value)
              }
            />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="inputs">
            <FloatingLabel
              id="branch"
              name="branch"
              placeholder="Branch"
              className=""
              type="string"
              value={ccase.branch}
              onChange={e =>
                onCaseInputChange(key, 'branch', e.currentTarget.value)
              }
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
              type="string"
              value={ccase.address}
              onChange={e =>
                onCaseInputChange(key, 'address', e.currentTarget.value)
              }
            />
          </div>
        </div>
        <div className="sibling-action is-pulled-right">
          <button
            type="button"
            className="button is-primary"
            onClick={() => {
              // eslint-disable-next-line no-alert
              if (window.confirm('Delete this record?')) {
                onRemoveCase(key);
              }
            }}
          >
            <i className="fas fa-times" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </>
  ));

  return (
    <div>
      <div className="field sibling-btn">
        <div className="control">
          <button
            type="button"
            className="button is-primary"
            onClick={onAddCase}
          >
            + Case
          </button>
        </div>
      </div>
      {Cases}
    </div>
  );
}

CriminalCase.propTypes = {};

export default memo(CriminalCase);
