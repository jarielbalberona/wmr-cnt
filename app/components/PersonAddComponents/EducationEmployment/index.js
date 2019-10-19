/**
 *
 * FormSample
 *
 */

import React, { memo } from 'react';
import FloatingLabel from 'floating-label-react';
import Select from 'react-select';
import FormParagraphWithTitle from 'components/PersonAddComponents/FormParagraphWithTitle';
import './styles';

function EducationForm({
  education,
  educational_attainment_options,
  onChangeEdu,
}) {
  let educational_attainment_value = null;

  if (education.attainment) {
    educational_attainment_value = {
      value: education.attainment,
      label: education.attainment,
    };
  }

  return (
    <>
      <div className="title is-size-6 input-title">Educational Attainment</div>
      <div className="columns">
        <div className="column">
          <div className="inputs">
            <Select
              isClearable
              placeholder="Educational Attainment"
              className="cx-create-select"
              classNamePrefix="cx"
              value={educational_attainment_value}
              options={educational_attainment_options}
              onChange={selected =>
                onChangeEdu('education', selected, 'attainment')
              }
            />
          </div>
        </div>
        <div className="column">
          <div className="inputs">
            <FloatingLabel
              id="description"
              name="description"
              placeholder="Description: e.g School name"
              className=""
              type="text"
              value={education.description}
              onChange={e => onChangeEdu('education', e)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

function EducationEmployment({
  employment_before_ugms,
  education,
  educational_attainment_options,
  onChangeEmp,
  onChangeEdu,
}) {
  return (
    <section id="Education" className="form-page">
      <div className="container">
        <div className="title is-size-4">
          Educational Attainment / Employment before UGM
        </div>
        <EducationForm
          education={education}
          educational_attainment_options={educational_attainment_options}
          onChangeEdu={onChangeEdu}
        />
        <div className="title is-size-6 input-title">Employment before UGM</div>
        <FormParagraphWithTitle
          value={employment_before_ugms}
          rows="8"
          form_title="employment_before_ugm"
          onChange={e => onChangeEmp('personal_history_statement', e)}
        />
      </div>
    </section>
  );
}

EducationEmployment.propTypes = {};

export default memo(EducationEmployment);
