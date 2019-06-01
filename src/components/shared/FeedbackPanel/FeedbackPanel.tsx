import React, { useState, useEffect } from "react";

import "./FeedbackPanel.scss";

import Answer from "components/myfeedback/Answer";
import PersonRow from "components/shared/PersonRow";

import * as S from "store/selectors";
import { currentUserId } from "store/users";
import { IUser, IAnswer } from "types/types";

interface Props {
  users: IUser[];
  sent: boolean;
  selected: string | null;
}
function FeedbackPanel(props: Props) {
  const [selectedPersonId, setSelectedPersonId] = useState(-1);

  /**
   * If a "selected" param is received in URL, select that user in component
   */
  useEffect(() => {
    if (props.selected) {
      const id = parseInt(props.selected);
      if (id !== NaN) {
        setSelectedPersonId(id);
      }
    }
  }, [props.selected]);

  function getAnswers() {
    let senderId, receiverId;
    if (props.sent) {
      senderId = currentUserId;
      receiverId = selectedPersonId;
    } else {
      senderId = selectedPersonId;
      receiverId = currentUserId;
    }
    return S.getAnswers(senderId, receiverId);
  }

  return (
    <div className="container feedback-panel-component">
      <div className="level">
        <div className="level-left">
          <div className="hero-container">
            <h1 className="title">{props.sent ? "Team" : "My"} Feedback</h1>
          </div>
        </div>

        <div className="level-right">Feedback period</div>
      </div>

      <div className="subcontainer">
        <div className="left-section">
          <div className="column-header">
            <span>Feedback {props.sent ? "sent" : "received"}</span>
          </div>
          {props.users.map((user, index) => (
            <div onClick={() => setSelectedPersonId(user.id)} key={index}>
              <PersonRow selected={user.id === selectedPersonId} user={user} />
            </div>
          ))}
        </div>
        <div className="right-section">
          {/* <div className="column-header">
            <span>Chris Trott’s Feedback</span>
          </div> */}
          <div className="column-content">
            {getAnswers().map((answer: IAnswer, index: number) => (
              <Answer answer={answer} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackPanel;
