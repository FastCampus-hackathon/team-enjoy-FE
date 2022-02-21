import React from "react";
import { Routes, Route } from "react-router-dom";
import Compare from "views/Compare";
import SearchBar from "components/SearchBar";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SearchBar />} />
      <Route path="/compare" element={<Compare />} />
    </Routes>
  );
}

export default AllRoutes;
