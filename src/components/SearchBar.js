import React, { useState, useRef, useContext } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { SearchWord } from "store/SearchContext";

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  box-sizing: border-box;
  border: 1px solid #d7dce5;
  border-radius: 20px;
  background-color: #f4f6fa;
  cursor: pointer;

  &:hover {
    border-color: #bcd1fc;
    color: #4876ef;
    background: #eff5ff;

    input,
    .searchIcon {
      &::placeholder {
        color: #4876ef;
      }
      color: #4876ef;
    }
  }

  .searchIcon {
    color: #8491a7;
  }

  input {
    flex: 1;
    margin-left: 6px;
    border: none;
    background: none;
    padding: 0;
    font-size: 13px;
    line-height: 24px;

    &::placeholder {
      color: #8491a7;
    }
  }
`;
function SearchBar({ routerAddress }) {
  const inputFocus = useRef();
  const [input, setInput] = useState("");
  const { searchWord, setSearchWord } = useContext(SearchWord);
  const history = useNavigate();

  return (
    <SearchBox
      onClick={() => {
        inputFocus.current.focus();
      }}
    >
      <AiOutlineSearch className="searchIcon" size={24} />
      <input
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            if (routerAddress) {
              history(routerAddress);
            }
            setSearchWord(input);
          }
        }}
        placeholder={searchWord ? searchWord : "검색어를 입력하세요"}
        ref={inputFocus}
        value={input}
      />
    </SearchBox>
  );
}

export default SearchBar;
