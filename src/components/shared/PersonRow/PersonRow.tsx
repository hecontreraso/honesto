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
        <button className="button">Fill Out</button>
      </div>
    </div>
  );
};

export default PersonRow;
