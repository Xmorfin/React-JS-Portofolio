import React from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageHome from "./components/Pages/PageHome";
import PagePortofolio from "./components/Pages/PagePortofolio";
// import PagePortofolio from "./components/Pages/PagePortofolio";
import PageContact from "./components/Pages/PageContact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/portofolio" element={<PagePortofolio />} />
        <Route path="/contact" element={<PageContact />} />
      </Routes>
    </Router>
  );
};

export default App;
