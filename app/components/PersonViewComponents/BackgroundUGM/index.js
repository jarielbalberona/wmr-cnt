/**
 *
 * BackgroundUGM
 *
 */

import React, { memo } from 'react';
import Paragraph from '../Paragraph';
import './styles.scss';

function BackgroundUGM({ title, data }) {
  if (data)
    return (
      <div id="BackgroundUGM">
        <div className="title is-5 has-text-weight-bold main-title">
          {title}
        </div>
        <Paragraph
          title="Propaganda/Themes Used By The Recruiters:"
          content={data.propaganda}
        />
        <Paragraph
          title="Personal Reason/Motivation For Joining:"
          content={data.personal_motivation}
        />
      </div>
    );
}

export default memo(BackgroundUGM);
