import React from "react";

// styled components
import QuestionWrapper from "../styled-components/QuestionWrapper";
import QuestionPara from "../styled-components/QuestionPara";
import AnswersWrapper from "../styled-components/AnswersWrapper";
import Answer from "../styled-components/Answer";

const Question = (props) => {
  const answersComps = props.question.answers.map((answer, index) => {
    return (
      <Answer
        key={index}
        dangerouslySetInnerHTML={{ __html: answer.value }}
        selected={answer.selected}
        onClick={
          !props.showResult
            ? () => props.answerClickHandler(props.question.value, index)
            : () => {
                return;
              }
        }
        showResult={props.showResult}
        correctAnswer={
          props.question.correctAnswer === answer.value ? true : false
        }
      ></Answer>
    );
  });

  return (
    <QuestionWrapper>
      <QuestionPara
        className="text-primary fw-bold font-karla"
        dangerouslySetInnerHTML={{ __html: props.question.value }}
      />

      <AnswersWrapper>{answersComps}</AnswersWrapper>
    </QuestionWrapper>
  );
};

export default Question;
