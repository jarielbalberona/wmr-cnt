/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withCookies } from 'react-cookie';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import brandLogo from '@images/wmr-cnt-logo.png';

import reducer from './reducer';
import saga from './saga';
import { checkAuth } from './actions';
import './styles';

const key = 'home';

// eslint-disable-next-line react/prop-types

function HomePage() {
  const dispatch = useDispatch();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const onCheckAuth = () => dispatch(checkAuth());
  useEffect(() => {
    onCheckAuth();
  }, []);

  return (
    <section id="Homepage" className="has-background-primary">
      <Helmet>
        <meta charSet="utf-8" />
        <title>WMR - CNT</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container">
        <figure className="image is-64x64">
          <img src={brandLogo} alt="wmr-cnt logo" />
          <figcaption className="has-text-centered">
            <p className="title is-1">WMR-CNT</p>
            <p className="subtitle is-2">Profiling System</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default compose(
  withRouter,
  withCookies,
)(HomePage);
