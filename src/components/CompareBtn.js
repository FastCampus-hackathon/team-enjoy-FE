import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  padding: 9px 19px;
  border: 1px solid #d7dce5;
  border-radius: 20px;
  color: #5c667b;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  background-color: #fff;
  &:hover {
    background-color: rgba(92, 102, 123, 0.1);
  }
  &.selected {
    border-color: #4876ef;
    color: #fff;
    font-weight: bold;
    background: #4876ef;
    box-shadow: 3px 3px 6px #dedede;
  }
`;
function CompareBtn({ title, SelectedTag, setSelectedTag }) {
  return (
    <Btn
      onClick={() => {
        setSelectedTag(title);
      }}
      className={title === SelectedTag ? "selected" : ""}
    >
      {title}
    </Btn>
  );
}

export default CompareBtn;
