import React from "react";
import header from "../assets/images/websiteheader2.jpg";
import NavBar from "../components/NavBar";

const Header = () => {
  return (
    <div className="App-header">
      <img src={header} alt="Anna Gale" id="header-photo" />
      <NavBar />
    </div>
  );
};

export default Header;
