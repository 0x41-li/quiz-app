import React from "react";
import styled from "styled-components";

// styled components
import PrimaryButton from "../components/PrimaryButton";
import PrimarySection from "../components/PrimarySection";

const Section = styled(PrimarySection)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 31.25px;
  line-height: 37px;
`;

const P = styled.p`
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  margin-top: 7px;
`;

const Button = styled(PrimaryButton)`
  height: 52px;
  width: 193px;
  font-size: 16px;
  line-height: 19px;

  margin-top: 29px;
`;

const GetStarted = (props) => {
  return (
    <Section>
      <Title className="text-primary font-karla fw-bold">Quizzical</Title>
      <P className="text-primary font-inter fw-regular">
        Easy and fun quiz app.
      </P>
      <Button
        onClick={() => props.setPage("quiz")}
        className="font-inter fw-medium"
      >
        Start quiz
      </Button>
    </Section>
  );
};

export default GetStarted;
