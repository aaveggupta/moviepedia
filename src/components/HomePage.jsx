import React, { useState } from "react";
import SearchHeader from "./SearchHeader";
import MoviesContainer from "./MoviesContainer";

const HomePage = ({ setMoviesList, moviesList }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="bg-black h-screen">
      <SearchHeader
        setMoviesList={setMoviesList}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
      />
      <MoviesContainer moviesList={moviesList} isLoading={isLoading} />
    </div>
  );
};

export default HomePage;
