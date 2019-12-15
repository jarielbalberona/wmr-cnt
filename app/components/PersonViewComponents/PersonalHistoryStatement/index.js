/**
 *
 * BackgroundUGM
 *
 */

import React, { memo } from 'react';
import './styles';

const Relatives = ({ data }) =>
  data.map((relative, key) => (
    // eslint-disable-next-line react/no-array-index-key
    <p key={key}>{`${relative.full_name} - ${relative.description}`}</p>
  ));

const Sibling = ({ title, data }) => {
  if (!data) {
    return '';
  }
  return (
    <>
      <div className="title is-4 has-text-weight-semibold main-title">
        {title}
      </div>
      {data &&
        data.map((sibling, key) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={key} className="columns body-content">
            <div className="column">
              <p>
                <span className="has-text-weight-semibold field-label">
                  Name:
                </span>
                {sibling.full_name || ''}
              </p>
              <p>
                <span className="has-text-weight-semibold field-label">
                  Age:
                </span>
                {sibling.age || ''}
              </p>
            </div>
            <div className="column">
              <p>
                <span className="has-text-weight-semibold field-label">
                  Address:
                </span>
                {sibling.address || ''}
              </p>
            </div>
            <br />
          </div>
        ))}
    </>
  );
};

const Parents = ({ title, data }) => (
  // eslint-disable-next-line no-undef
  <div>
    <div className="title is-4 has-text-weight-semibold main-title">
      {title}
    </div>
    <div className="columns body-content">
      <div className="column">
        <p>
          <span className="has-text-weight-semibold field-label">Name:</span>
          {data.full_name || ''}
          {!data.alive ? ' (Deceased)' : ''}
        </p>
        <div className={`${!data.alive ? 'is-hidden' : ''}`}>
          <p>
            <span className="has-text-weight-semibold field-label">Age:</span>
            {data.occuagepation || ''}
          </p>
          <p>
            <span className="has-text-weight-semibold field-label">
              Occupation:
            </span>
            {data.occupation || ''}
          </p>
        </div>
      </div>
      <div className={`column ${!data.alive ? 'is-hidden' : ''}`}>
        <p>
          <span className="has-text-weight-semibold field-label">
            Date of Birth:
          </span>
          {data.birth_date || ''}
        </p>
        <p>
          <span className="has-text-weight-semibold field-label">
            Place of Birth:
          </span>
          {data.birth_place || ''}
        </p>
        <p>
          <span className="has-text-weight-semibold field-label">
            Present Address:
          </span>
          {data.present_address || ''}
        </p>
      </div>
    </div>
  </div>
);

const PersonalHistoryStatement = ({ title, data, alias }) => (
  <div id="PersonalHistoryStatement">
    <div className="title is-4 has-text-weight-semibold main-title">
      {title}
    </div>
    {!data ? (
      <div>
        <div>No Data</div>
      </div>
    ) : (
      <>
        <div className="title is-5">A. Personal Data</div>
        <div className="columns body-content">
          <div className="column">
            <p>
              <span className="has-text-weight-semibold field-label">
                Name:
              </span>
              {`${data.personal_data.first_name} ${data.personal_data.middle_name} ${data.personal_data.last_name}`}
            </p>
            <p>
              <span className="has-text-weight-semibold field-label">
                Alias:
              </span>
              {alias}
            </p>
            <p>
              <span className="has-text-weight-semibold field-label">
                Date of Birth:
              </span>
              {data.personal_data.birth_date || ''}
            </p>
            <p>
              <span className="has-text-weight-semibold field-label">
                Place of Birth:
              </span>
              {data.personal_data.birth_place || ''}
            </p>
            <p>
              <span className="has-text-weight-semibold field-label">Age:</span>
              {data.personal_data.age || ''}
            </p>
            <p>
              <span className="has-text-weight-semibold field-label">
                Home Address:
              </span>
              {data.personal_data.address_home || ''}
            </p>
          </div>
          <div className="column">
            <p>
              <span className="has-text-weight-semibold field-label">
                Former Address:
              </span>
              {data.personal_data.address_former || ''}
            </p>
            <p>
              <span className="has-text-weight-semibold field-label">
                Tribe:
              </span>
              {data.personal_data.tribe || ''}
            </p>
            <p>
              <span className="has-text-weight-semibold field-label">
                Religion:
              </span>
              {data.personal_data.religion || ''}
            </p>
            <p>
              <span className="has-text-weight-semibold field-label">
                Marital Status:
              </span>
              {data.personal_data.marital_status || ''}
            </p>
            <p>
              <span className="has-text-weight-semibold field-label">
                Dialects:
              </span>
              {(data.personal_data.dialects &&
                data.personal_data.dialects.join(', ')) ||
                ''}
            </p>
          </div>
        </div>
        <div className="title is-5">B. Physical Description:</div>
        <div className="columns body-content">
          <div className="column">
            <p>
              <span className="has-text-weight-semibold field-label">
                Height:
              </span>
              {data.physical_description.height || ''}
            </p>
            <p>
              <span className="has-text-weight-semibold field-label">
                Weight:
              </span>
              {data.physical_description.weight || ''} kg
            </p>
            <p>
              <span className="has-text-weight-semibold field-label">
                Complexion:
              </span>
              {data.physical_description.complexion || ''}
            </p>
            <p>
              <span className="has-text-weight-semibold field-label">
                Identifying Mark:
              </span>
              {data.physical_description.identifying_mark || ''}
            </p>
          </div>
          <div className="column">
            <p>
              <span className="has-text-weight-semibold field-label">
                Eyes:
              </span>
              {data.physical_description.eyes || ''}
            </p>
            <p>
              <span className="has-text-weight-semibold field-label">
                Hair:
              </span>
              {data.physical_description.hair || ''}
            </p>
            <p>
              <span className="has-text-weight-semibold field-label">
                Build:
              </span>
              {data.physical_description.build || ''}
            </p>
          </div>
        </div>
        <div className="title is-5">C. Family Background:</div>
        <div className="columns body-content">
          <div className="column">
            <Parents title="Father" data={data.family_background.father} />
            <Parents title="Mother" data={data.family_background.mother} />
            <br />
            <Sibling title="Sibling/s" data={data.family_background.siblings} />
          </div>
        </div>
        <div className="title is-5">D. Educational attainment:</div>
        <div className="columns body-content">
          <div className="column">
            <p>
              <span className="has-text-weight-semibold field-label">
                Attainment:
              </span>
              {data.education.attainment || ''}
            </p>
            <p>
              <span className="has-text-weight-semibold field-label">
                School / Description:
              </span>
              {data.education.description || ''}
            </p>
          </div>
        </div>
        <div className="title is-5">
          E. Employment record before joining the UGM:
        </div>
        <div className="columns body-content paragraph">
          <div className="column">
            <p>{data.employment_before_ugm || ''}</p>
          </div>
        </div>
        <div className="title is-5">
          F. Relatives working in the government:
        </div>
        <div className="columns body-content">
          <div className="column">
            <Relatives data={data.relatives.government_working} />
          </div>
        </div>
        <div className="title is-5">
          G. Relatives affiliated with LCM organ:
        </div>
        <div className="columns body-content">
          <div className="column">
            <Relatives data={data.relatives.lcm_org} />
          </div>
        </div>
      </>
    )}
  </div>
);

export default memo(PersonalHistoryStatement);
