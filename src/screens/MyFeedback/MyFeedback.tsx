import React, { useState } from "react";
import "./MyFeedback.scss";

import Answer from "components/myfeedback/Answer";
import PersonRow from "components/shared/PersonRow";

import { USERS } from "store/users";

const MyFeedback: React.FC = () => {
  const [selectedPerson, setSelectedPerson] = useState(-1);

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
          {USERS.map((user, index) => (
            <div onClick={() => setSelectedPerson(index)}>
              <PersonRow selected={index == selectedPerson} user={user} />
            </div>
          ))}
        </div>
        <div className="right-section">
          <div className="column-header">
            <span>Chris Trott’s Feedback</span>
          </div>
          <Answer />
          <Answer />
          <Answer />
        </div>
      </div>
    </div>
  );
};

export default MyFeedback;
