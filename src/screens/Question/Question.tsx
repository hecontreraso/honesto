import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Question.scss";
import MultipleOptions from "components/question/MultipleOptions";
import RangeOptions from "components/question/RangeOptions";
import TextInput from "components/question/TextInput";
import Navigation from "components/question/Navigation";
import Stars from "components/question/Stars";

import { QUESTIONS } from "store/questions";

function Question() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState(null);

  function renderQuestion() {
    const question = QUESTIONS[currentQuestionIndex];
    switch (question.type) {
      case "MULTIPLE":
        return (
          <MultipleOptions options={question.options} setAnswer={setAnswer} />
        );
      case "RANGE":
        return <RangeOptions setAnswer={setAnswer} />;
      case "TEXT":
        return <TextInput setAnswer={setAnswer} />;
    }
  }

  function renderDescription() {
    if (question.description)
      return (
        <>
          <p className="description">{question.description}</p>
          <br />
        </>
      );
  }

  function nextQuestion(next: number) {
    setAnswer(null);
    if (next < QUESTIONS.length) setCurrentQuestionIndex(next);
    else window.location.replace("/share?finished=true");
  }

  const question = QUESTIONS[currentQuestionIndex];
  return (
    <div className="container question-component">
      <div className="hero hero-container">
        <Link className="text-small" to="/share">
          Back
        </Link>

        <br />
        <h1 className="title">{question.title}</h1>
        <h3 className="subtitle text-small">
          Share your feedback with Christopher Johnson
        </h3>
      </div>

      <div className="question-container">
        {renderDescription()}
        {renderQuestion()}
        <Navigation
          answer={answer}
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={nextQuestion}
        />

        <div>Progress</div>
        <div className="question-footer">
          <div className="left">
            <div className="label text-small">Questions completed</div>
            <div>
              {currentQuestionIndex + 1}/{QUESTIONS.length}
            </div>
          </div>
          <div className="right">
            <Stars />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
