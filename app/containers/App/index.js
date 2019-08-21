/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { useEffect } from 'react';
import { Switch, Redirect, Route, withRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { withCookies } from 'react-cookie';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { compose } from 'redux';

import Admin from 'containers/Admin/Loadable';

import HomeLogin from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Signup from 'containers/Signup/Loadable';

import { ADMIN } from 'constants/path';

import { makeSelectAppToken } from './selectors';
import { loadUserSession } from './actions';

const stateSelector = createStructuredSelector({
  token: makeSelectAppToken(),
});

function PrivateRoute({ authenticated, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        // eslint-disable-next-line no-extra-boolean-cast
        !!authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              forceReloaad: true,
              pathname: '/',
            }}
          />
        )
      }
    />
  );
}

function App({ cookies }) {
  const dispatch = useDispatch();
  const { token } = useSelector(stateSelector);

  const onLoadUserSession = cookie_token =>
    dispatch(loadUserSession(cookie_token));

  useEffect(() => {
    const cookie_token = cookies.get('token');
    if (cookie_token) {
      onLoadUserSession(cookie_token);
    }
  }, []);

  useEffect(() => {
    if (token) {
      cookies.set('token', token, { path: '/' });
      onLoadUserSession(token);
    }
  }, [token]);
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomeLogin} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute
          path={ADMIN}
          component={Admin}
          authenticated={cookies.get('token')}
        />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <ToastContainer />
    </div>
  );
}

export default compose(
  withRouter,
  withCookies,
)(App);
