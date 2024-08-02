import React, { useState } from "react";
import InputBox from "./common/InputBox";
import MainButton from "./common/MainButton";
import { getAllMovies } from "../helpers/api";

const SearchHeader = ({ setMoviesList, setIsLoading, isLoading }) => {
  const [searchText, setSearchText] = useState("");

  const setSearchHandler = async (event) => {
    event.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    const res = await getAllMovies(searchText);
    if (res?.Response === "True") {
      const movieInformation = res?.Search;
      setMoviesList(movieInformation);
    } else {
      alert(res?.Error);
      setMoviesList([]);
      setSearchText("");
    }

    setIsLoading(false);
  };

  return (
    <div className="w-full bg-black text-white h-[24rem] flex flex-col justify-center items-center gap-16">
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
    </div>
  );
};

export default SearchHeader;
