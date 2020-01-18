/**
 *
 * Organize
 *
 */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Select from 'react-select';

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

function Organize({ match }) {
  useInjectReducer({ key: 'organize', reducer });
  useInjectSaga({ key: 'organize', saga });

  const { data, loading } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onGetPerson = id => dispatch(getPerson(id));

  useEffect(() => {
    const { id } = match.params;
    if (id) {
      onGetPerson(id);
    } else {
      appNotify('error', 'Page error.');
    }
  }, []);

  console.log(data, loading);

  return (
    <section id="Organize">
      <div className="container is-fluid">
        <div className="columns">
          <div className="column is-two-fifths">
            <div className="title is-4">Organize Group</div>
            <Select
              isClearable
              placeholder="Group type"
              className="cx-create-select"
              classNamePrefix="cx"
              value=""
              options={[]}
              onChange={() => {}}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Organize;
