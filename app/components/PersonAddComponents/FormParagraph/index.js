/**
 *
 * NeutralizationBackgroundForm
 *
 */

import React, { memo } from 'react';
import './styles';

function FormParagraph({
  type,
  classification,
  form_title,
  rows,
  value,
  onChange,
  onChangeInput,
}) {
  return (
    <section id="FormParagraph">
      <div className="columns">
        {type === 'status-classification' ? (
          <div className="column">
            <div className="title is-size-6 input-title">
              Status/Classification
            </div>
            <div className="inputs">
              <div className="field">
                <input
                  className="is-checkradio is-primary"
                  id="Killed"
                  type="radio"
                  name="Killed"
                  checked={classification === 'Killed'}
                  onChange={onChangeInput}
                />
                <label htmlFor="Killed">Killed</label>
                <input
                  className="is-checkradio is-primary"
                  id="Captured"
                  type="radio"
                  name="Captured"
                  checked={classification === 'Captured'}
                  onChange={onChangeInput}
                />
                <label htmlFor="Captured">Captured</label>
                <input
                  className="is-checkradio is-primary"
                  id="Surrendered"
                  type="radio"
                  name="Surrendered"
                  checked={classification === 'Surrendered'}
                  onChange={onChangeInput}
                />
                <label htmlFor="Surrendered">Surrendered</label>
                <input
                  className="is-checkradio is-primary"
                  id="Arrested"
                  type="radio"
                  name="Arrested"
                  checked={classification === 'Arrested'}
                  onChange={onChangeInput}
                />
                <label htmlFor="Arrested">Arrested</label>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
        <div className="column">
          {type === 'status-classification' ? (
            <div className="title is-size-6 input-title">
              Details of Neutralization
            </div>
          ) : (
            ''
          )}
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
