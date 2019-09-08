/**
 *
 * PageTitle
 *
 */

import React, { memo } from 'react';

import './styles';

function FormSample({ title }) {
  return (
    <div id="PageTFitle">
      <h1>{title}</h1>
      <h2>Hello Form</h2>
    </div>
  );
}

FormSample.propTypes = {};

export default memo(FormSample);
