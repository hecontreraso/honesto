import React, { useState } from "react";

import "./Question.scss";
import MultipleOptions from "components/MultipleOptions";
import RangeOptions from "components/RangeOptions";

import { QUESTIONS } from "store/questions";

function Question() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isNextDisabled, setNextDisabled] = useState(true);

  function renderQuestion() {
    const question = QUESTIONS[currentQuestionIndex];
    switch (question.type) {
      case "MULTIPLE":
        return <MultipleOptions question={question} />;
      case "RANGE":
        return <RangeOptions question={question} />;
      case "TEXT":
        break;
    }
  }

  const question = QUESTIONS[currentQuestionIndex];
  return (
    <div className="container question-component">
      <div className="hero hero-container">
        <span className="text-small">Back</span>
        <br />
        <h1 className="title">{question.title}</h1>
        <h3 className="subtitle text-small">
          Share your feedback with Christopher Johnson
        </h3>
      </div>

      <div className="question-container">
        {renderQuestion()}
        <div className="navigation">
          <button className="button button-normal">Previous</button>
          <button className="button button-normal">Skip</button>
          <button className="button" disabled>
            Next
          </button>
        </div>
        <div>Progress</div>
        <div className="question-footer">
          <div className="left">
            <div className="label text-small">Questions completed</div>
            <div>
              {currentQuestionIndex + 1}/{QUESTIONS.length}
            </div>
          </div>
          <div className="right">
            <div>Stars</div>
            <div>flag</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
