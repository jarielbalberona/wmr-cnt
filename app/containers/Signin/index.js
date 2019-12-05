/*
 * signin
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import FloatingLabel from 'floating-label-react';

// import brandLogo from '@images/wmr-cnt-logo.png';

import { makeSelectLoginForm, makeSelectLoginFormErrors } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { changeInput, login } from './actions';
import './styles';

const key = 'signin';

const stateSelector = createStructuredSelector({
  form: makeSelectLoginForm(),
  errors: makeSelectLoginFormErrors(),
});

export default function Signin() {
  const dispatch = useDispatch();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const onChangeInput = evt =>
    dispatch(changeInput(evt.target.name, evt.target.value));
  const onLogin = () => dispatch(login());

  const { form, errors } = useSelector(stateSelector);
  const { email, password } = form;
  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
  }, []);

  return (
    <section id="Signin" className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>WMR - CNT: Login</title>
        <link rel="canonical" href="" />
      </Helmet>
      <div className="columns">
        <div className="column is-three-fifths-desktop is-offset-one-fifth-desktop is-four-fifths-mobile is-offset-1-mobile">
          <div className="title is-4">Login</div>
          <div className="inputs">
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
          <div className="inputs">
            <FloatingLabel
              id="password"
              name="password"
              placeholder={errors.password.message || 'Password'}
              className={errors.password.message ? 'has-text-danger' : ''}
              type="password"
              value={password}
              onChange={onChangeInput}
            />
          </div>
          <div className="inputs">
            <button
              type="button"
              className="button is-medium is-fullwidth is-primary"
              onClick={onLogin}
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
