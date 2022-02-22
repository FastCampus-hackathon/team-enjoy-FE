import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <WrapHeaderStyle>
      <Icons>
        <img src={require("assets/save.svg").default} alt="내 저장" />
        <img src={require("assets/ring.svg").default} alt="내 알림" />
      </Icons>
      <Users>
        <img src={require("assets/profile.svg").default} alt="프로필" />
        <span>즐기조</span>
        <img
          className="snsLogo"
          src={require("assets/google.svg").default}
          alt="구글"
        />
      </Users>
    </WrapHeaderStyle>
  );
}
const Users = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 4px;
  box-sizing: border-box;
  &:hover {
    border-radius: 20px;
    background-color: #f4f6fa;
    cursor: pointer;
  }
  img {
    width: 32px;
    height: 32px;
  }
  span {
    font-size: 14px;
    color: var(--light-gray);
  }
  .snsLogo {
    width: 16px;
    height: 16px;
  }
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 16px;
  &:hover {
    cursor: pointer;
  }
  img {
    display: block;
    width: 24px;
    height: 24px;
    padding: 8px;
    &:hover {
      border-radius: 40px;
      background-color: #f4f6fa;
      cursor: pointer;
    }
  }
`;
const WrapHeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: right;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 24px 40px 0 0;
  height: 64px;
  box-sizing: border-box;
  text-align: right;
  background-color: #fff;
`;
export default Header;
