import React from "react";
import NavBar from "../components/NavBar";
import header from "../assets/images/websiteheadersmall.jpg";

const Header = () => {
  return (
    <div className="App-header">
      <img src={header} alt="Anna Gale" id="header-photo" />
      <NavBar />
    </div>
  );
};

export default Header;
