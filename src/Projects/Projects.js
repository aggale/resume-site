import React from "react";
import { CardDeck } from "react-bootstrap";
import Project from "./Project";

const Projects = ({ projects }) => {
  return (
    <div className="m-5">
      <CardDeck>
        {Object.keys(projects).map((project) => (
          <Project project={projects[project]} />
        ))}
      </CardDeck>
    </div>
  );
};

export default Projects;
