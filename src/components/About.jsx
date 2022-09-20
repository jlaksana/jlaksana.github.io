import { Typography } from "@mui/material";
import React from "react";
import "../css/About.css";
import headshot from "../images/headshot.jpg";

function About() {
  // basic info, experiences, mission, hobbies, resume
  return (
    <div id="about">
      <img src={headshot} alt="My headshot" height="300px" />
      <Typography variant="h4">About Me</Typography>
      <Typography variant="body1">
        Hi there, my name is Jonathan Laksana! I was born and raised in
        Sacramento, CA, and currently studying computer science at Cal Poly SLO.
        I am passionate about working with others to create robust and scalable
        software solutions.
      </Typography>
      <Typography variant="body1">
        My software development journey began in high school when I built a
        small maze-solving robot. Building the hardware was cool but the
        software programming was by far the most fascinating to me. During that
        project, I discovered that software engineering was what I wanted to do
        for my career. I have interned at Workday as a Software Application
        Engineer on their HCM product. There I learned the professional software
        engineering discipline, agile methodologies, and proprietary
        technologies. Also, I am a volunteer software developer for the Cal Poly
        Hack4Impact chapter. There, a team and I developed a full stack
        scheduler app. Outside of these experiences, I have developed many other
        projects to expand my skill set. These are viewable below.
      </Typography>
      <Typography variant="body1">
        Thank you for visiting my portfolio! For any questions or inquiries,
        please contact me at jlaksana@calpoly.edu. You may also view my resume{" "}
        <a href="https://bit.ly/3xFk6q5" target="_blank" rel="noreferrer">
          <Typography variant="body1" display="inline">
            here
          </Typography>
        </a>
        .
      </Typography>
    </div>
  );
}

export default About;
