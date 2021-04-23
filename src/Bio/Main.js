import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import profilePic from "../assets/images/cartoon-me-cutout.png";
import jsLogo from "../assets/images/javascript.png";
import reactLogo from "../assets/images/react.png";
import csLogo from "../assets/images/csharp.png";
import cppLogo from "../assets/images/cplus.png";

import "./Bio.css";

const Main = () => {
  return (
    <div id="main">
      <header className="mt-5 mb-5">
        <img src={profilePic} alt="Me" className="profile-pic" />
        <h1>I'm Anna, and I'm a software developer.</h1>
      </header>
      <Container className="about-me">
        <Row className="mb-5">
          <Col>
            <img src={jsLogo} alt="JavaScript" className="grid-pic" />
          </Col>
          <Col>
            <img src={reactLogo} alt="React" className="grid-pic" />
          </Col>
          <Col>
            <img src={csLogo} alt="JavaScript" className="grid-pic" />
          </Col>
          <Col>
            <img src={cppLogo} alt="JavaScript" className="grid-pic" />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="grid-description">
              {
                "I'm a full stack web developer with front-end experience using JavaScript, React, Angular, TypeScript, and HTML/CSS -- and back-end experience with C#, C/C++, and SQL server."
              }
            </p>

            <p className="grid-description">
              {
                "I also have professional experience with user-facing technical writing, automated system testing, and customer support, and graduate-level academic experience with NLP and machine learning."
              }
            </p>
            <p className="grid-description emphasized">
              {
                "I am passionate about making software that is easy to use and makes a difference in people's lives."
              }
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
