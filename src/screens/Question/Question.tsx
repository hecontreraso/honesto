import React from "react";
import "./Question.scss";

const Question: React.FC = () => {
  return (
    <div className="container question-component">
      <div className="hero hero-container">
        <h1 className="title">How well did I display courage?</h1>
        <h3 className="subtitle">
          Share your feedback with Christopher Johnson
        </h3>
      </div>

      <div className="question-container">
        <div>Questions</div>
        <div>Navigation</div>
        <div>Progress</div>
        <div className="level">
          <div>Footer</div>
          <div>Footer</div>
        </div>
      </div>
    </div>
  );
};

export default Question;
