/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { compose } from 'redux';
import { withCookies } from 'react-cookie';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import FloatingLabel from 'floating-label-react';

import brandLogo from '@images/wmr-cnt-logo.png';

import { makeSelectAppToken } from 'containers/App/selectors';

import { makeSelectHome, makeSelectLoginFormErrors } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { changeInput, checkAuth, login } from './actions';
import './styles';

const key = 'home';

const stateSelector = createStructuredSelector({
  home: makeSelectHome(),
  errors: makeSelectLoginFormErrors(),
  token: makeSelectAppToken(),
});

// eslint-disable-next-line react/prop-types
function HomePage() {
  const dispatch = useDispatch();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const onChangeInput = evt =>
    dispatch(changeInput(evt.target.name, evt.target.value));
  const onLogin = () => dispatch(login());
  const onCheckAuth = () => dispatch(checkAuth());

  const { home, errors, token } = useSelector(stateSelector);
  const { email, password } = home.form;
  useEffect(() => {
    onCheckAuth();
  }, []);

  return (
    <article>
      <Helmet>
        <meta charSet="utf-8" />
        <title>WMR - CNT</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <section id="Homepage" className="hero is-fullheight">
        <div className="container branding is-fluid">
          <div className="columns reverse-row-order">
            <div
              className={`${
                token ? 'is-fluid' : 'is-two-thirds'
              } column has-background-danger`}
            >
              <figure className="image is-64x64">
                <img src={brandLogo} alt="wmr-cnt logo" />
                <figcaption className="has-text-centered">
                  <p className="title is-1">WMR-CNT</p>
                  <p className="subtitle is-3">Profiling System</p>
                  <div className={token ? '' : 'is-hidden'}>
                    <Link to="/admin">
                      <button type="button" className="button is-white">
                        <p className="has-text-primary">Go to dashboard</p>
                      </button>
                    </Link>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className={`${token ? 'is-hidden' : 'column signin'}`}>
              <div className="container">
                <div className="inputs">
                  <div className="container">
                    <div className="title is-3">Sign in</div>
                    <FloatingLabel
                      id="email"
                      name="email"
                      placeholder={errors.email.message || 'Email'}
                      className={errors.email.message ? 'has-text-danger' : ''}
                      type="email"
                      value={email}
                      onChange={onChangeInput}
                    />
                  </div>
                  <div className="container">
                    <FloatingLabel
                      id="password"
                      name="password"
                      placeholder={errors.password.message || 'Password'}
                      className={
                        errors.password.message ? 'has-text-danger' : ''
                      }
                      type="password"
                      value={password}
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
                <div className="container">
                  <button
                    type="button"
                    className="button is-medium is-fullwidth is-primary"
                    onClick={onLogin}
                  >
                    Ok
                  </button>
                </div>
                <div className="container">
                  <Link to="/signup">
                    <p>Signup</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

export default compose(
  withRouter,
  withCookies,
)(HomePage);
