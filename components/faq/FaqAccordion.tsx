import React, { useState } from "react";
import Banner from "../Banner";

const questions = [
  {
    id: 1,
    question: "How can we help your business?",
    answer:
      " Answer Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, assumenda.",
  },
  {
    id: 2,
    question: "What are the advantages of Bisnext",
    answer:
      " Answer Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, assumenda.",
  },
  {
    id: 3,
    question: "Let’s find an office near you?",
    answer:
      " Answer Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, assumenda.",
  },
  {
    id: 4,
    question: "How IT consultancy experts work?",
    answer:
      " Answer Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, assumenda.",
  },
];

export default function FaqAccordion() {
  const [active, setActive] = useState(0);

  const handleChange = (index: number) => {
    setActive(active === index ? 0 : index);
  };

  return (
    <div className="question-accordion">
      {questions.map((question) => (
        <div
          key={question.id}
          className={`question-accordion-item ${
            active === question.id ? "active" : ""
          }`}
        >
          <button
            className="btn w-100 text-bold secondry-3 handle-btn"
            onClick={() => handleChange(question.id)}
          >
            {question.question}
            <Banner src="/icons/down-arrow.svg" alt="arrow" />
          </button>
          <div className="question-accordion-item-info">
            <h5 className="size-5 secondry-3">{question.answer}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}
