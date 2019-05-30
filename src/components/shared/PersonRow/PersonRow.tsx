import React from "react";

import image from "./person-image.png";
import "./PersonRow.scss";

const PersonRow: React.FC = () => {
  return (
    <div className="person-row">
      <div className="left">
        <img src={image} alt="person" className="image" />
        <span>Chris Johnson</span>
      </div>

      <div className="right">
        <a className="button">Fill Out</a>
      </div>
    </div>
  );
};

export default PersonRow;
