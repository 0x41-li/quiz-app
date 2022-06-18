import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Question from "../components/Question";

// styled components
import PrimaryButton from "../styled-components/PrimaryButton";
import PrimarySection from "../styled-components/PrimarySection";

const Section = styled(PrimarySection)`
  padding-top: 40px;
  padding-bottom: 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 15px;
`;

const Button = styled(PrimaryButton)`
  width: 120px;
  height: 35px;

  background: #4d5b9e;
  border-radius: 10px;

  margin: 0 auto;

  font-size: 10.24px;
  line-height: 12px;

  color: #f5f7fb;
`;

const ResultAndButtonWrapper = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 399px;
  margin: 0 auto;
  gap: 19px;
`;

const ResultPara = styled.p`
  font-size: 12.8px;
  line-height: 15px;
`;

const Quiz = () => {
  // questions state structure
  /*
  [
    {
      value: "question string",
      answers: [
        {
          value: "true",
          selected: false
        },
        {
          value: "true",
          selected: false
        }
      ],
      correctAnswer: "correct"
    },
    ...more
  ]
  */
  const [questions, setQuestions] = useState([]);
  const [result, setResult] = useState({
    show: false,
    correctAnswersNum: null,
  });

  useEffect(() => {
    getQuestions();
  }, []);

  // get questions from the API
  function getQuestions() {
    const resp = fetch("https://opentdb.com/api.php?amount=5");

    resp
      .then((data) => data.json())
      .then((jsonData) => {
        // get questions array
        const questionsArr = jsonData.results;

        // questions state
        const questionsState = questionsArr.map((questionObj) => {
          // destruct wrong answers and correct answer and randomize the array
          const randomizedAnswers = [
            ...questionObj.incorrect_answers,
            questionObj.correct_answer,
          ].sort(() => Math.random() - 0.5);

          // questions structure
          return {
            value: questionObj.question,
            answers: randomizedAnswers.map((answer) => {
              return {
                value: answer,
                selected: false,
              };
            }),
            correctAnswer: questionObj.correct_answer,
          };
        });

        // update state
        setQuestions(questionsState);
      })
      .catch((error) => {
        console.log(error);
        getQuestions();
      });
  }

  // clicking/selecting an answer handler
  function answerClickHandler(question, index) {
    setQuestions((oldQuestions) => {
      return oldQuestions.map((q) => {
        if (q.value === question) {
          return {
            ...q,
            answers: q.answers.map((answer, aIndex) => {
              return {
                ...answer,
                selected: aIndex === index ? true : false,
              };
            }),
          };
        }

        return q;
      });
    });
  }

  // check answers and display results
  function checkAnswersAndDisplayResults() {
    let correctAnswersNum = 0;

    if (result.show) {
      setResult({ show: false, correctAnswersNum: 0 });
      setQuestions([]);
      getQuestions();
    } else {
      questions.map((q) => {
        q.answers.map((answer) => {
          if (answer.selected && answer.value === q.correctAnswer) {
            correctAnswersNum++;
          }
        });
      });
      setResult({ show: true, correctAnswersNum: correctAnswersNum });
    }
  }

  const questionsComps = questions.map((question, index) => {
    return (
      <Question
        key={index}
        question={question}
        answerClickHandler={answerClickHandler}
        showResult={result.show}
      />
    );
  });

  return (
    <Section>
      {questions.length === 0 ? (
        <p className="text-primary font-inter fw-bold text-center">
          Loading...
        </p>
      ) : (
        <>
          {questionsComps}
          <ResultAndButtonWrapper>
            {result.show ? (
              <ResultPara className="text-primary font-inter fw-bold">
                You scored {result.correctAnswersNum}/5 correct answers
              </ResultPara>
            ) : (
              ""
            )}
            <Button
              className="font-inter fw-semi-bold"
              onClick={checkAnswersAndDisplayResults}
            >
              {result.show ? "Play again" : "Check answers"}
            </Button>
          </ResultAndButtonWrapper>
        </>
      )}
    </Section>
  );
};

export default Quiz;
