/**
 *
 * Dashboard
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

import makeSelectDashboard from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import './styles';

const stateSelector = createStructuredSelector({
  dashboard: makeSelectDashboard(),
});

function Dashboard() {
  useInjectReducer({ key: 'dashboard', reducer });
  useInjectSaga({ key: 'dashboard', saga });

  /* eslint-disable no-unused-vars */
  const { dashboard } = useSelector(stateSelector);
  const dispatch = useDispatch();

  return (
    <div id="Dashboard" className="dashboard">
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Description of Dashboard" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export default Dashboard;
