/**
 *
 * BackgroundUGM
 *
 */

import React, { memo } from 'react';
import Paragraph from '../Paragraph';
import './styles.scss';

function Neutralization({ title, data }) {
  if (data)
    return (
      <div id="Neutralization">
        <div className="title is-5 has-text-weight-bold main-title">
          {title}
        </div>
        <p className="status-class">
          <span className="title is-5 has-text-weight-semibold sub-title field-label">
            A. Status/Classification:{' '}
          </span>
          {data.classification}
        </p>
        <br />
        <Paragraph
          title="B. Details of Neutralization:"
          content={data.details}
        />
        <br />
        <Paragraph
          title="C. Reason for Surrender:"
          content={data.surrender_reason}
        />
      </div>
    );
}

export default memo(Neutralization);
