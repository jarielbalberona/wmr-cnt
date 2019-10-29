/**
 *
 * BackgroundUGM
 *
 */

import React, { memo } from 'react';
import Paragraph from '../Paragraph';
import './styles.scss';

const Disposition = ({ title, data }) => {
  if (!data) {
    return '';
  }
  return (
    <div id="Disposition">
      <div className="title is-4 has-text-weight-semibold main-title">
        {title}
      </div>
      <div className="table-container body-content">
        <table className="table is-fullwidth">
          <thead>
            <tr className="table-head">
              <th>MUN</th>
              <th>BRGY/CAT</th>
              <th>POSTING AREA</th>
              <th>IDENTIFIED CONTACT</th>
              <th>FLOW OF SUPPLIES</th>
              <th>CAA CONTACTS</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((disposition, key) => (
                // eslint-disable-next-line react/no-array-index-key
                <tr key={key}>
                  <td>{disposition.municipality}</td>
                  <td>{disposition.barangay}</td>
                  <td>{disposition.posting_area}</td>
                  <td>{disposition.identified_contact}</td>
                  <td>{disposition.supply_flow}</td>
                  <td>{disposition.caa_contacts}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Miscellaneous = ({ title, data }) => {
  if (!data) {
    return '';
  }
  return (
    <div id="Miscellaneous">
      <div className="title is-4 has-text-weight-semibold main-title">
        {title}
      </div>
      <div className="table-container body-content">
        <table className="table is-fullwidth">
          <thead>
            <tr className="table-head">
              <th>Name</th>
              <th>Unit</th>
              <th>Description</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((disposition, key) => (
                // eslint-disable-next-line react/no-array-index-key
                <tr key={key}>
                  <td>{disposition.name}</td>
                  <td>{disposition.unit}</td>
                  <td>{disposition.description}</td>
                  <td>{disposition.remarks}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const PSRFactors = ({ title, data }) => {
  if (!data) {
    return <div id="PSRFactors"></div>;
  }
  return (
    <div id="PSRFactors">
      <div className="title is-5 has-text-weight-bold main-title">{title}</div>
      <Paragraph title="A. Composition:" content={data.composition} />
      <Disposition title="B. Disposition:" data={data.dispositions} />
      <Paragraph title="C. Strengths:" content={data.strengths} />
      <Paragraph title="D. Tactics:" content={data.tactics} />
      <Paragraph title="E. Training:" content={data.trainings} />
      <Paragraph title="F. Logistics:" content={data.logistics} />
      <Paragraph title="G. Effectiveness:" content={data.effectiveness} />
      <Paragraph title="H. Plans:" content={data.plans} />
      <Miscellaneous title="I. Miscellaneous:" data={data.miscellaneous} />
    </div>
  );
};

export default memo(PSRFactors);
