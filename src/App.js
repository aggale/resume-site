import React from "react";
import "./App.css";
import Header from "./components/Header";
import Projects from "./Projects/Projects";
import data from "./data.json";
import Blog from "./Blog/Blog";
import BlogPost from "./Blog/BlogPost";
import Main from "./Bio/Main";

function App() {
  return (
    <div>
      <Header />
      <Main />
      {/*<Projects projects={data.projects} />
      <Blog blogPosts={data["blog"]} />
      <BlogPost blogPost={data["blog"]["1"]} />*/}
    </div>
  );
}

export default App;
