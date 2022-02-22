import React from "react";
import styled from "styled-components";
import { v1 as uuid } from "uuid";

function JobBoard({ selectedList, detailList }) {
  return (
    <JobBoardStyle>
      {selectedList.length > 0 &&
        selectedList.map((job) => {
          return (
            <Item key={uuid()}>
              <div className="title">{detailList[job[0]]}</div>
              <div className="jobList">
                {job[1].map(() => {
                  return <div>z</div>;
                })}
              </div>
            </Item>
          );
        })}
    </JobBoardStyle>
  );
}
const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  .title {
    text-align: center;
    width: 150px;
    margin-right: 10px;
  }
  .jobList {
    display: flex;
  }
`;
const JobBoardStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export default JobBoard;
