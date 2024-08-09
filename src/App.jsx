import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hello from "./components/Hello";
import HomePage from "./components/HomePage";
import MovieInfo from "./components/MovieInfo";

function App() {
  const [moviesList, setMoviesList] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage setMoviesList={setMoviesList} moviesList={moviesList} />
          }
        />
        <Route path="/hello" element={<Hello />} />
        <Route path="/movie-info" element={<MovieInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
