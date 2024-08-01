import React, { useState } from "react";
import InputBox from "./common/InputBox";
import MainButton from "./common/MainButton";
import { getMovieInformation } from "../helpers/api";

const SearchHeader = ({ setMoviesList }) => {
  const [searchText, setSearchText] = useState("");

  const setSearchHandler = async (event) => {
    event.preventDefault();
    const res = await getMovieInformation(searchText);
    const movieInformation = res?.Search;
    setMoviesList(movieInformation);
  };

  return (
    <div className="w-full bg-black text-white h-[32rem] flex flex-col justify-center items-center gap-16">
      <h1 className="text-6xl font-semibold">
        Search movies, TV shows and more
      </h1>
      <form className="flex gap-4">
        <InputBox
          type="text"
          placeholderText="Type here to search"
          value={searchText}
          setValue={setSearchText}
        />
        <MainButton buttonTitle="Search" onClick={setSearchHandler} />
      </form>
    </div>
  );
};

export default SearchHeader;
