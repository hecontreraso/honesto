import React from "react";
import "./Question.scss";
import MultipleOptions from "components/MultipleOptions";

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
        <MultipleOptions />
        <div className="navigation">
          <a className="button button-normal">Previous</a>
          <a className="button button-normal">Skip</a>
          <a className="button button-disabled">Next</a>
        </div>
        <div>Progress</div>
        <div className="question-footer">
          <div className="left">
            <div className="label">Questions completed</div>
            <div>1/17</div>
          </div>
          <div className="right">
            <div>Stars</div>
            <div>flag</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
