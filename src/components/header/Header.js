import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <ul className="nav_list">
        <li className="nav_item">
          <NavLink
            to="/"
            exact
            className="nav_btn"
            activeClassName="nav_btn_active"
          >
            HOME
          </NavLink>
        </li>
        <li className="nav_item">
          <NavLink
            to="/movies"
            className="nav_btn"
            activeClassName="nav_btn_active"
          >
            MOVIES
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Header;
