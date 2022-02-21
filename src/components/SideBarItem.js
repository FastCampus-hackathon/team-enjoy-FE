import React from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
function SideBarItem({ item, isClosed }) {
  return (
    <SideBarItemStyle
      $isClosed={isClosed}
      className={item.isActive ? "active" : ""}
    >
      <ImgBox $isClosed={isClosed}>
        <img src={require(`assets/${item.src}.svg`)} alt="엄지" />
      </ImgBox>
      <span className="title">{item.title}</span>
      {item.isToggle && (
        <ImgBox $isClosed={isClosed} className="toggle">
          <IoIosArrowDown></IoIosArrowDown>
        </ImgBox>
      )}
    </SideBarItemStyle>
  );
}
const ImgBox = styled.div`
  width: 24px;
  height: 24px;
  margin: ${(props) => {
    if (props.$isClosed) {
      return "0 auto";
    } else {
      return " 0 16px 0 0";
    }
  }};
  &.toggle {
    margin-right: 0;
    display: ${(props) => {
      if (props.$isClosed) {
        return "none";
      } else {
        return "flex";
      }
    }};
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 10px;
    border-radius: 24px;
    &:hover {
      background-color: rgba(92, 102, 123, 0.2);
    }
  }
`;
const SideBarItemStyle = styled.li`
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: start;
  padding: 10px 16px;
  box-sizing: border-box;
  width: ${(props) => {
    if (props.$isClosed) {
      return "71px";
    } else {
      return "240px";
    }
  }};
  transition: background-color 0.6s;
  border-radius: 6px;
  position: relative;
  &:hover {
    background-color: rgba(92, 102, 123, 0.1);
    cursor: pointer;
  }
  &.active {
    background-color: rgba(72, 118, 239, 0.1);
    span {
      font-weight: bold;
      color: var(--primary-blue);
    }
  }
  .title {
    display: ${(props) => {
      if (props.$isClosed) {
        return "none";
      } else {
        return "block";
      }
    }};
    line-height: 24px;
    flex-grow: 1;
    font-size: 15px;
    color: var(--light-gray);
    letter-spacing: -1px;
    font-weight: 500;
  }
`;
export default SideBarItem;
