import React, { useState } from "react";
import "./Answer.scss";
import { IAnswer } from "types/types";
import * as S from "store/selectors";

interface Props {
  answer: IAnswer;
}
function Answer({ answer }: Props) {
  //   const [selectedPerson, setSelectedPerson] = useState(-1);

  // Get question
  const question = S.getQuestionById(answer.questionId);

  if (!question) return null;

  function renderRange(size: Number) {
    return (
      <div className="range-container">
        {[...Array(size)].map((_, index) => (
          <div className="step" key={index} />
        ))}
      </div>
    );
  }

  function renderFigure() {
    if (!question) return;

    switch (question.type) {
      case "MULTIPLE":
        if (!question.options) return;
        return renderRange(question.options.length);
      case "RANGE":
        return renderRange(10);
      case "TEXT":
        return (
          <>
            <br />
            <p>{answer.answer}</p>
          </>
        );
    }

    // if type === 'multiple'
    // rangeSize = question.options.size
    // else if type === 'range'
    // rangeSize = 10
  }

  return (
    <div
      className={`answer-component ${
        question.type === "TEXT" ? "answer-component-column" : ""
      }`}
    >
      <div className="answer-title">
        <p>
          How well did this person do X thing last month Lorem ipsum dolor sit
          amet Lorem ipsum dolor?
        </p>
      </div>
      <div className="answer">{renderFigure()}</div>
    </div>
  );
}

export default Answer;
