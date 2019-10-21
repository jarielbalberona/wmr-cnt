/**
 *
 * FormSample
 *
 */

import React, { memo } from 'react';
import FormParagraph from '../FormParagraph';

import './styles';

function FormParagraphWithTitle({
  type,
  classification,
  onChangeInput,
  title,
  value,
  rows,
  form_title,
  onChange,
}) {
  return (
    <section id="SignificantInvolvement" className="form-page">
      <div className="container">
        <div className="title is-size-4">{title}</div>
        <FormParagraph
          type={type}
          classification={classification}
          onChangeInput={onChangeInput}
          title={title}
          value={value}
          rows={rows}
          form_title={form_title}
          onChange={onChange}
        />
      </div>
    </section>
  );
}

FormParagraphWithTitle.propTypes = {};

export default memo(FormParagraphWithTitle);
