import { createContext, useEffect, useState } from "react";
import axios from "axios";
import compareBtnList from "data/compareBtnList";

export const UserJobsData = createContext({
  selectedTag: {},
  setSelectedTag: () => {},
  selectedList: [],
});

function UserJobs({ children }) {
  const [jobEducationList, setJobEducationList] = useState([]);
  const [jobExperienceList, setJobExperienceList] = useState([]);
  const [selectedTag, setSelectedTag] = useState(compareBtnList[0]);
  const [selectedList, setSelectedList] = useState([]);

  useEffect(() => {
    getJobEducationList();
    getJobExperienceList();
  }, []);
  useEffect(() => {
    if (compareBtnList[0] === selectedTag) {
      setSelectedList(jobEducationList);
    } else if (compareBtnList[1] === selectedTag) {
      setSelectedList(jobExperienceList);
    }
  }, [selectedTag]);
  //학력별 api
  function getJobEducationList() {
    axios.get("/apis/scrap/education").then((res) => {
      setJobEducationList(Object.entries(res.data));
      setSelectedList(Object.entries(res.data));
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
      }}
    >
      {children}
    </UserJobsData.Provider>
  );
}

export default UserJobs;
