import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <nav>
      <ul className="nav-bar">
        <li className="nav-item">
          <Link to="/">Bio</Link>
        </li>
        <li className="nav-item">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="nav-item">
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
    // <nav className="navbar">
    //   <Button className="nav-item" size="xxl">
    //     Bio
    //   </Button>
    //   <Button className="nav-item" size="xxl">
    //     Projects
    //   </Button>
    //   <Button className="nav-item" size="xxl">
    //     Blog
    //   </Button>
    //</nav>
  );
};

export default NavBar;
