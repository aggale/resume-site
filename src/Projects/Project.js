import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Projects.css";

const Project = ({ project }) => {
  const image = require("../assets/images/" + project.image).default;

  return (
    <Card className="project-card">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="font-weight-bold">{project.title}</Card.Title>
        <Card.Subtitle className="project-card-technologies">
          {project.technologies}
        </Card.Subtitle>
        <Card.Text className="mt-3">{project.description}</Card.Text>
        <div className="project-card-buttons">
          {project.url && (
            <Button href={project.url} className="card-button">
              View Project
            </Button>
          )}
          {project.github && (
            <Button href={project.github} className="card-button">
              Github
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Project;
