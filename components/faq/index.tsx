import React from "react";
import FaqAccordion from "./FaqAccordion";

export default function Faq() {
  return (
    <div className="question-answer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <FaqAccordion />
          </div>
          <div className="col-md-6 right-side">
            <h6
              className="size-7 font-bold 
            gradient-text-bg"
            >
              FAQS
            </h6>
            <h3 className="size-3 title secondry-3 text-bold">
              Be Kind to Your Mind
              <br />
              Question & Answer
            </h3>
            <h6 className="size-6 natural-5 m-0">
              All Your Qustions are in A document, in question and answer
              format, that introduces newcomers to a topic or answers common
              questions.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
