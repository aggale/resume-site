import React from "react";
import { Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <div className="navbar">
      <Button className="nav-item" size="xxl">
        Bio
      </Button>
      <Button className="nav-item" size="xxl">
        Projects
      </Button>
      <Button className="nav-item" size="xxl">
        Blog
      </Button>
    </div>
  );
};

export default NavBar;
