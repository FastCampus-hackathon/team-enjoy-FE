import React from "react";
import SearchBar from "components/SearchBar";
import styled from "styled-components";
import MainHeader from "components/MainHeader";

function Home() {
  return (
    <HomeStyle>
      <MainHeader isLogo={false} isInput={false} />
      <div className="main">
        <img src={require("assets/saraminLogoText.svg").default} alt="사람인" />
        <SearchBarBox>
          <SearchBar routerAddress={"/search"} />
        </SearchBarBox>
      </div>
    </HomeStyle>
  );
}
const HomeStyle = styled.div`
  .main {
    img {
      display: block;
      width: calc(614 / 1920 * 100%);
      margin: -120px auto 60px;
    }
    position: fixed;
    top: 120px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
const SearchBarBox = styled.div`
  width: calc(1350 / 1920 * 100%);
  margin: 0 auto;
`;
export default Home;
