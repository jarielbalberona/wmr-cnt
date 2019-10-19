/**
 *
 * BioPersonal
 *
 */

import React, { memo } from 'react';
import FloatingLabel from 'floating-label-react';
import './styles';

function RelativeForm({ relatives, onChange }) {
  const relative_form = relatives.map((relative, key) => (
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
            value={relative.full_name}
            onChange={e => onChange(key, e)}
          />
        </div>
      </div>
      <div className="column">
        <div className="inputs">
          <FloatingLabel
            id="description"
            name="description"
            placeholder="Description"
            className=""
            type="text"
            value={relative.description}
            onChange={e => onChange(key, e)}
          />
        </div>
      </div>
    </div>
  ));
  return relative_form;
}

function FamAffRelatives({
  relatives,
  onAddRelativeLcm,
  onAddRelativeGs,
  onRelativeGsChangeInput,
  onRelativeLcmChangeInput,
}) {
  return (
    <section id="FamAffRelatives" className="form-page">
      <div className="container">
        <div className="title is-size-4">Relatives</div>
        <div className="title is-size-6 input-title">Government Service</div>
        <div className="field sibling-btn">
          <div className="control">
            <button
              type="button"
              className="button is-primary"
              onClick={onAddRelativeGs}
            >
              + Relative
            </button>
          </div>
        </div>
        <RelativeForm
          onChange={onRelativeGsChangeInput}
          relatives={relatives.government_working}
        />
        <div className="title is-size-6 input-title">
          Affiliated with Local Communist Movement Organization
        </div>
        <div className="field sibling-btn">
          <div className="control">
            <button
              type="button"
              className="button is-primary"
              onClick={onAddRelativeLcm}
            >
              + Relative
            </button>
          </div>
        </div>
        <RelativeForm
          onChange={onRelativeLcmChangeInput}
          relatives={relatives.lcm_org}
        />
      </div>
    </section>
  );
}

FamAffRelatives.propTypes = {};

export default memo(FamAffRelatives);
