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

import Dashboard from 'containers/Dashboard/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import PersonAdd from 'containers/PersonAdd/Loadable';
import PersonList from 'containers/PersonList/Loadable';

import PageTitle from 'components/PageTitle';
import Sidebar from 'components/Sidebar';

import { ADMIN } from 'constants/path';
import { logOut } from 'containers/App/actions';
import { toggleSidebar } from './actions';
import { makeSelectAdmin, makeSelectAdminSideMenu } from './selectors';
import reducer from './reducer';
import saga from './saga';

import './styles';

const routes = [
  {
    path: '/',
    exact: true,
    title: 'Dashboard',
    desc: 'Dashboard page description.',
    main: Dashboard,
  },
  {
    path: '/person-list',
    exact: false,
    title: 'List',
    desc: 'List page description.',
    main: PersonList,
  },
  {
    path: '/person-add',
    exact: false,
    title: 'Add Person',
    desc: 'Add person page description.',
    main: PersonAdd,
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
  const onToggleSidebar = () => dispatch(toggleSidebar());
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
                <PageTitle
                  expanded={side_expanded}
                  toggleSideBar={onToggleSidebar}
                  name={route.title}
                  desc={route.desc}
                />
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
