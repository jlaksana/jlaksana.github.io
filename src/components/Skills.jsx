import { Typography } from "@mui/material";
import React from "react";
import "../css/Skills.css";
import java from "../images/java.svg";
import python from "../images/python.png";
import javascript from "../images/javascript.svg";
import react from "../images/react.png";
import cLang from "../images/C-lang.png";
import node from "../images/node.png";
import git from "../images/git.png";
import mui from "../images/mui.png";

function Skills() {
  // python, java, Javascript, C, React, Node, GitHub, MongoDB
  return (
    <div id="skills">
      <Typography variant="h3" color="white">
        Skills
      </Typography>
      <div className="skills-grid">
        <img src={java} alt="Java" height="200px" />
        <img src={python} alt="Python" height="200px" />
        <img src={javascript} alt="Javascript" height="200px" />
        <img src={react} alt="React" height="200px" />
        <img src={cLang} alt="C" height="200px" />
        <img src={node} alt="Node.js" height="200px" />
        <img src={git} alt="Git" height="200px" />
        <img src={mui} alt="MaterialUI" height="200px" />
      </div>
    </div>
  );
}

export default Skills;
