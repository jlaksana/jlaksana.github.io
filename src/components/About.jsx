import React from "react";
import "../css/About.css";
import headshot from "../assets/headshot.jpg";
import { Button } from "@mui/material";

function About() {
  return (
    <header className="aboutMe">
      <img src={headshot} width="20%" height="20%" alt="My headshot" />
      <div>
        <h1>Hi, I'm Jonathan</h1>
        <h3>
          I am a third-year computer science student at Cal Poly SLO. Highly
          motivated, dependable, and eager to learn - my goal is to become the
          best software engineer that I can be.
        </h3>
        <Button>Resume</Button>
        <Button>Contact</Button>
      </div>
    </header>
  );
}

export default About;
