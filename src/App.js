import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Hire from "./components/hire/Hire";
import Project from "./components/projects/Project";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />{" "}
            </>
          }
        />
        <Route path="/hire" element={<Hire />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
