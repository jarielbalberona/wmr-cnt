/**
 *
 * BioPersonal
 *
 */

import React, { memo } from 'react';
import FloatingLabel from 'floating-label-react';
import './styles';

function RelativeForm({ relative }) {
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
            value={relative.full_name}
            onChange={() => {}}
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
            value={relative.occupation}
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
            type="number"
            value={relative.address}
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

function FamAffRelatives({ family_affiliation }) {
  return (
    <section id="FamAffRelatives" className="form-page">
      <div className="container">
        <div className="title is-size-4">Relatives</div>
        <div className="title is-size-6 input-title">Government Service</div>
        <RelativeForm
          relative={family_affiliation.relatives.government_service[0]}
        />
        <div className="title is-size-6 input-title">
          Affiliated with LCM Organization
        </div>
        <RelativeForm
          relative={family_affiliation.relatives.lcm_organization[0]}
        />
      </div>
    </section>
  );
}

FamAffRelatives.propTypes = {};

export default memo(FamAffRelatives);
