import React from "react";
import styled from "styled-components";
import sidebarList from "data/sidebarList";
import SideBarItem from "./SideBarItem";
import { v1 as uuid } from "uuid";
import { useState } from "react";
function SideBar() {
  const [isClosed, setIsClosed] = useState(false);
  return (
    <SideBarStyle $isClosed={isClosed}>
      <a href="/">
        {isClosed && (
          <img src={require("assets/saraminLogo.svg").default} alt="사람인" />
        )}
        {!isClosed && (
          <img
            src={require("assets/saraminLogoText.svg").default}
            alt="사람인"
          />
        )}
      </a>
      <button
        onClick={() => {
          setIsClosed(!isClosed);
        }}
      >
        {isClosed && (
          <img src={require("assets/sideOpen.svg").default} alt="" />
        )}
        {!isClosed && (
          <img src={require("assets/sideClose.svg").default} alt="" />
        )}
      </button>
      <ul>
        {sidebarList.map((item) => (
          <SideBarItem isClosed={isClosed} key={uuid()} item={item} />
        ))}
      </ul>
    </SideBarStyle>
  );
}

const SideBarStyle = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 25;
  padding-top: 96px;
  width: ${(props) => {
    if (props.$isClosed) {
      return "71px";
    } else {
      return "271px";
    }
  }};
  border-right: 1px solid #f0f0f0;
  background: #fff;
  transition: width 0.5s;
  a {
    display: block;
    position: absolute;
    top: 33px;
    left: ${(props) => {
      if (props.$isClosed) {
        return "23px";
      } else {
        return "32px";
      }
    }};
    height: 24px;
  }
  button {
    &:hover {
      background-color: #f4f6fa;
    }
    border: ${(props) => {
      if (props.$isClosed) {
        return "1px solid #f0f0f0";
      } else {
        return "none";
      }
    }};
    display: inline-block;
    position: absolute;
    z-index: 35;
    top: 28px;
    right: ${(props) => {
      if (props.$isClosed) {
        return "-16px";
      } else {
        return "22px";
      }
    }};
    width: 32px;
    height: 32px;
    background-color: #fff;
    border-radius: 50%;
    text-align: center;
    box-sizing: border-box;
    transition: 0.5s;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 0 auto;
    width: 240px;
  }
`;
export default SideBar;
