import React from "react";
import { useNavigate } from "react-router-dom";
import { getMovieInformation } from "../helpers/api";
import { getMovieTrailerId } from "../helpers/movieTrailer";

const MovieCard = ({ posterImage, title }) => {
  const navigate = useNavigate();

  const getMovieInfo = async () => {
    const res = await getMovieInformation(title);
    const movieInformation = res;
    const id = await getMovieTrailerId(title);
    const url = `/movie-info?movieName=${movieInformation.Title}&movieCountry=${movieInformation.Country}&trailerId=${id}`;
    navigate(url);
  };

  return (
    <div className="flex flex-col">
      <div
        className="flex flex-col gap-4 justify-start items-center"
        onClick={getMovieInfo}
      >
        <h3 className="text-xl text-white font-semibold">{title}</h3>
        <img
          src={posterImage}
          alt={title}
          className="w-[20rem] h-[24rem] object-fill"
        />
      </div>
    </div>
  );
};

export default MovieCard;
