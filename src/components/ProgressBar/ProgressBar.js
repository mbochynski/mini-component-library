/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const sizes = {
  small: {
    "--height": "8px",
    "--padding": 0,
    "--radius": "4px",
  },
  medium: {
    "--height": "12px",
    "--padding": 0,
    "--radius": "4px",
  },
  large: {
    "--height": "24px",
    "--padding": "4px",
    "--radius": "8px",
  },
};

const ProgressBar = ({ value, size }) => {
  return (
    <div>
      <ProgressValue>{value}%</ProgressValue>
      <ProgressWrapper
        style={sizes[size]}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <Progress value={value}></Progress>
      </ProgressWrapper>
    </div>
  );
};

const ProgressValue = styled.strong`
  font-size: 20px;
  width: 60px;
  display: inline-block;
`;

const ProgressWrapper = styled.div`
  display: inline-block;
  height: var(--height);
  width: 400px;
  padding: var(--padding);
  margin-bottom: calc(var(--padding) * -1);
  border-radius: var(--radius);
  background: ${COLORS.transparentGray15};
`;

const Progress = styled.div`
  background: ${COLORS.primary};
  height: 100%;
  width: 100%;
  border-radius: 4px;
  clip-path: inset(0 ${(p) => 100 - p.value}% 0 0);
`;

export default ProgressBar;
