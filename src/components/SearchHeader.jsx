import React, { useState } from "react";
import InputBox from "./common/InputBox";
import MainButton from "./common/MainButton";
import { getAllMovies } from "../helpers/api";

const SearchHeader = ({ setMoviesList, setIsLoading, isLoading }) => {
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);

  console.log(page);

  const setSearchHandler = async (event, pg) => {
    event.preventDefault();
    if (isLoading || pg === 0) return;

    setIsLoading(true);
    const res = await getAllMovies(searchText, pg ?? 1);
    if (res?.Response === "True") {
      const movieInformation = res?.Search;
      setMoviesList(movieInformation);
      setPage(pg ?? 1);
    } else {
      alert(res?.Error);
      setMoviesList([]);
      setSearchText("");
    }

    setIsLoading(false);
  };

  return (
    <div className="w-full bg-black text-white h-[24rem] flex flex-col justify-center items-center gap-16">
      <a href="/movie-info">click here</a>
      <h1 className="text-6xl font-semibold">
        Search movies, TV shows and more
      </h1>
      <form className="flex gap-4">
        <InputBox
          type="text"
          placeholderText="Type here to search"
          value={searchText}
          setValue={setSearchText}
          isLoading={isLoading}
        />

        <MainButton
          buttonTitle="Search"
          onClick={setSearchHandler}
          isLoading={isLoading}
        />
      </form>
      <div className="flex gap-4">
        <button
          className="bg-white text-black"
          onClick={(e) => setSearchHandler(e, page - 1)}
        >
          PREV
        </button>
        <button
          className="bg-white text-black"
          onClick={(e) => setSearchHandler(e, page + 1)}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default SearchHeader;
