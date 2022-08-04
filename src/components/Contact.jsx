import DescriptionIcon from "@mui/icons-material/Description";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Fade, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../css/Contact.css";

function Contact() {
  // email, linkedin, github
  return (
    <footer id="contact">
      <div>
        <Typography variant="h4" color="white">
          Contact Me
        </Typography>
        <Tooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          title="Email me"
        >
          <IconButton
            component="a"
            onClick={() => window.open("mailto:jlaksana@calpoly.edu")}
            aria-label="Email"
            color="secondary"
          >
            <EmailIcon />
          </IconButton>
        </Tooltip>
        <Link to="#" onClick={() => window.open("mailto:jlaksana@calpoly.edu")}>
          <Typography variant="body1" display="inline">
            jlaksana@calpoly.edu
          </Typography>
        </Link>
      </div>
      <div id="other-links">
        <Typography variant="h5" color="white">
          Other Links
        </Typography>
        <Tooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          title="Connect on LinkedIn"
        >
          <IconButton
            component="a"
            onClick={() => window.open("https://www.linkedin.com/in/jlaksana/")}
            aria-label="Connect on LinkedIn"
            color="secondary"
          >
            <LinkedInIcon />
          </IconButton>
        </Tooltip>
        <Tooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          title="View my GitHub"
        >
          <IconButton
            component="a"
            onClick={() => window.open("https://github.com/jlaksana")}
            aria-label="View my GitHub"
            color="secondary"
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>
        <Tooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          title="View Resume"
        >
          <IconButton
            component="a"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1NRMeL_bOOHDmxIE4lxlELO2si8PuJk6h/view?usp=sharing"
              )
            }
            aria-label="View Resume"
            color="secondary"
          >
            <DescriptionIcon />
          </IconButton>
        </Tooltip>
      </div>
    </footer>
  );
}

export default Contact;
