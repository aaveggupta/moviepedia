import React from "react";
import { Navigate, useSearchParams } from "react-router-dom";

const MovieInfo = () => {
  const [searchParams] = useSearchParams();

  const trailerId = searchParams.get("trailerId");
  const movieName = searchParams.get("movieName");
  const movieCountry = searchParams.get("movieCountry");

  if (!trailerId || !movieName || !movieCountry) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="text-black h-screen bg-pink-200 flex justify-center items-center">
      <div className="text-2xl flex flex-col text-center">
        <h1>title: {movieName}</h1>
        <h1>country: {movieCountry}</h1>
        {trailerId && (
          <div className="mt-4 w-full">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${trailerId}?autoplay=1`}
              title="YouTube video player"
              allowFullScreen
              autop
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieInfo;
