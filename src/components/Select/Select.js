import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>

      <DisplaySelect>{displayedValue}</DisplaySelect>
      <Chevron id={"chevron-down"} />
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  position: relative;
  width: fit-content;
  border-radius: 8px;
  padding: 12px 52px 12px 16px;
  background: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};

  &:hover {
    color: black;
  }

  &:focus-within {
    outline: 5px auto Highlight;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const NativeSelect = styled.select`
  appearance: none;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`;

const Chevron = styled(Icon)`
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
  pointer-events: none;
`;

const DisplaySelect = styled.div`
  position: relative;
  width: fit-content;
  pointer-events: none;
`;

export default Select;
