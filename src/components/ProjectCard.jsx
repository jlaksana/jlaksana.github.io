import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

function ProjectCard({ name, img, description, github, link }) {
  return (
    <Card variant="outlined" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        src={process.env.PUBLIC_URL + img}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          component="a"
          onClick={() => window.open(github)}
          color="primary"
          aria-label="link to GitHub source code"
        >
          <GitHubIcon />
        </IconButton>
        {link ? (
          <IconButton
            component="a"
            onClick={() => window.open(link)}
            color="primary"
            aria-label="live link"
          >
            <LaunchIcon />
          </IconButton>
        ) : null}
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
