import React from "react";
import "./CycleInfo.scss";

const NextFeedback: React.FC = () => {
  return (
    <div className="navbar-item cycle-info">
      <span className="top">Next Feedback Cycle:</span>
      <span className="bottom">
        Sept 2018 –<span className="emphasis">4 days</span>
      </span>
    </div>
  );
};

export default NextFeedback;
