import React from "react";

import "./Navigation.scss";

interface Props {
  answer: string | null;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: Function;
}
function Navigation(props: Props) {
  const { answer, currentQuestionIndex, setCurrentQuestionIndex } = props;

  function onPreviousPressed() {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  }

  function onSkipPressed() {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  function onNextPressed() {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  return (
    <div className="navigation">
      <button
        className={`button ${currentQuestionIndex !== 0 && "button-normal"}`}
        disabled={currentQuestionIndex === 0}
        onClick={onPreviousPressed}
      >
        Previous
      </button>
      <button className="button button-normal" onClick={onSkipPressed}>
        Skip
      </button>
      <button
        className={`button ${answer && "button-normal"}`}
        disabled={!answer}
        onClick={onNextPressed}
      >
        Next
      </button>
    </div>
  );
}

export default Navigation;
