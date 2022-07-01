import React from "react";

import { Grid } from "@mui/material";

import "./Category.css";
import MovieCard from "./MovieCard.js";
import Typography from "@mui/material/Typography";

const Category = ({ categoryData, idx, handleClick, voted }) => {
  return (
    <div className="category-container">
      <Typography
        style={{ backgroundColor: "grey", color: "white", padding: "5px" }}
        variant="h4"
        className="category-header"
      >
        {categoryData.title}
      </Typography>
      <Grid
        container
        justifyContent="center"
        spacing={4}
        style={{
          paddingRight: "10vw",
          paddingLeft: "10vw",
          marginTop: "15px",
        }}
      >
        {categoryData.items.map((info) => (
          <Grid item xs={12} sm={6} md={4} align="center">
            <MovieCard
              voted={voted}
              idx={idx}
              id={info.id}
              title={info.title}
              imageUrL={info.photoUrL}
              handleClick={handleClick}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Category;
