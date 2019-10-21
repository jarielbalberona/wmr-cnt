/**
 *
 * Admin
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import { withCookies } from 'react-cookie';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import PersonAdd from 'containers/PersonAdd/Loadable';
import PersonList from 'containers/PersonList/Loadable';

import PageTitle from 'components/PageTitle';
import Sidebar from 'components/Sidebar';

import { ADMIN } from 'constants/path';
import { logOut } from 'containers/App/actions';
import { makeSelectAdmin, makeSelectAdminSideMenu } from './selectors';
import reducer from './reducer';
import saga from './saga';

import './styles';

const routes = [
  {
    path: '/',
    exact: true,
    title: 'List',
    desc: 'List of added people.',
    main: PersonList,
  },
  {
    path: '/person-add',
    exact: true,
    title: 'Add Person',
    desc: 'Add new person record.',
    main: PersonAdd,
  },
  {
    path: '/person-edit/:id',
    exact: true,
    title: 'Edit Person',
    desc: "Update person's details.",
    main: PersonAdd,
  },
  {
    path: '/person-view/:id',
    exact: true,
    title: 'View Person',
    desc: "View person's full details.",
    main: () => <h1>Work on progress, view person.</h1>,
  },
];

const stateSelector = createStructuredSelector({
  admin: makeSelectAdmin(),
  side_expanded: makeSelectAdminSideMenu(),
});

function Admin(props) {
  const { match, cookies } = props;
  useInjectReducer({ key: 'admin', reducer });
  useInjectSaga({ key: 'admin', saga });

  const { side_expanded } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logOut());
    cookies.remove('token', { path: '/' });
  };
  return (
    <div id="Admin">
      <Router basename={ADMIN}>
        <Sidebar
          noOverlay
          open={side_expanded}
          customBurgerIcon={false}
          customCrossIcon={false}
          pageWrapId="Admin-content"
          outerContainerId="Admin"
          match={match}
          menuClassName={`bm-menu-wrap ${side_expanded ? 'expanded' : ''}`}
          logout={onLogout}
        />
        <div
          id="Admin-content"
          className={`bm-menu-wrap ${side_expanded ? 'expanded' : ''}`}
        >
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.

            <Route
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              path={route.path}
              exact={route.exact}
              component={() => (
                <PageTitle name={route.title} desc={route.desc} />
              )}
            />
          ))}
          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.

              <Route
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
            <Route path="" component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default compose(
  withCookies,
  withRouter,
)(Admin);
