import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Link } from "react-router-dom";

import "./ShareFeedback.scss";

import DateSelector from "components/shared/DateSelector";
import PersonRow from "components/shared/PersonRow";

import { USERS, currentUserId } from "store/users";
import * as S from "store/selectors";

interface Props extends RouteComponentProps {}
function ShareFeedback({ location }: Props) {
  function renderButton(userId: number) {
    // We need to know if the user has been already filled out
    const isFilled = S.getAnswers(currentUserId, userId).length > 0;
    const linkUrl = isFilled ? `/teamfeedback?selected=${userId}` : "question";

    return (
      <div className="right">
        <Link to={linkUrl}>
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

  function renderHeader() {
    const params = new URLSearchParams(location.search);
    const finished = params.get("finished");

    return (
      <>
        <div className="level-left">
          <div className="hero-container">
            <h1 className="title">
              {finished
                ? "Thank you for sharing your feedback!"
                : "Share Feedback"}
            </h1>
            {finished && (
              <h3>Continue to give feedback to other team members.</h3>
            )}
          </div>
        </div>

        {!finished && (
          <div className="level-right">
            <DateSelector />
          </div>
        )}
      </>
    );
  }

  return (
    <div className="container share-feedback">
      <div className="level header-container">{renderHeader()}</div>

      <div className="list-container">
        {getUsers().map((user, index) => (
          <PersonRow key={index} user={user}>
            {renderButton(user.id)}
          </PersonRow>
        ))}
      </div>
    </div>
  );
}

export default ShareFeedback;
