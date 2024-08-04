import axios from "axios";

const BASE_URL = "https://www.omdbapi.com/";

export const getAllMovies = async (searchText, page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${searchText}&page=${page}`
    );
    return response?.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieInformation = async (movieName) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?apikey=${process.env.REACT_APP_OMDB_API_KEY}&t=${movieName}`
    );
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
