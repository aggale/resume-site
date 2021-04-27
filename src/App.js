import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./Projects/Projects";
import data from "./data.json";
import Blog from "./Blog/Blog";
import Main from "./Bio/Main";

function App() {
  return (
    <Router>
      <div>
        <Header />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/projects">
            <Projects projects={data.projects} />
          </Route>
          <Route path="/blog">
            <Blog blogPosts={data["blog"]} />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
