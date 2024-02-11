import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Components/Home.jsx";
import Results from "./Routes/Components/Results.jsx";
import Item from "./Routes/Components/Item.jsx";
import Add from "./Routes/Components/Add.jsx";

const App = () => {
  return (
    <div style={{ margin: "20px" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/item" element={<Item />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
