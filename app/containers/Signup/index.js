/*
 * Signup
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import FloatingLabel from 'floating-label-react';

// import brandLogo from '@images/wmr-cnt-logo.png';

import { makeSelectSignupForm, makeSelectSignupFormErrors } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { changeInput, signUp } from './actions';
import './styles';

const key = 'signup';

const stateSelector = createStructuredSelector({
  form: makeSelectSignupForm(),
  errors: makeSelectSignupFormErrors(),
});

export default function Signup() {
  const dispatch = useDispatch();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const onChangeInput = evt =>
    dispatch(changeInput(evt.target.name, evt.target.value));
  const onSignUp = () => dispatch(signUp());

  const { form, errors } = useSelector(stateSelector);
  const { first_name, last_name, email, password } = form;
  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
  }, []);

  return (
    <article>
      <Helmet>
        <meta charSet="utf-8" />
        <title>WMR - CNT</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <section id="Signup">
        <div className="container signup">
          <div className="container form">
            <div className="container">
              <div className="title is-3">Sign up</div>
            </div>
            <div className="container inputs-container">
              <div className="inputs">
                <div className="">
                  <FloatingLabel
                    id="first_name"
                    name="first_name"
                    placeholder={errors.first_name.message || 'First name'}
                    className={
                      errors.first_name.message ? 'has-text-danger' : ''
                    }
                    type="text"
                    value={first_name}
                    onChange={onChangeInput}
                  />
                </div>
                <div className="">
                  <FloatingLabel
                    id="last_name"
                    name="last_name"
                    placeholder={errors.last_name.message || 'Last name'}
                    className={
                      errors.last_name.message ? 'has-text-danger' : ''
                    }
                    type="text"
                    value={last_name}
                    onChange={onChangeInput}
                  />
                </div>
              </div>
              <div className="inputs">
                <div className="">
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
                <div className="">
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
              </div>
              <button
                type="button"
                className="button is-medium is-fullwidth is-primary"
                onClick={onSignUp}
              >
                Ok
              </button>
              <Link to="/">Sign in</Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
