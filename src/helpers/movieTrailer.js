import movieTrailer from "movie-trailer";

export const getMovieTrailerId = async (title) => {
  try {
    const response = await movieTrailer(title);
    const urlParams = new URLSearchParams(new URL(response).search);
    return urlParams.get("v");
  } catch (error) {
    console.error(error);
  }
};
