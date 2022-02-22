import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  box-sizing: border-box;
  border: 1px solid #dae0e9;
  & + & {
    margin-left: 30px;
  }
  .topBorder {
    width: calc(100% + 2px);
    margin: -1px -1px 0;
    height: 3px;
    background-color: #7daaff;
  }
  .logo {
    width: 100%;
    height: 132px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    background-color: #dedede;
  }
  .El {
    width: 80%;
    text-align: center;
    margin-bottom: 45px;
    font-size: 20px;
  }
  .El:last-child {
    margin-bottom: 10px;
  }
`;

function DetailJobCard({ props }) {
  return (
    <Container>
      <div className="topBorder" />
      <div className="logo">기업로고</div>
      <div className="El">{props.company.detail.name}</div>
      <div className="El">
        {props.position.location.name.split(",")[0].split("&gt;")}
      </div>
      <div className="El">{props.position["experience-level"].name}</div>
      <div className="El">
        {" "}
        {props.position["required-education-level"].name}
      </div>
      <div className="El">{props.position["job-type"].name}</div>
      <div className="El">{props.salary.name}</div>
    </Container>
  );
}

export default DetailJobCard;
