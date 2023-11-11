import React from "react";
import { SectionContainer } from "../../globalStyles";
import styled from "styled-components";

const questions = [
  "How Do I Start?",
  "What Products Do We Offer?",
  "Different Payment Methods?",
  "daily Schedule?",
];

const FaqSection = () => {
  return (
    <FaqContainer>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>

      {questions.map((question, index) => (
        <div key={index}>
          <Question>
            <h4>{question}</h4>
            <div>
              <p>Lorem ipsum dolor sit amet</p>
              <p>
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua
              </p>
            </div>
          </Question>
          <QuestionLine />
        </div>
      ))}
    </FaqContainer>
  );
};

const FaqContainer = styled(SectionContainer)`
  align-items: flex-start;
  flex-direction: column;

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;

    span {
      display: block;
    }
  }
`;

const Question = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 2rem 0;

  h4 {
    cursor: pointer;
  }

  p {
    padding: 0;
    /* display: none; */
  }
`;

const QuestionLine = styled.div`
  height: 0.2rem;
  width: 100%;
  background: #cccccc;
`;

export default FaqSection;
