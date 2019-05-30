import React from "react";
import "./Button.scss";

type Props = {
  label: string;
};
const Button: React.FC<Props> = props => {
  return <a className="button bg-honesto">{props.label}</a>;
};

export default Button;
