import { Typography } from "@mui/material";
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className="nav" id="navbar">
      <Link smooth to="#top" className="siteTitle">
        <Typography variant="h3">Jonathan Laksana</Typography>
      </Link>
      <ul>
        <li>
          <Link smooth to="#about">
            <Typography variant="subtitle1">About</Typography>
          </Link>
        </li>
        <li>
          <Link smooth to="#projects">
            <Typography variant="subtitle1">Projects</Typography>
          </Link>
        </li>
        <li>
          <Link smooth to="#contact">
            <Typography variant="subtitle1">Contact</Typography>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
