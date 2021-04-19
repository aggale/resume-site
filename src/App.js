import React from "react";
import "./App.css";
import Header from "./components/Header";
//import Projects from "./Projects/Projects";
import data from "./data.json";
import Blog from "./Blog/Blog";

function App() {
  return (
    <div>
      <Header />
      <Blog blogPosts={data["blog"]} />
    </div>
  );
}

export default App;
