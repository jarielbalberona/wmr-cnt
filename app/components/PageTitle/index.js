/**
 *
 * PageTitle
 *
 */

import React, { memo } from 'react';

import './styles';

function PageTitle({ expanded, toggleSideBar, name, desc }) {
  return (
    <div id="PageTitle">
      <div className="action">
        <button
          type="button"
          className="button is-primary"
          onClick={toggleSideBar}
        >
          <span className="icon is-medium">
            <i
              className={`fas fa-angle-double-${
                expanded ? 'left' : 'right'
              } fa-lg`}
            ></i>
          </span>
        </button>
      </div>
      <div className="deets">
        <div className="title">{name}</div>
        <div className="subtitle">{desc}</div>
      </div>
    </div>
  );
}

PageTitle.propTypes = {};

export default memo(PageTitle);
