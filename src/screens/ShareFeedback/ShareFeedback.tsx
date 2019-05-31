import React from "react";
import "./ShareFeedback.scss";

import PersonRow from "components/shared/PersonRow";

import { USERS } from "store/users";

const ShareFeedback: React.FC = () => {
  function renderButton() {
    return (
      <div className="right">
        <button className="button">Fill Out</button>
      </div>
    );
  }

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
        {USERS.map(user => (
          <PersonRow user={user}>{renderButton()}</PersonRow>
        ))}
      </div>
    </div>
  );
};

export default ShareFeedback;
