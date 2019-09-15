/**
 *
 * PageTitle
 *
 */

import React, { memo } from 'react';

import './styles';

function PageTitle({ name, desc }) {
  return (
    <div id="PageTitle">
      <div className="deets">
        <div className="title">{name}</div>
        <div className="subtitle">{desc}</div>
      </div>
    </div>
  );
}

PageTitle.propTypes = {};

export default memo(PageTitle);
