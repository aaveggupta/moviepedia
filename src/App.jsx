import React, { useState } from "react";
import SearchHeader from "./components/SearchHeader";
import MoviesContainer from "./components/MoviesContainer";

function App() {
  const [moviesList, setMoviesList] = useState([]);

  return (
    <div>
      <SearchHeader setMoviesList={setMoviesList} />
      <MoviesContainer moviesList={moviesList} />
    </div>
  );
}

export default App;
