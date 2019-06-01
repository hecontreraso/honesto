import React from "react";

import "./MyFeedback.scss";

import FeedbackPanel from "components/shared/FeedbackPanel";

import { currentUserId } from "store/users";
import * as S from "store/selectors";

const MyFeedback: React.FC = () => {
  // Let's get the list of users who gave me feedback.
  // Once networking is implemented, this probably would be easily done with an API call, filtering in backend
  // I'm asumming that logged-in user is the one with id = 1
  const users = S.getSenders(currentUserId);

  if (users.length === 0)
    return (
      <div className="container my-feedback-component">
        <div className="hero-container">
          <h1 className="title">No feedback to display 🔮</h1>
          <span>
            There is no feedback to display at this time – check back in a bit!
          </span>
        </div>
      </div>
    );

  return <FeedbackPanel users={users} />;
};

export default MyFeedback;
