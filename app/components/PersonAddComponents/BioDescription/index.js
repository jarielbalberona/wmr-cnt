/**
 *
 * BioPersonal
 *
 */

import React, { memo } from 'react';
import FloatingLabel from 'floating-label-react';
import './styles';

function BioPersonal({ description }) {
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
                onChange={() => {}}
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
                onChange={() => {}}
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
                type="number"
                value={description.height}
                onChange={() => {}}
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
                placeholder="Weight"
                className=""
                type="number"
                value={description.weight}
                onChange={() => {}}
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
                onChange={() => {}}
              />
            </div>
          </div>
          <div className="column">
            <div className="inputs">
              <FloatingLabel
                id="identifying_marks"
                name="identifying_marks"
                placeholder="Identifying Marks"
                className=""
                type="text"
                value={description.identifying_marks}
                onChange={() => {}}
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
                onChange={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

BioPersonal.propTypes = {};

export default memo(BioPersonal);
