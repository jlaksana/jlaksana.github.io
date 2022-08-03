import { Button, Typography } from "@mui/material";
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../css/HeroLanding.css";

function HeroLanding() {
  /*
        <div>
          <img
            className="headshot"
            src={process.env.PUBLIC_URL + "headshot.jpg"}
            width="200rem"
            height="200rem"
            alt="My headshot"
          />
        </div>
  */
  return (
    <header>
      <div className="hero">
        <div>
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
            to="#about"
            color="primary"
          >
            About Me
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
