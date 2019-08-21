/**
 *
 * Sidebar
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import Menu from 'react-burger-menu/lib/menus/push';

import brandLogo from '@images/wmr-cnt-logo.png';
import './styles';

export default function Sidebar(props) {
  return (
    // Pass on our props
    <div id="Sidebar">
      <Menu {...props}>
        <div>
          <div className="brand">
            <figure className="image is-64x64">
              <img src={brandLogo} alt="wmr-cnt logo" />
            </figure>
          </div>
          <div className={`nav-links ${props.open ? '' : 'center-icons'}`}>
            <Link className="menu-item has-text-white" to="/">
              <span className="icon is-medium">
                <i className="fas fa-home fa-lg"></i>
              </span>
              <p className={`${props.open ? '' : 'is-hidden'}`}>Dashboard</p>
            </Link>
            <Link className="menu-item has-text-white" to="/person-list">
              <span className="icon is-medium">
                <i className="fas fa-list fa-lg"></i>
              </span>
              <p className={`${props.open ? '' : 'is-hidden'}`}>List</p>
            </Link>
            <Link className="menu-item has-text-white" to="/person-add">
              <span className="icon is-medium">
                <i className="fas fa-user-plus fa-lg"></i>
              </span>
              <p className={`${props.open ? '' : 'is-hidden'}`}>Add</p>
            </Link>
          </div>
        </div>
        <div className="">
          <button
            type="button"
            className="button is-primary"
            onClick={props.logout}
          >
            Logout
          </button>
        </div>
      </Menu>
    </div>
  );
}
