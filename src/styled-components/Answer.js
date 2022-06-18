import React from "react";
import styled from "styled-components";

const Answer = styled.button`
  font-size: 10.24px;
  line-height: 12px;

  border-radius: 7.94239px;

  padding: 0px 8px;
  height: 20.65px;

  cursor: pointer;

  background: ${(props) => {
    if (props.showResult) {
      if (props.selected) {
        if (props.correctAnswer) {
          return "#94D7A2";
        } else {
          return "#F8BCBC";
        }
      } else {
        if (props.correctAnswer) {
          return "#94D7A2";
        }
      }
    } else {
      if (props.selected) {
        return "#D6DBF5";
      } else {
        return "transparent";
      }
    }
  }};
  border: ${(props) => {
    if (props.selected) {
      return "unset";
    } else {
      if (props.showResult && props.correctAnswer) {
        return "unset";
      } else {
        return "0.794239px solid #4d5b9e";
      }
    }
  }};
`;

export default Answer;
