import React, { useState, useEffect } from "react";
import JobPostingEl from "components/JobPostingEl";
import styled from "styled-components";
import axios from "axios";

const Main = styled.div`
  background-color: #4876ef33;
`;

const ListBox = styled.div`
  width: 90%;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #e6e6e6;
`;
function Search() {
  const [resultSearch, setResultSearch] = useState([]);

  useEffect(() => {
    axios
      .post("/apis/search", {
        keyword: "java",
        start: 1,
      })
      .then((res) => {
        setResultSearch(res.data.jobs.job);
      });
  }, []);

  return (
    <Main>
      <ListBox>
        {resultSearch.map((x, idx) => (
          <JobPostingEl props={x} key={idx} />
        ))}
      </ListBox>
    </Main>
  );
}

export default Search;
