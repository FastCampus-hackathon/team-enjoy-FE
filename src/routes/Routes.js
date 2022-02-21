import React from "react";
import { Routes, Route } from "react-router-dom";
import Compare from "../views/Compare";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/compare" element={<Compare />} />
    </Routes>
  );
}

export default AllRoutes;
