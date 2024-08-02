import React from "react";
import MovieCard from "./MovieCard";
import PacmanLoader from "react-spinners/PacmanLoader";

const MoviesContainer = ({ moviesList, isLoading }) => {
  return (
    <>
      {!isLoading ? (
        <div className="grid grid-cols-5 gap-20 mx-auto w-[100%] p-12 bg-black">
          {moviesList?.map((movieInfo, index) => (
            <MovieCard
              key={index}
              posterImage={movieInfo?.Poster}
              title={movieInfo?.Title}
            />
          ))}
        </div>
      ) : (
        <div className="mx-auto flex justify-center mt-[12rem]">
          <PacmanLoader
            color="white"
            loading={isLoading}
            size={40}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
    </>
  );
};

export default MoviesContainer;
