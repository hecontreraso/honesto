import React from "react";
import "./Answer.scss";
import { IAnswer } from "types/types";
import * as S from "store/selectors";

interface Props {
  answer: IAnswer;
}
function Answer({ answer }: Props) {
  // Get question
  const question = S.getQuestionById(answer.questionId);

  if (!question) return null;

  function renderRange(size: number) {
    if (!question) return;

    const getColor = () => {
      if (answer.option === undefined) return;

      const percentage = (answer.option + 1) / size;
      let colorClass;
      if (percentage < 0.25) colorClass = "very-low";
      else if (percentage < 0.5) colorClass = "low";
      else if (percentage < 0.75) colorClass = "medium";
      else colorClass = "full";
      return colorClass;
    };

    const option = answer.option || 0;

    const dataTooltip = (index: number) => {
      if (!question.options) return;
      return question.options[index];
    };

    return (
      <div className="range-container">
        {[...Array(size)].map((_, index) => (
          <div
            className={`step ${
              question.type === "MULTIPLE" ? "tooltip is-tooltip-multiline" : ""
            } ${index <= option ? getColor() : ""}`}
            data-tooltip={dataTooltip(index)}
            key={index}
          />
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
