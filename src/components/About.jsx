import { Typography } from "@mui/material";
import React from "react";
import "../css/About.css";
import headshot from "../images/headshot.jpg";

function About() {
  return (
    <div id="about">
      <img src={headshot} alt="My headshot" height="300px" />
      <div>
        <Typography variant="h4">About Me</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </div>
    </div>
  );
}

export default About;
