import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const Container = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  padding: 20px 39px;
  & + & {
    border-top: 1px solid #e6e6e6;
  }
  .title {
    width: fit-content;
    font-size: 15px;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const JobPosting = styled.div`
  width: 77%;
`;
const Company = styled.div`
  width: 23%;
  margin-left: 17px;
  .companyInfo {
    margin-top: 9px;
  }
`;
const Btn = styled.button`
  border: 1px solid
    ${({ borderColor }) => (borderColor ? borderColor : "#ff5656")};
  color: ${({ textColor }) => (textColor ? textColor : "#dc3434")};
  font-size: 12px;
  background: none;
`;
const PostInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  .deadline {
    font-size: 13px;
    color: #949494;
  }
  .likeBtn {
    cursor: pointer;
  }
`;
const PostDetail = styled.div`
  display: flex;
  gap: 10px;
  font-size: 13px;
  color: #555555;
  margin-top: 9px;
`;

const PostEtc = styled.div`
  display: flex;
  font-size: 12px;
  line-height: 16px;
  color: #949494;
  margin-top: 19px;
`;

function JobPostingEl() {
  const props = {
    url: "http://www.saramin.co.kr/zf_user/jobs/relay/view?rec_idx=27614114&utm_source=job-search-api&utm_medium=api&utm_campaign=saramin-job-search-api",
    active: 1,
    company: {
      detail: {
        href: "http://www.saramin.co.kr/zf_user/company-info/view?csn=1138600917&utm_source=job-search-api&utm_medium=api&utm_campaign=saramin-job-search-api",
        name: "(주)사람인에이치알",
      },
    },
    position: {
      title: "(주)사람인에이치알 사무보조·문서작성 경력 채용합니다11212",
      industry: {
        code: "301",
        name: "솔루션·SI·ERP·CRM",
      },
      location: {
        code: "101050,101060,101070",
        name: "서울 > 관악구,서울 > 광진구,서울 > 구로구",
      },
      "job-type": {
        code: "1",
        name: "정규직",
      },
      "job-mid-code": {
        code: "22",
        name: "요리·제빵사·영양사",
      },
      "job-code": {
        code: "2323",
        name: "요리·제빵사·영양사",
      },
      "experience-level": {
        code: 2,
        min: 2,
        max: 3,
        name: "경력 2~3년",
      },
      "required-education-level": {
        code: "0",
        name: "학력무관",
      },
    },
    keyword: "SI·시스템통합,Excel·도표,PowerPoint,전산입력·편집",
    salary: {
      code: "6",
      name: "1,800~2,000만원",
    },
    id: "27614114",
    "posting-timestamp": "1559191564",
    "posting-date": "2019-05-30T13:46:04+0900",
    "modification-timestamp": "1559191564",
    "opening-timestamp": "1559188800",
    "expiration-timestamp": "1561820399",
    "expiration-date": "2019-06-29T23:59:59+0900",
    "close-type": {
      code: "1",
      name: "접수마감일",
    },
    "read-cnt": "0",
    "apply-cnt": "0",
  };

  const [toggle, setToggle] = useState(false);
  function getExpDate(props_date) {
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    const month = new Date(props_date).getMonth() + 1;
    const date = new Date(props_date).getDate();
    const day = week[new Date(props_date).getDay()];

    return `~ ${month}/${date}(${day})`;
  }
  return (
    <>
      <Container>
        <JobPosting>
          <PostInfo>
            <div className="title">{props.position.title}</div>
            {toggle ? (
              <AiFillStar
                className="likeBtn"
                size={18}
                color="#ffe600"
                onClick={() => setToggle(false)}
              />
            ) : (
              <AiOutlineStar
                className="likeBtn"
                size={18}
                color="#c4c4c4"
                onClick={() => setToggle(true)}
              />
            )}
            <div className="deadline">
              {getExpDate(props["expiration-date"])}
            </div>
            <Btn>입사지원</Btn>
          </PostInfo>
          <PostDetail>
            <div className="location">
              {props.position.location.name.split(",")[0]}
            </div>
            <div className="exp-level">
              {props.position["experience-level"].name}
            </div>
            <div className="edu-level">
              {props.position["required-education-level"].name}
            </div>
            <div className="jop-type">{props.position["job-type"].name}</div>
            <div className="salary">{props.salary.name}</div>
          </PostDetail>
          <PostEtc>
            <div className="keyword">
              {props.keyword.replaceAll(",", ", ")} 외
            </div>
          </PostEtc>
        </JobPosting>
        <Company>
          <div className="title">{props.company.detail.name}</div>
          <Btn
            className="companyInfo"
            borderColor="#dbdbdb"
            textColor="#949494"
          >
            기업정보
          </Btn>
        </Company>
      </Container>
    </>
  );
}

export default JobPostingEl;
