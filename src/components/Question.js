import React from "react";

// styled components
import QuestionWrapper from "../styled-components/QuestionWrapper";
import QuestionPara from "../styled-components/QuestionPara";
import AnswersWrapper from "../styled-components/AnswersWrapper";
import Answer from "../styled-components/Answer";

const Question = (props) => {
  let answers = [
    ...props.question.incorrect_answers,
    props.question.correct_answer,
  ];

  // sort the arra randomly
  answers = answers.sort(() => Math.random() - 0.5);

  // answers components
  const answersComps = answers.map((answer, index) => {
    return <Answer key={index}>{answer}</Answer>;
  });

  return (
    <QuestionWrapper>
      <QuestionPara
        className="text-primary fw-bold font-karla"
        dangerouslySetInnerHTML={{ __html: props.question.question }}
      ></QuestionPara>

      <AnswersWrapper>{answersComps}</AnswersWrapper>
    </QuestionWrapper>
  );
};

export default Question;
