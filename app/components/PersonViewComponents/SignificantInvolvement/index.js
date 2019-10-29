/**
 *
 * BackgroundUGM
 *
 */

import React, { memo } from 'react';
import Paragraph from '../Paragraph';
import './styles.scss';

function SignificantInvolvement({ title, data }) {
  if (data)
    return (
      <div id="SignificantInvolvement">
        <div className="title is-5 has-text-weight-bold main-title">
          {title}
        </div>
        <Paragraph title="A. Series Of Promotion:" content={data.promotion} />
        <Paragraph
          title="B. Demotion/Disciplinary Action:"
          content={data.demotion}
        />
        <Paragraph
          title="C. Involvement In Significant Violent Activities:"
          content={data.violent_activities}
        />
        <Paragraph
          title="D. Involvement In Non-Violent Activities:"
          content={data.nonviolent_activities}
        />
      </div>
    );
}

export default memo(SignificantInvolvement);
