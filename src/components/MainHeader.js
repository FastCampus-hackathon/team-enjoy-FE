import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "./SearchBar";

function MainHeader({ isLogo, isInput }) {
  const history = useNavigate();
  return (
    <WrapHeaderStyle>
      {isLogo && (
        <img
          onClick={() => {
            history("/");
          }}
          className="logo"
          src={require("assets/saraminLogoText.svg").default}
          alt="로고"
        />
      )}
      {isInput && (
        <SearchBarBox>
          <SearchBar />
        </SearchBarBox>
      )}
      <Users
        onClick={() => {
          history("/compare");
        }}
      >
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
const SearchBarBox = styled.div`
  flex: 1;
  margin: 0 auto;
`;
const Users = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 48px;
  padding: 4px;
  box-sizing: border-box;
  &:hover {
    border-radius: 40px;
    background-color: #f4f6fa;
    cursor: pointer;
  }
  img {
    width: 40px;
    height: 40px;
  }
  span {
    font-size: 16px;
    color: var(--light-gray);
  }
  .snsLogo {
    width: 25px;
    height: 25px;
  }
`;
const WrapHeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: calc(130 / 1920 * 100%);
  top: 0;
  left: 0;
  right: 0;
  padding: 30px 60px;
  height: 120px;
  box-sizing: border-box;
  text-align: right;
  .logo {
    cursor: pointer;
  }
`;
export default MainHeader;
