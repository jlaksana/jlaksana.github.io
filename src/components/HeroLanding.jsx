import React from "react";
import "../css/HeroLanding.css";
import { Button, Typography } from "@mui/material";

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
            variant="contained"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1NRMeL_bOOHDmxIE4lxlELO2si8PuJk6h/view?usp=sharing"
              )
            }
            color="primary"
          >
            My Resume
          </Button>
          <Button
            variant="contained"
            onClick={() => window.open("mailto:jonathanalaksana@gmail.com")}
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
