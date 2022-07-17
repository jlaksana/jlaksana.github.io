import React from "react";
import "../css/About.css";
import { Button } from "@mui/material";

function About() {
  return (
    <header className="aboutMe">
      <img
        className="headshot"
        src={process.env.PUBLIC_URL + "headshot.jpg"}
        width="200rem"
        height="200rem"
        alt="My headshot"
      />
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
