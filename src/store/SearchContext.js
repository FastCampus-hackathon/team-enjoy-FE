import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const SearchWord = createContext({
  searchWord: "",
  resultSearch: [],
  setResultSearch: () => {},
  setSearchWord: () => {},
  getJobPosting: () => {},
});

function SearchContext({ children }) {
  const [searchWord, setSearchWord] = useState("");
  const [resultSearch, setResultSearch] = useState([]);

  function getJobPosting(keyword) {
    axios
      .post("/apis/search", {
        keyword: keyword,
        start: 0,
      })
      .then((res) => {
        setResultSearch(res.data.jobs.job);
      });
  }

  return (
    <SearchWord.Provider
      value={{ searchWord, setSearchWord, getJobPosting, resultSearch }}
    >
      {children}
    </SearchWord.Provider>
  );
}

export default SearchContext;
