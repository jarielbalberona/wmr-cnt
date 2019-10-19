/**
 *
 * BioPersonal
 *
 */

import React, { memo } from 'react';
import FloatingLabel from 'floating-label-react';
import './styles';

function BattleFactorsDispositions({
  dispositions,
  onBattleFactorsDisMis,
  onAddBattleFactorsDisMis,
}) {
  const Disposition = dispositions.map((disposition, key) => (
    // eslint-disable-next-line react/no-array-index-key
    <div key={key}>
      <div className="columns">
        <div className="column">
          <div className="inputs">
            <FloatingLabel
              id="municipality"
              name="municipality"
              placeholder="Municipality"
              className=""
              type="text"
              value={disposition.municipality}
              onChange={e => onBattleFactorsDisMis('dispositions', key, e)}
            />
          </div>
        </div>
        <div className="column">
          <div className="inputs">
            <FloatingLabel
              id="barangay"
              name="barangay"
              placeholder="Barangay"
              className=""
              type="text"
              value={disposition.barangay}
              onChange={e => onBattleFactorsDisMis('dispositions', key, e)}
            />
          </div>
        </div>
        <div className="column">
          <div className="inputs">
            <FloatingLabel
              id="posting_area"
              name="posting_area"
              placeholder="Posting area"
              className=""
              type="text"
              value={disposition.posting_area}
              onChange={e => onBattleFactorsDisMis('dispositions', key, e)}
            />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="inputs">
            <FloatingLabel
              id="identified_contact"
              name="identified_contact"
              placeholder="Identified contact"
              className=""
              type="text"
              value={disposition.identified_contact}
              onChange={e => onBattleFactorsDisMis('dispositions', key, e)}
            />
          </div>
        </div>
        <div className="column">
          <div className="inputs">
            <FloatingLabel
              id="supply_flow"
              name="supply_flow"
              placeholder="Supply flow"
              className=""
              type="text"
              value={disposition.supply_flow}
              onChange={e => onBattleFactorsDisMis('dispositions', key, e)}
            />
          </div>
        </div>
        <div className="column">
          <div className="inputs">
            <FloatingLabel
              id="caa_contacts"
              name="caa_contacts"
              placeholder="Civilian Active Auxiliary"
              className=""
              type="text"
              value={disposition.caa_contacts}
              onChange={e => onBattleFactorsDisMis('dispositions', key, e)}
            />
          </div>
        </div>
      </div>
      <hr />
    </div>
  ));
  return (
    <div id="BattleFactorsDisposition" className="form-page">
      <div className="container">
        <div className="title is-size-4">Disposition</div>
        <div className="field sibling-btn">
          <div className="control">
            <button
              type="button"
              className="button is-primary"
              onClick={onAddBattleFactorsDisMis}
            >
              + Disposition
            </button>
          </div>
        </div>
        {Disposition}
      </div>
    </div>
  );
}

BattleFactorsDispositions.propTypes = {};

export default memo(BattleFactorsDispositions);
