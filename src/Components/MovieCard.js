import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import "./Card.css";
const MovieCard = ({ title, imageUrL, handleClick, idx, id, voted }) => {
  const isVoted = voted.includes(id);
  return (
    <Card
      sx={{
        justifyContent: "center",
        border: isVoted ? `2px solid blue` : "none",
        height: "100%",
        backgroundColor: "#ebedf0",
      }}
    >
      <CardContent>
        <Typography sx={{ backgroundColor: "#ebedf0" }} variant="h6">
          {title}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        image={imageUrL}
        alt={title + " movie poster"}
        sx={{ maxHeight: "82%" }}
      />
      <CardActionArea
        sx={{ backgroundColor: "#ebedf0" }}
        onClick={() => handleClick(title, idx, id)}
      >
        <CardContent sx={{ bottom: "0px", height: "10%" }}>
          <Typography variant="h6" sx={{ color: "blue" }}>
            Vote for this!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
