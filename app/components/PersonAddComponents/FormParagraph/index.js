/**
 *
 * NeutralizationBackgroundForm
 *
 */

import React, { memo } from 'react';
import './styles';

function FormParagraph({ form_title, rows, value, onChange }) {
  return (
    <section id="FormParagraph">
      <div className="columns">
        <div className="column">
          <div className="inputs">
            <div className="field">
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Type here..."
                  rows={rows}
                  name={form_title}
                  value={value}
                  onChange={onChange}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FormParagraph.propTypes = {};

export default memo(FormParagraph);
