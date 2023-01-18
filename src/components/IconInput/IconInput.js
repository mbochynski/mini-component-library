import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

/* disclaimer - this component is not the finest (pixel perfect or color perfect)
   I've focused on most tricky part (in my opinion) only
*/
const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <div>
      <Label>
        <VisuallyHidden>{label}</VisuallyHidden>
        <StyledIcon id={icon} />
        <Input placeholder={placeholder} type="text" width={width}></Input>
      </Label>
    </div>
  );
};

const Label = styled.label`
  position: relative;
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  left: 4px;
  top: 50%;
  transform: translateY(-50%);
`;

const Input = styled.input`
  width: ${(p) => p.width + "px"};
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
