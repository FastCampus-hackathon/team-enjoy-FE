import React, { useState } from "react";
import styled from "styled-components";

const Btn = styled.button`
  padding: 13px 45px;
  border-radius: 28px;
  border: 2px solid #e4e4e4;
  background: none;
  color: #747272;
  font-weight: 700;

  &.selected {
    border-color: #4876ef;
    box-shadow: 3px 3px 6px #dedede;
  }
`;
function CompareBtn() {
  const [selected, setSelected] = useState(false);

  return (
    <Btn
      onClick={() => {
        setSelected(!selected);
      }}
      className={selected ? "selected" : ""}
    >
      마감순
    </Btn>
  );
}

export default CompareBtn;
