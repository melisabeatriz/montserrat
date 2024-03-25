import React from "react";
import { useState } from "react";
import "./navbar.css";

const MenuIcon = ({ showMenu }) => (
  <button className="menu-button" onClick={showMenu}>
    <div className="menu">
      <div className="menu-line"></div>
      <div className="menu-line"></div>
      <div className="menu-line"></div>
    </div>
  </button>
);

const CollapsibleMenu = () => (
  <div className="collapsible-menu">
    <ul>
      <li>About this project</li>
      <li>Get Montserrat (free)</li>
    </ul>
  </div>
);

const NavBar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <nav>
      <p>EN | ES</p>
      <MenuIcon showMenu={() => setIsMenuVisible(true)} />
      {/* {isMenuVisible && <CollapsibleMenu />} */}
      {/* <CollapsibleMenu /> */}
    </nav>
  );
};

export default NavBar;
