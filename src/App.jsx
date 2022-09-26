import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "@/pages/home";
import { Detail } from "@/pages/detail";

import  { GlobalStyle } from "@/styles/global";

function App() {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');
//   console.log("detailId: ", detailId);

  return (
    <>
    <GlobalStyle />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pet/:categoryId" element={<Home />} />
        <Route path="/detail/:id" element={<Detail/> } />
    </Routes>
    </>
  )
}

export default App
