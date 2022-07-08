import React from "react";
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="siteTitle">
        Jonathan Laksana
      </a>
      <ul>
        <li>
          <a href="/about">About Me</a>
        </li>
        <li>
          <a href="/exp">Experience</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
