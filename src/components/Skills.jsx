import { Fade, Tooltip, Typography } from "@mui/material";
import React from "react";
import "../css/Skills.css";
import cLang from "../images/C-lang.png";
import git from "../images/git.png";
import java from "../images/java.svg";
import javascript from "../images/javascript.svg";
import mongo from "../images/mongodb.png";
import mui from "../images/mui.png";
import node from "../images/node.png";
import python from "../images/python.png";
import react from "../images/react.png";

function Skills() {
  return (
    <div id="skills">
      <Typography variant="h4" color="white">
        Skills
      </Typography>
      <div className="skills-grid">
        <Tooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          title="Java"
        >
          <img src={java} alt="Java" height="150px" />
        </Tooltip>
        <Tooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          title="Python"
        >
          <img src={python} alt="Python" height="150px" />
        </Tooltip>
        <Tooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          title="Javascript"
        >
          <img src={javascript} alt="Javascript" height="150px" />
        </Tooltip>
        <Tooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          title="React"
        >
          <img src={react} alt="React" height="150px" />
        </Tooltip>
        <Tooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          title="C"
        >
          <img src={cLang} alt="C" height="150px" />
        </Tooltip>
        <Tooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          title="Node.js"
        >
          <img src={node} alt="Node.js" height="150px" />
        </Tooltip>
        <Tooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          title="Git"
        >
          <img src={git} alt="Git" height="150px" />
        </Tooltip>
        <Tooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          title="MongoDB"
        >
          <img src={mongo} alt="MongoDB" height="150px" />
        </Tooltip>
        <Tooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          title="MaterialUI"
        >
          <img src={mui} alt="MaterialUI" height="150px" />
        </Tooltip>
      </div>
    </div>
  );
}

export default Skills;
