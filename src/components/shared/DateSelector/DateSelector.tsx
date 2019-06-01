import React from "react";

import "./DateSelector.scss";

function DateSelector() {
  return (
    <div className="date-selector-component">
      <span className="text-small">Feedback period</span>
      <div>
        <div className="select">
          <select>
            <option>October 2018</option>
            <option>November 2018</option>
          </select>
        </div>
        <button className="button">Publish Feedback</button>
      </div>
    </div>
  );
}

export default DateSelector;
