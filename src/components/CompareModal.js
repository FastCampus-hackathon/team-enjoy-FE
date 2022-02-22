import React, { useContext } from "react";
import styled from "styled-components";
import { CgCloseR, CgSmileNeutral } from "react-icons/cg";
import { SelectedJob } from "store/CompareJob";
import DetailJobCard from "./DetailJobCard";

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #21212180;
  z-index: 25;
`;
const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  width: 80%;
  height: 90%;
  background-color: #fff;
  border-radius: 15px;

  h1 {
    color: #373f57;
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    letter-spacing: -3px;
    line-height: 56px;
  }

  .closeBtn {
    position: absolute;
    top: 20px;
    right: 20px;
    color: var(--primary-blue);
    cursor: pointer;
  }
`;
const Compared = styled.div`
  display: flex;
  justify-content: center;
`;
const SubTitle = styled.div`
  margin-right: 35px;
  .subEl:first-child {
    margin-top: 157px;
  }
  .subEl {
    margin-bottom: 45px;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    letter-spacing: -2px;
  }
  .subEl:last-child {
    margin-bottom: 10px;
  }
`;
const ZeroSelected = styled.div`
  text-align: center;
  height: 60%;

  .notice {
    margin: 20px;
    font-weight: 600;
  }
`;

function CompareModal({ setModal }) {
  const { selectedJob, setSelectedJob } = useContext(SelectedJob);
  const subTitle = ["기업명", "근무지", "경력", "학력", "근무형태", "연봉"];

  return (
    <Background>
      <Modal>
        <h1>선택 공고 비교하기</h1>
        {selectedJob.length ? (
          <Compared>
            <SubTitle>
              {subTitle.map((x, idx) => (
                <div key={idx} className="subEl">
                  {x}
                </div>
              ))}
            </SubTitle>
            {selectedJob.map((x, idx) => (
              <DetailJobCard key={idx} props={x} />
            ))}
          </Compared>
        ) : (
          <ZeroSelected>
            <CgSmileNeutral size={100} />
            <div className="notice">선택된 공고가 없습니다.</div>
          </ZeroSelected>
        )}
        <CgCloseR
          className="closeBtn"
          size={28}
          onClick={() => {
            setModal(false);
            setSelectedJob([]);
          }}
        />
      </Modal>
    </Background>
  );
}

export default CompareModal;
