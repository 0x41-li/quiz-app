import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Question from "../components/Question";

// styled components
import PrimaryButton from "../styled-components/PrimaryButton";
import PrimarySection from "../styled-components/PrimarySection";

const Section = styled(PrimarySection)`
  padding-top: 40px;

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

  margin-top: 5px;

  font-size: 10.24px;
  line-height: 12px;

  color: #f5f7fb;
`;

const Quiz = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const resp = fetch("https://opentdb.com/api.php?amount=5");

    const questions = resp.then((data) => data.json());

    questions.then((questions) => {
      setQuestions(questions.results);
      console.log(questions);
    });
  }, []);

  const questionsComps = questions.map((question, index) => {
    return <Question key={index} question={question} />;
  });

  return (
    <Section>
      {questionsComps}
      <Button className="font-inter fw-semi-bold">Check answers</Button>
    </Section>
  );
};

export default Quiz;
