/**
 *
 * PersonView
 *
 */

import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ReactToPrint from 'react-to-print';

import BackgroundUGM from 'components/PersonViewComponents/BackgroundUGM';
import Neutralization from 'components/PersonViewComponents/Neutralization';
import Paragraph from 'components/PersonViewComponents/Paragraph';
import PersonalHistoryStatement from 'components/PersonViewComponents/PersonalHistoryStatement';
import SignificantInvolvement from 'components/PersonViewComponents/SignificantInvolvement';
import PSRFactors from 'components/PersonViewComponents/PSRFactors';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { appNotify } from '../App/actions';
import { getPerson } from './actions';
import { makeSelectPerson, makeSelectPersonLoading } from './selectors';
import reducer from './reducer';
import saga from './saga';

import './styles';

const stateSelector = createStructuredSelector({
  data: makeSelectPerson(),
  loading: makeSelectPersonLoading(),
});

function PersonView({ match }) {
  useInjectReducer({ key: 'personView', reducer });
  useInjectSaga({ key: 'personView', saga });

  const { data, loading } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onGetPerson = id => dispatch(getPerson(id));

  const componentRef = useRef();

  useEffect(() => {
    const { id } = match.params;
    if (id) {
      onGetPerson(id);
    } else {
      appNotify('error', 'Page error.');
    }
  }, []);

  if (loading) {
    return (
      <section id="PersonView">
        <div className="container is-fluid">Loading...</div>
      </section>
    );
  }

  return (
    <section id="PersonView">
      <Helmet>
        <title>
          {data ? `${data.alias_nickname} - ${data.full_name}` : ''}
        </title>
        <meta name="description" content="Description of Person View" />
      </Helmet>
      <div className="container is-fluid">
        <ReactToPrint
          pageStyle
          trigger={() => (
            <button type="button" className="button is-primary is-pulled-right">
              Print / Download
            </button>
          )}
          content={() => componentRef.current}
        />
        <div className="print-body" ref={componentRef}>
          <PersonalHistoryStatement
            title="I. PERSONAL HISTORY STATEMENT:"
            alias={data.alias_nickname}
            data={data.personal_history_statement}
          />
          <Neutralization
            title="II. CIRCUMSTANCES OF NEUTRALIZATION:"
            alias={data.alias_nickname}
            data={data.neutralization}
          />
          <BackgroundUGM
            title="III. BACKGROUND OF ENTRY INTO THE UGM:"
            data={data.ugm_entry_background}
          />
          <SignificantInvolvement
            title="IV. SIGNIFICANT INVOLVEMENT/ACTIVITIES/ACHIEVEMENTS OF SUBJECT IN THE UGM:"
            data={data.ugm_involvement}
          />
          <PSRFactors
            title="V ORDER OF PSR FACTORS:"
            data={data.battle_factors}
          />
          <br />
          <Paragraph
            title="VI. REMARKS:"
            content={data.comments}
            type="title"
          />
        </div>
      </div>
    </section>
  );
}

export default PersonView;
