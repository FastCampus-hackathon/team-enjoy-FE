import { createContext, useEffect, useState } from "react";
import axios from "axios";
import compareBtnList from "data/compareBtnList";

export const UserJobsData = createContext({
  selectedTag: {},
  setSelectedTag: () => {},
  selectedList: [],
  jobsNum: 0,
  update: () => {},
});

function UserJobs({ children }) {
  const [jobEducationList, setJobEducationList] = useState([]);
  const [jobExperienceList, setJobExperienceList] = useState([]);
  const [selectedTag, setSelectedTag] = useState(compareBtnList[3]);
  const [selectedList, setSelectedList] = useState([]);
  const [jobsNum, setJobsNum] = useState(0);
  useEffect(() => {
    update();
  }, []);

  useEffect(() => {
    if (compareBtnList[3] === selectedTag) {
      setSelectedList(jobEducationList);
    } else if (compareBtnList[4] === selectedTag) {
      setSelectedList(jobExperienceList);
    } else {
      setSelectedList(jobEducationList);
    }
  }, [selectedTag]);
  function update() {
    getJobEducationList();
    getJobExperienceList();
    getAllJobs();
  }

  // 전체 api
  function getAllJobs() {
    axios.get("/apis/scrap/deploy").then((res) => {
      setJobsNum(res.data.length);
    });
  }
  //학력별 api
  function getJobEducationList() {
    axios.get("/apis/scrap/education").then((res) => {
      const data = Object.entries(res.data);
      data.forEach((item) => {
        const newArray = item[1];
        newArray.sort((dataA, dataB) => {
          return dataA["expiration-timestamp"] - dataB["expiration-timestamp"];
        });
        item[1] = newArray;
      });
      setJobEducationList(data);
      setSelectedList(data);
    });
  }
  //경력별 api
  function getJobExperienceList() {
    axios.get("apis/scrap/experience").then((res) => {
      setJobExperienceList(Object.entries(res.data));
    });
  }
  return (
    <UserJobsData.Provider
      value={{
        selectedTag,
        setSelectedTag,
        selectedList,
        jobsNum,
        update,
      }}
    >
      {children}
    </UserJobsData.Provider>
  );
}

export default UserJobs;
