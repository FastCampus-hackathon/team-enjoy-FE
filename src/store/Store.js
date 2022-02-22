import React from "react";
import SearchContext from "store/SearchContext";

function Store({ children }) {
  return <SearchContext>{children}</SearchContext>;
}

export default Store;
