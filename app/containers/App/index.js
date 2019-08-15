/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import HomeLogin from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Signup from 'containers/Signup/Loadable';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomeLogin} />
        <Route exact path="/signup" component={Signup} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <ToastContainer />
    </div>
  );
}
