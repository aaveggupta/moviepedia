import axios from "axios";

const BASE_URL = "https://www.omdbapi.com/";
const API_KEY = "7266c883";

export const getMovieInformation = async (searchText) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&s=${searchText}`
    );
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
