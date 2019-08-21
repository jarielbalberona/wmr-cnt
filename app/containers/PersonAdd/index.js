/**
 *
 * PersonAdd
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
import makeSelectPersonAdd from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const stateSelector = createStructuredSelector({
  personAdd: makeSelectPersonAdd(),
});

function PersonAdd() {
  useInjectReducer({ key: 'personAdd', reducer });
  useInjectSaga({ key: 'personAdd', saga });

  /* eslint-disable no-unused-vars */
  const { personAdd } = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */

  return (
    <div>
      <Helmet>
        <title>PersonAdd</title>
        <meta name="description" content="Description of PersonAdd" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

PersonAdd.propTypes = {};

export default PersonAdd;
