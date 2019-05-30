import React from "react";
import "./Login.scss";
import logo from "./logo.png";

import Button from "components/shared/Button";

const Login: React.FC = () => {
  return (
    <div className="login-component">
      <div className="form-container">
        <img src={logo} className="logo" />
        <span>Honesto</span>
        rayita
        <Button label="Login with Google" />
        <a className="button">Login with Google</a>
      </div>
    </div>
  );
};

export default Login;
