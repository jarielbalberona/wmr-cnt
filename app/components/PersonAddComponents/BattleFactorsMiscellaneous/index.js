/**
 *
 * BioPersonal
 *
 */

import React, { memo } from 'react';
import FloatingLabel from 'floating-label-react';
import './styles';

function BattleFactorsMiscellaneous({
  miscellaneous,
  onAddBattleFactorsDisMis,
  onBattleFactorsDisMis,
}) {
  const Miscellaneous = miscellaneous.map((miscell, key) => (
    // eslint-disable-next-line react/no-array-index-key
    <div key={key}>
      <div className="columns">
        <div className="column">
          <div className="inputs">
            <FloatingLabel
              id="name"
              name="name"
              placeholder="Name"
              className=""
              type="text"
              value={miscell.name}
              onChange={e => onBattleFactorsDisMis('miscellaneous', key, e)}
            />
          </div>
        </div>
        <div className="column">
          <div className="inputs">
            <FloatingLabel
              id="unit"
              name="unit"
              placeholder="Unit"
              className=""
              type="text"
              value={miscell.unit}
              onChange={e => onBattleFactorsDisMis('miscellaneous', key, e)}
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
              value={miscell.description}
              onChange={e => onBattleFactorsDisMis('miscellaneous', key, e)}
            />
          </div>
        </div>
        <div className="column">
          <div className="inputs">
            <FloatingLabel
              id="remarks"
              name="remarks"
              placeholder="Remarks"
              className=""
              type="text"
              value={miscell.remarks}
              onChange={e => onBattleFactorsDisMis('miscellaneous', key, e)}
            />
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div id="BattleFactorsMiscellaneous" className="form-page">
      <div className="container">
        <div className="title is-size-4">Miscellaneous</div>
        <div className="field sibling-btn">
          <div className="control">
            <button
              type="button"
              className="button is-primary"
              onClick={onAddBattleFactorsDisMis}
            >
              + Miscellaneous
            </button>
          </div>
        </div>
        {Miscellaneous}
      </div>
    </div>
  );
}

BattleFactorsMiscellaneous.propTypes = {};

export default memo(BattleFactorsMiscellaneous);
