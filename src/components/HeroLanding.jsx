import { Button, Typography } from "@mui/material";
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../css/HeroLanding.css";

function HeroLanding() {
  return (
    <header>
      <div className="hero">
        <div className="heroContent">
          <Typography variant="h3" color="white">
            Hi, I'm Jonathan
          </Typography>
          <Typography variant="h5" color="white">
            Computer science student at Cal Poly SLO | Aspiring software
            engineer
          </Typography>
          <Button
            component={Link}
            variant="contained"
            smooth
            to="#projects"
            color="primary"
          >
            Projects
          </Button>
          <Button
            component={Link}
            variant="contained"
            smooth
            to="#contact"
            color="primary"
          >
            Contact Me
          </Button>
        </div>
      </div>
    </header>
  );
}

export default HeroLanding;
