import axios from "axios";

const BASE_URL = "https://www.omdbapi.com/";

export const getMovieInformation = async (searchText) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${searchText}`
    );
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
