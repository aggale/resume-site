import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Projects from "./Projects/Projects";
import data from "./data.json";
import Blog from "./Blog/Blog";
import Main from "./Bio/Main";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/blog">
              <Blog blogPosts={data["blog"]} />
            </Route>
            <Route exact path="/">
              <Main />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
