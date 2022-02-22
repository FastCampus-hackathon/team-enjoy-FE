import React from "react";
import SearchContext from "store/SearchContext";
import CompareJob from "./CompareJob";
import UserJobs from "./UserJobs";

function Store({ children }) {
  return (
    <SearchContext>
      <CompareJob>
        <UserJobs>{children}</UserJobs>
      </CompareJob>
    </SearchContext>
  );
}

export default Store;
