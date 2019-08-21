/**
 *
 * PersonList
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectPersonList from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import './styles';

const stateSelector = createStructuredSelector({
  personList: makeSelectPersonList(),
});

function PersonList() {
  useInjectReducer({ key: 'personList', reducer });
  useInjectSaga({ key: 'personList', saga });

  /* eslint-disable no-unused-vars */
  const { personList } = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */

  return (
    <div>
      <Helmet>
        <title>PersonList</title>
        <meta name="description" content="Description of PersonList" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

PersonList.propTypes = {};

export default PersonList;
