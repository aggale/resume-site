import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import profilePic from "../assets/images/cartoon-me-cutout.png";
import photo from "../assets/images/karlie.jpg";

const Main = () => {
  return (
    <div id="main">
      <img src={profilePic} alt="Me" className="profile-pic" />
      <header className="mt-5 mb-5">
        <h1>I'm Anna and I'm unhinged so I code</h1>
      </header>
      <Container className="side-by-side">
        <Row>
          <Col>
            <p>
              There's so much to know about me like I eat avocados and like to
              smell candles.
            </p>
          </Col>
          <Col>
            <img src={photo} alt="Karlie" className="profile-pic" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
