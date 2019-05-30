import React from "react";
import "./NavBar.scss";

import UserItem from "./UserItem";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <span className="logo">Honesto</span>
        </a>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Share feedback</a>
          <a className="navbar-item">My feedback</a>
          <a className="navbar-item">Team feedback</a>
          <a className="navbar-item">Teams</a>
        </div>

        <div className="navbar-end">
          <UserItem />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
