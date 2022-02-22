import React from "react";
import { Routes, Route } from "react-router-dom";
import Compare from "views/Compare";
import Home from "views/Home";
import Search from "views/Search";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/compare" element={<Compare />} />
    </Routes>
  );
}

export default AllRoutes;
