import React, { useState } from "react";

import "./FeedbackPanel.scss";

import Answer from "components/myfeedback/Answer";
import PersonRow from "components/shared/PersonRow";

import { currentUserId } from "store/users";
import * as S from "store/selectors";
import { IUser } from "types/types";

interface Props {
  users: IUser[];
}
const FeedbackPanel: React.FC<Props> = props => {
  const [selectedPersonId, setSelectedPersonId] = useState(-1);

  function getAnswers() {
    return S.getReceivedAnswers(currentUserId, selectedPersonId);
  }

  return (
    <div className="container my-feedback-component">
      <div className="level">
        <div className="level-left">
          <div className="hero-container">
            <h1 className="title">My Feedback</h1>
          </div>
        </div>

        <div className="level-right">Feedback period</div>
      </div>

      <div className="subcontainer">
        <div className="left-section">
          <div className="column-header">
            <span>Feedback received</span>
          </div>
          {props.users.map((user, index) => (
            <div onClick={() => setSelectedPersonId(user.id)} key={index}>
              <PersonRow selected={user.id === selectedPersonId} user={user} />
            </div>
          ))}
        </div>
        <div className="right-section">
          <div className="column-header">
            <span>Chris Trott’s Feedback</span>
          </div>
          <div className="column-content">
            {getAnswers().map((answer, index) => (
              <Answer answer={answer} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPanel;
