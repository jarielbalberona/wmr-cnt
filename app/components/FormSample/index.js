/**
 *
 * FormSample
 *
 */

import React, { memo } from 'react';

import './styles';

function FormSample() {
  return (
    <section id="BioDescription" className="form-page">
      <div className="container">
        <div className="title is-size-4">Description</div>
        <div className="columns">
          <div className="column"></div>
        </div>
      </div>
    </section>
  );
}

FormSample.propTypes = {};

export default memo(FormSample);
