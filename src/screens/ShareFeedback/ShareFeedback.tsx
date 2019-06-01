import React from "react";
import { Link } from "react-router-dom";

import "./ShareFeedback.scss";

import PersonRow from "components/shared/PersonRow";

import { USERS, currentUserId } from "store/users";
import * as S from "store/selectors";

const ShareFeedback: React.FC = () => {
  function renderButton(userId: number) {
    // We need to know if the user has been already filled out
    const isFilled = S.getAnswers(currentUserId, userId).length > 0;

    return (
      <div className="right">
        <Link to={`/teamfeedback?selected=${userId}`}>
          <button className={`button ${isFilled ? "button-normal" : ""}`}>
            {isFilled ? "View Submission" : "Fill Out"}
          </button>
        </Link>
      </div>
    );
  }

  function getUsers() {
    return USERS.filter(user => user.id !== currentUserId);
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
        {getUsers().map((user, index) => (
          <PersonRow key={index} user={user}>
            {renderButton(user.id)}
          </PersonRow>
        ))}
      </div>
    </div>
  );
};

export default ShareFeedback;
