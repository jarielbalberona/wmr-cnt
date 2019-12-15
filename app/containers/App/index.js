/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { withCookies } from 'react-cookie';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { compose } from 'redux';

import Navbar from 'components/Navbar';

import HomeLogin from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Signup from 'containers/Signup/Loadable';
import Signin from 'containers/Signin/Loadable';
import PersonAdd from 'containers/PersonAdd/Loadable';
import PersonList from 'containers/PersonList/Loadable';
import PersonView from 'containers/PersonView/Loadable';
import Parameters from 'containers/Parameters/Loadable';

import { makeSelectAppToken } from './selectors';
import { loadUserSession, logOut } from './actions';

const stateSelector = createStructuredSelector({
  token: makeSelectAppToken(),
});

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

  const onLogout = () => {
    dispatch(logOut());
    cookies.remove('token', { path: '/' });
  };

  return (
    <>
      <Navbar token={token} onLogout={onLogout} />
      <>
        <Switch>
          <Route exact path="/" component={HomeLogin} />
          <Route path="/register" component={Signup} />
          <Route path="/login" component={Signin} />
          <Route path="/admin/person-list" component={PersonList} />
          <Route path="/admin/person-add" component={PersonAdd} />
          <Route path="/admin/person-view/:id" component={PersonView} />
          <Route path="/admin/person-edit/:id" component={PersonAdd} />
          <Route path="/admin/parameters" component={Parameters} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <ToastContainer />
      </>
    </>
  );
}

export default compose(
  withRouter,
  withCookies,
)(App);
