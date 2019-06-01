import React from "react";
import { RouteComponentProps } from "react-router-dom";

import "./MyFeedback.scss";

import FeedbackPanel from "components/shared/FeedbackPanel";

import { currentUserId } from "store/users";
import * as S from "store/selectors";

interface Props extends RouteComponentProps {}
function MyFeedback({ location }: Props) {
  // Let's get the list of users who gave me feedback.
  // Once networking is implemented, this probably would be easily done with an API call, filtering in backend
  const users = S.getSenders(currentUserId);
  if (users.length === 0)
    return (
      <div className="container my-feedback-component">
        <div className="hero-container">
          <h1 className="title">
            No feedback to display
            <span role="img" aria-label="crystal-ball">
              🔮
            </span>
          </h1>
          <span>
            There is no feedback to display at this time – check back in a bit!
          </span>
        </div>
      </div>
    );

  let params = new URLSearchParams(location.search);
  return (
    <FeedbackPanel
      users={users}
      sent={false}
      selected={params.get("selected")}
    />
  );
}

export default MyFeedback;
