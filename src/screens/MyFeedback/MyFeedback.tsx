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

  return <FeedbackPanel users={users} />;
};

export default MyFeedback;
