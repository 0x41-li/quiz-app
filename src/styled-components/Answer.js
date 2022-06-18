import React from "react";
import styled from "styled-components";

const Answer = styled.button`
  font-size: 10.24px;
  line-height: 12px;

  border-radius: 7.94239px;

  padding: 0px 8px;
  height: 20.65px;

  cursor: pointer;

  background: ${(props) => (props.selected ? "#D6DBF5" : "transparent")};
  border: ${(props) => (!props.selected ? "0.794239px solid #4d5b9e" : "unset")};
`;

export default Answer;
