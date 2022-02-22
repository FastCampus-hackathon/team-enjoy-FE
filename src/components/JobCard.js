import React, { useState, useContext } from "react";
import styled from "styled-components";
import { BsCheckSquare } from "react-icons/bs";
import { SelectedJob } from "store/CompareJob";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 215px;
  height: 140px;
  box-sizing: border-box;
  border: 1px solid #dae0e9;
  .topBorder {
    width: calc(100% + 2px);
    margin: -1px -1px 0;
    height: 3px;
    background-color: #7daaff;
  }
  .company {
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #dae0e9;
  }
`;
const DdayTag = styled.div`
  padding: 4px 6px;
  width: fit-content;
  border-radius: 4px;
  background-color: #ff5757;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  position: absolute;
  top: 7px;
  left: 7px;
`;

const Tag = styled.div`
  padding: 4px 6px;
  width: fit-content;
  border: 1px solid #5c667b;
  border-radius: 4px;
  color: #5c667b;
  font-size: 10px;
  font-weight: 700;
  & + & {
    margin-left: 3px;
  }
`;

const BottomInfo = styled.div`
  flex: 1;
  padding: 7px 10px;

  .title {
    width: 100%;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
    line-height: 14px;
    font-weight: 700;
  }
  .icon {
    position: absolute;
    bottom: 7px;
    left: 10px;
    cursor: pointer;
  }

  .tagList {
    position: absolute;
    bottom: 7px;
    right: 10px;
    display: flex;
    justify-content: end;
  }
`;

function JobCard({ props }) {
  const [checked, setChecked] = useState(false);
  const { selectedJob, setSelectedJob } = useContext(SelectedJob);
  function calcDday(timestamp) {
    const props_date = new Date(Number(timestamp));
    const now = new Date();
    const gap = props_date.getTime() - now.getTime();
    return Math.floor(gap / (1000 * 60 * 60 * 24));
  }

  return (
    <Container>
      <div className="topBorder" />
      <DdayTag>
        {calcDday(props["expiration-timestamp"]) < 0
          ? "마감"
          : `D-${calcDday(props["expiration-timestamp"])}`}
      </DdayTag>
      <div className="company">{props.company.detail.name}</div>
      <BottomInfo>
        <div className="title">{props.position.title}</div>
        <div className="tagList">
          <Tag>{props.position.location.name.split(",")[0].split("&gt;")}</Tag>
          <Tag>{props.position["experience-level"].name}</Tag>
        </div>
        <BsCheckSquare
          className="icon"
          size={20}
          color={checked ? "var(--primary-blue)" : "#dfdfdf"}
          onClick={() => {
            if (selectedJob.length < 3) {
              if (!checked) {
                setSelectedJob((prev) => [...prev, props]);
              } else {
                setSelectedJob(selectedJob.filter((x) => x.url !== props.url));
              }
              setChecked(!checked);
            } else if (selectedJob.length === 3 && checked) {
              setSelectedJob(selectedJob.filter((x) => x.url !== props.url));
              setChecked(!checked);
            }
          }}
        />
      </BottomInfo>
    </Container>
  );
}

export default JobCard;
