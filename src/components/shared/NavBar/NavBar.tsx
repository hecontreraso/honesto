import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.scss";
import CycleInfo from "./CycleInfo";
import UserItem from "./UserItem";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
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
            href="#"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start navbar-links">
            <Link className="navbar-item" to="/share">
              Share Feedback
            </Link>
            <Link className="navbar-item" to="/myfeedback">
              My Feedback
            </Link>
            <Link className="navbar-item" to="/teamfeedback">
              Team Feedback
            </Link>
            <Link className="navbar-item" to="/myfeedback">
              Teams
            </Link>
          </div>

          <div className="navbar-end">
            <CycleInfo />
            <UserItem />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
