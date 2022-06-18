import React from "react";
import styled from "styled-components";

// styled components
import PrimaryButton from "../styled-components/PrimaryButton";
import PrimarySection from "../styled-components/PrimarySection";

import TopBlob from "../assets/images/top-blob.svg";
import BottomBlob from "../assets/images/bottom-blob.svg";

const Section = styled(PrimarySection)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url("${TopBlob}") no-repeat top right,
    url("${BottomBlob}") no-repeat bottom left;
  background-color: #f5f7fb;
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

  color: #f5f7fb;
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
