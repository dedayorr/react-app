import React from "react";

import "./Movies.css";

export const Movies = ({movies}) => {

  return (
    <>
    
    <div className="container">
    
      <div className="movie">
        <img
          src={
            movies.Poster !== "N/A"
              ? movies.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movies.Title}
        />
    
        <div className="span">
          <span>{movies.Type}</span>
          <h3>{movies.Title}</h3>
          <p>{movies.Year}</p>
        </div>
      </div>
    </div>
    </>
  );
};
