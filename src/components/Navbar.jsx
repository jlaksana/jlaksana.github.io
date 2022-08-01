import React from "react";
import "../css/Navbar.css";
import { HashLink as Link } from "react-router-hash-link";
import { Typography } from "@mui/material";

function Navbar() {
  return (
    <nav className="nav" id="navbar">
      <Link smooth to="#top" className="siteTitle">
        <Typography variant="h3">Jonathan Laksana</Typography>
      </Link>
      <ul>
        <li>
          <Link smooth to="#about">
            <Typography variant="h6">About</Typography>
          </Link>
        </li>
        <li>
          <Link smooth to="#projects">
            <Typography variant="h6">Projects</Typography>
          </Link>
        </li>
        <li>
          <Link smooth to="#contact">
            <Typography variant="h6">Contact</Typography>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
