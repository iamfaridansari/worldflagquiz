import React from "react";
//
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./css/style.css";
import "./css/responsive.css";
//
import { FlagContextProvider } from "./context/FlagContext";
//
import { Routes, Route } from "react-router-dom";
//
import Introduction from "./pages/Introduction";
import Game from "./pages/Game";
import Result from "./pages/Result";
import Prerequisite from "./pages/Prerequisite";
import { TimerContextProvider } from "./context/TimerContext";

const App = () => {
  return (
    <TimerContextProvider>
      <FlagContextProvider>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/prerequisite" element={<Prerequisite />} />
          <Route path="/game" element={<Game />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </FlagContextProvider>
    </TimerContextProvider>
  );
};

export default App;
