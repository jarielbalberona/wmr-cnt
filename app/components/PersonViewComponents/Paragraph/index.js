/**
 *
 * Paragraph
 *
 */

import React, { memo } from 'react';

function Paragraph({ title, content, type }) {
  return (
    <div id="Paragraph">
      <div
        className={`title ${
          type === 'title'
            ? 'is-5 has-text-weight-bold'
            : 'is-5 has-text-weight-semibold sub-title'
        }`}
      >
        {title}
      </div>
      <p
        className={`has-text-justified ${
          type !== 'title' ? 'sub-content' : ''
        } body-content`}
      >
        {content}
      </p>
    </div>
  );
}

export default memo(Paragraph);
