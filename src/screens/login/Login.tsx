import React from "react";
import "./Login.scss";
import logo from "./logo.png";

const Login: React.FC = () => {
  return (
    <div className="login-component">
      <div className="form-container">
        <img src={logo} className="logo" alt="logo" />
        <span className="title is-4">Honesto</span>
        <hr className="divider" />
        <a className="button">Login with Google</a>
      </div>
    </div>
  );
};

export default Login;
