import React from "react";
import { CardDeck } from "react-bootstrap";
import Project from "./Project";

const Projects = ({ projects }) => {
  return (
    <div id="projects-container">
      <h3 className="mb-5">
        Learn more about some of my personal projects (past and present!)
      </h3>
      <CardDeck>
        {Object.keys(projects).map((project) => (
          <Project project={projects[project]} />
        ))}
      </CardDeck>
    </div>
  );
};

export default Projects;
