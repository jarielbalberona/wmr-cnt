import React from 'react';
import { Link } from 'react-router-dom';
import './styles';

const NavbarBurger = props => (
  // eslint-disable-next-line jsx-a11y/interactive-supports-focus
  <a
    role="button"
    onClick={props.toggleMenu}
    className={`navbar-burger ${props.active ? 'is-active' : ''}`}
    aria-label="menu"
    aria-expanded="false"
    data-target="navbarBasicExample"
  >
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a>
);

const Navbar = ({ token, onLogout }) => {
  const [active_menu, setActiveMeniu] = React.useState(false);

  const toggleMenu = state => {
    setActiveMeniu(state);
  };

  return (
    <nav id="Navbar" className="navbar is-primary">
      <div className="navbar-brand">
        <Link onClick={() => toggleMenu(false)} className="navbar-item" to="/">
          <div className="title is-5">WMR-CNT</div>
        </Link>
        <NavbarBurger
          active={active_menu}
          toggleMenu={() => toggleMenu(!active_menu)}
        />
      </div>
      <div className={`navbar-menu ${active_menu ? 'is-active' : ''}`}>
        {token ? (
          <div className="navbar-start">
            <Link
              onClick={() => toggleMenu(false)}
              className="navbar-item"
              to="/admin/person-list"
            >
              List
            </Link>
            <Link
              onClick={() => toggleMenu(false)}
              className="navbar-item"
              to="/admin/person-add"
            >
              Add Person
            </Link>
            <Link
              onClick={() => toggleMenu(false)}
              className="navbar-item"
              to="/admin/parameters"
            >
              Parameters
            </Link>
          </div>
        ) : (
          ''
        )}
        {!token ? (
          <div className="navbar-end">
            <Link
              onClick={() => toggleMenu(false)}
              className="navbar-item"
              to="/register"
            >
              Register
            </Link>
            <Link
              onClick={() => toggleMenu(false)}
              className="navbar-item"
              to="/login"
            >
              Login
            </Link>
          </div>
        ) : (
          <div className="navbar-end">
            <Link onClick={onLogout} className="navbar-item" to="">
              Logout
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
