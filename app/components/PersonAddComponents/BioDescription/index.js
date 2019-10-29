/**
 *
 * BioPersonal
 *
 */

import React, { memo } from 'react';
import FloatingLabel from 'floating-label-react';
import './styles';

function BioDescription({ description, onChangeInput }) {
  return (
    <section id="BioPersonal" className="form-page">
      <div className="container">
        <div className="title is-size-4">Description</div>
        <div className="columns">
          <div className="column">
            <div className="inputs">
              <FloatingLabel
                id="hair"
                name="hair"
                placeholder="Hair"
                className=""
                type="text"
                value={description.hair}
                onChange={onChangeInput}
              />
            </div>
          </div>
          <div className="column">
            <div className="inputs">
              <FloatingLabel
                id="eyes"
                name="eyes"
                placeholder="Eyes"
                className=""
                type="text"
                value={description.eyes}
                onChange={onChangeInput}
              />
            </div>
          </div>
          <div className="column">
            <div className="inputs">
              <FloatingLabel
                id="height"
                name="height"
                placeholder="Height"
                className=""
                type="text"
                value={description.height ? description.height : ''}
                onChange={onChangeInput}
              />
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="inputs">
              <FloatingLabel
                id="weight"
                name="weight"
                placeholder="Weight by kg"
                className=""
                type="number"
                value={description.weight ? description.weight : ''}
                onChange={onChangeInput}
              />
            </div>
          </div>
          <div className="column">
            <div className="inputs">
              <FloatingLabel
                id="complexion"
                name="complexion"
                placeholder="Complexion"
                className=""
                type="text"
                value={description.complexion}
                onChange={onChangeInput}
              />
            </div>
          </div>
          <div className="column">
            <div className="inputs">
              <FloatingLabel
                id="identifying_mark"
                name="identifying_mark"
                placeholder="Identifying Mark"
                className=""
                type="text"
                value={description.identifying_mark}
                onChange={onChangeInput}
              />
            </div>
          </div>
          <div className="column">
            <div className="inputs">
              <FloatingLabel
                id="build"
                name="build"
                placeholder="Build"
                className=""
                type="text"
                value={description.build}
                onChange={onChangeInput}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

BioDescription.propTypes = {};

export default memo(BioDescription);
