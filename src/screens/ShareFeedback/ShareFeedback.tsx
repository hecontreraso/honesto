import React from "react";
import "./ShareFeedback.scss";

import PersonRow from "components/shared/PersonRow";

const ShareFeedback: React.FC = () => {
  return (
    <div className="container share-feedback">
      <div className="level">
        <div className="level-left">
          <div className="hero-container">
            <h1 className="title">Share Feedback</h1>
          </div>
        </div>

        <div className="level-right">Feedback period</div>
      </div>

      <div className="list-container">
        <PersonRow />
        <PersonRow />
        <PersonRow />
      </div>
    </div>
  );
};

export default ShareFeedback;
