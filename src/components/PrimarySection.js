import React from "react";

import styled from "styled-components";

// images
// images
import TopBlob from "../assets/images/top-blob.svg";
import BottomBlob from "../assets/images/bottom-blob.svg";

const PrimarySection = styled.section`
  min-height: 100vh;
  background: url("${TopBlob}") no-repeat top right,
    url("${BottomBlob}") no-repeat bottom left;
  background-color: #f5f7fb;
`;

export default PrimarySection;
