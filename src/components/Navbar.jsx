import React from "react";
import "../css/Navbar.css";
import { HashLink as Link } from "react-router-hash-link";
// https://www.npmjs.com/package/react-router-hash-link

function Navbar() {
  return (
    <nav className="nav">
      <Link smooth to="#top" className="siteTitle">
        Jonathan Laksana
      </Link>
      <ul>
        <li>
          <Link smooth to="#about">
            About
          </Link>
        </li>
        <li>
          <Link smooth to="#projects">
            Projects
          </Link>
        </li>
        <li>
          <Link smooth to="#contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
