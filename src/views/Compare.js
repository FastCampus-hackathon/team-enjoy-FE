import CompareBtn from "components/CompareBtn";
import Header from "components/Header";
import JobBoard from "components/JobBoard";
import SideBar from "components/SideBar";
import compareBtnList from "data/compareBtnList";
import React, { Fragment, useContext, useState } from "react";
import { UserJobsData } from "store/UserJobs";
import styled from "styled-components";
import { v1 as uuid } from "uuid";

function Compare() {
  const [isClosed, setIsClosed] = useState(true);
  const { selectedTag, setSelectedTag, selectedList } =
    useContext(UserJobsData);
  return (
    <Fragment>
      <Header />
      <Main $isClosed={isClosed}>
        <SideBar isClosed={isClosed} setIsClosed={setIsClosed} />
        <Content $isClosed={isClosed}>
          <h1>스크랩/관심기업</h1>
          <div className="tab">
            <span>스크랩</span>
            <div>{4}</div>
          </div>
          <CompareBtnList>
            {compareBtnList.map((item) => {
              return (
                <CompareBtn
                  setSelectedTag={setSelectedTag}
                  selectedTag={selectedTag}
                  key={uuid()}
                  item={item}
                />
              );
            })}
          </CompareBtnList>
          <JobBoard
            selectedList={selectedList}
            detailList={selectedTag.detailList}
          />
        </Content>
      </Main>
    </Fragment>
  );
}
const CompareBtnList = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 22px;
`;
const Main = styled.div`
  display: flex;
  padding: ${(props) => {
    if (props.$isClosed) {
      return "0 0 0 72px";
    } else {
      return "0 0 0 272px";
    }
  }};
  z-index: 50;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
`;
const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: ${(props) => {
    if (props.$isClosed) {
      return "88px 0 88px 100px";
    } else {
      return "88px 0 88px 40px";
    }
  }};
  overflow-y: scroll;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  h1 {
    margin-bottom: 56px;
    color: #373f57;
    font-size: 36px;
    font-weight: bold;
    letter-spacing: -3px;
    line-height: 56px;
  }
  .tab {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: bold;
    height: 28px;
    line-height: 28px;
    margin-bottom: 22px;

    span {
      color: #373f57;
      font-size: 20px;
      letter-spacing: -1px;
    }
    div {
      display: inline-block;
      margin: 0 0 0 8px;
      padding: 0 12px 0 13px;
      min-width: 36px;
      border-radius: 14px;
      box-sizing: border-box;
      color: #fff;
      background-color: #373f57;
      font-size: 18px;
    }
  }
`;
export default Compare;
