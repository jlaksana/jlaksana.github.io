import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

function ProjectCard({ name, img, description, github }) {
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
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
