import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <div>
      <label>
        <VisuallyHidden>{label}</VisuallyHidden>
        <StyledIcon id={icon} />
        <Input placeholder={placeholder} type="text"></Input>
      </label>
    </div>
  );
};

const StyledIcon = styled(Icon)`
  position: absolute;
  left: 4px;
  top: 50%;
  transform: translateY(-50%);
`;

const Input = styled.input`
  padding: 10px;
  padding-left: 10px;
  padding-left: 40px;
  border: none;
  border-bottom-color: currentcolor;
  border-bottom-style: none;
  border-bottom-width: medium;
  border-bottom: 1px solid black;
  outline-offset: 4px;
`;

export default IconInput;
