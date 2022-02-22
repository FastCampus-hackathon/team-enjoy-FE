import React, { useEffect, useContext } from "react";
import JobPostingEl from "components/JobPostingEl";
import styled from "styled-components";
import MainHeader from "components/MainHeader";
import { SearchWord } from "store/SearchContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const Main = styled.div`
  background-color: #4876ef33;
  flex: 1;
  overflow-y: scroll;
`;

const ListBox = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
`;
function Search() {
  const { searchWord, getJobPosting, resultSearch } = useContext(SearchWord);

  useEffect(() => {
    if (searchWord) {
      getJobPosting(searchWord);
    }
  }, [searchWord]);

  return (
    <Container>
      <MainHeader isLogo={true} isInput={true} />
      <Main>
        <ListBox>
          {resultSearch?.length ? (
            resultSearch.map((x, idx) => <JobPostingEl props={x} key={idx} />)
          ) : (
            <div>검색 결과가 없습니다.</div>
          )}
        </ListBox>
      </Main>
    </Container>
  );
}

export default Search;
