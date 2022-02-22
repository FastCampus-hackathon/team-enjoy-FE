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
    line-height: 20px;
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
  display: flex;
  flex-direction: column;
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
  width: fit-content;
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

function JobPostingEl({ props }) {
  const [toggle, setToggle] = useState(false);

  function getExpDate(timestamp) {
    const props_date = new Date(Number(timestamp));
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    const month = props_date.getMonth() + 1;
    const date = props_date.getDate();
    const day = week[props_date.getDay()];

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
              {getExpDate(props["expiration-timestamp"])}
            </div>
            <Btn>입사지원</Btn>
          </PostInfo>
          <PostDetail>
            <div className="location">
              {props.position.location.name.split(",")[0].split("&gt;")}
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
