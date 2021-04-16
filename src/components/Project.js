import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Projects.css";
import resumeSitePhoto from "../assets/images/resume-website-thumbnail.jpg"; // Temp

//const photoPath = "../assets/images/";

const Project = ({ project }) => {
  console.log(project);
  return (
    <Card className="project-card">
      <Card.Img variant="top" src={resumeSitePhoto} />
      <Card.Body>
        <Card.Title className="font-weight-bold">{project.title}</Card.Title>
        <Card.Subtitle className="technologies">
          {project.technologies}
        </Card.Subtitle>
        <Card.Text className="mt-3">{project.description}</Card.Text>
        <div className="project-card-buttons">
          <Button className="card-button">View Project</Button>
          <Button className="card-button">Github</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Project;
