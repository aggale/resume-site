import React from "react";
import { Link } from "react-router-dom";

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
  );
};

export default NavBar;
