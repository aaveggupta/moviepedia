import React from "react";

const MovieInfo = ({ movieInfo }) => {
  console.log(movieInfo);
  return (
    <div className="text-white">
      <h1>title: {movieInfo?.Title}</h1>
      <h1>country: {movieInfo?.Country}</h1>
    </div>
  );
};

export default MovieInfo;
