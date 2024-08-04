import React, { useState } from "react";
import MovieInfo from "./MovieInfo";
import { getMovieInformation } from "../helpers/api";
import { getMovieTrailerId } from "../helpers/movieTrailer";

const MovieCard = ({ posterImage, title }) => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [trailerID, setTrailerId] = useState("");

  const getMovieInfo = async () => {
    const res = await getMovieInformation(title);
    const movieInformation = res;
    setMovieInfo(movieInformation);

    const id = await getMovieTrailerId(title);
    setTrailerId(id);
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
      {movieInfo && <MovieInfo movieInfo={movieInfo} />}
      {trailerID && (
        <div className="mt-4 w-full">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${trailerID}?autoplay=1`}
            title="YouTube video player"
            allowFullScreen
            autop
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
