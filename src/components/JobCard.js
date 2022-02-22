import React, { useState } from "react";
import styled from "styled-components";
import { BsCheckSquare } from "react-icons/bs";

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
const Tag = styled.div`
  padding: 4px 6px;
  width: fit-content;
  border-radius: 4px;
  background-color: ${({ color }) => (color ? color : "#7DAAFF")};
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
`;

const BottomInfo = styled.div`
  flex: 1;
  padding: 7px 10px;

  .title {
    width: 100%;
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
`;
function JobCard() {
  const props = {
    "expiration-timestamp": "1648133999",
    "close-type": {
      code: "1",
      name: "접수마감일",
    },
    "posting-timestamp": "1645523633",
    active: 1,
    company: {
      detail: {
        name: "(주)에스제이더블유인터내셔널",
        href: "http://www.saramin.co.kr/zf_user/company-info/view?csn=2148798782&utm_source=job-search-api&utm_medium=api&utm_campaign=saramin-job-search-api",
      },
    },
    "modification-timestamp": "1645523633",
    position: {
      "job-type": {
        code: "1",
        name: "정규직",
      },
      "required-education-level": {
        code: "7",
        name: "대학졸업(2,3년)이상",
      },
      "job-code": {
        code: "209,1499,1502,1504,1529,1614,1616",
        name: "어학원,CSS,앱디자인,웹디자인,일러스트레이터,UI/UX디자인,PhotoShop,Sketch",
      },
      industry: {
        code: "602",
        name: "학원·어학원",
      },
      location: {
        code: "101200",
        name: "서울 &gt; 영등포구",
      },
      "job-mid-code": {
        code: "2,15",
        name: "IT개발·데이터,디자인",
      },
      title: "[시원스쿨] 웹디자이너(웹/앱 디자인) 채용",
      "experience-level": {
        code: 2,
        min: 7,
        max: 0,
        name: "경력7년↑",
      },
    },
    id: "42400106",
    keyword: "어학원",
    salary: {
      code: "99",
      name: "면접후 결정",
    },
    url: "http://www.saramin.co.kr/zf_user/jobs/relay/view?rec_idx=42400106&utm_source=job-search-api&utm_medium=api&utm_campaign=saramin-job-search-api",
    "opening-timestamp": "1645520400",
  };
  const [checked, setChecked] = useState(false);

  function calcDday(timestamp) {
    const props_date = new Date(Number(timestamp));
    const now = new Date();
    const gap = props_date.getTime() - now.getTime();
    return Math.floor(gap / (1000 * 60 * 60 * 24));
  }
  return (
    <Container>
      <div className="topBorder" />
      <Tag color="#FF5757" top="7px" left="7px">
        {calcDday(props["expiration-timestamp"]) < 0
          ? "마감"
          : `D-${calcDday(props["expiration-timestamp"])}`}
      </Tag>
      <div className="company">{props.company.detail.name}</div>
      <BottomInfo>
        <div className="title">{props.position.title}</div>
        <BsCheckSquare
          className="icon"
          size={20}
          color={checked ? "var(--primary-blue)" : "#dfdfdf"}
          onClick={() => setChecked(!checked)}
        />
      </BottomInfo>
    </Container>
  );
}

export default JobCard;
