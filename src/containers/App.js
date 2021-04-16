import React from "react";
import "./App.css";
import Header from "../components/Header";
import Projects from "./Projects";
import data from "../data.json";

function App() {
  return (
    <div>
      <Header />
      <Projects projects={data.projects} />
    </div>
  );
}

export default App;
