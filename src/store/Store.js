import React from "react";
import SearchContext from "store/SearchContext";
import UserJobs from "./UserJobs";

function Store({ children }) {
  return (
    <SearchContext>
      <UserJobs>{children}</UserJobs>
    </SearchContext>
  );
}

export default Store;
