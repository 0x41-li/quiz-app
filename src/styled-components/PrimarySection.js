import React from "react";

import styled from "styled-components";

// images
import TopBlobPrimary from "../assets/images/top-blob-primary.svg";
import BottomBlobPrimary from "../assets/images/bottom-blob-primary.svg";

const PrimarySection = styled.section`
  min-height: 100vh;
  background: url("${TopBlobPrimary}") no-repeat top right,
    url("${BottomBlobPrimary}") no-repeat bottom left;
  background-color: #f5f7fb;
`;

export default PrimarySection;
