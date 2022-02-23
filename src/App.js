import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Info from "./Pages/DataInfo";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/data" element={<Info />} />
      </Routes>
    </div>
  );
};
export default App;
