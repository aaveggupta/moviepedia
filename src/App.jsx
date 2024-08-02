import React, { useState } from "react";
import SearchHeader from "./components/SearchHeader";
import MoviesContainer from "./components/MoviesContainer";

function App() {
  const [moviesList, setMoviesList] = useState([]);
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
}

export default App;
