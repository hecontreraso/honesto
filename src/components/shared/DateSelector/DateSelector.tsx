import React from "react";

import "./DateSelector.scss";

function DateSelector() {
  return (
    <div className="date-selector-component">
      <span className="text-small">Feedback period</span>
      <div className="select">
        <select>
          <option>October 2018</option>
          <option>November 2018</option>
        </select>
      </div>
    </div>
  );
}

export default DateSelector;
