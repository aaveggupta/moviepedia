import React from "react";

const MovieCard = ({ posterImage, title }) => {
  return (
    <div className="flex flex-col gap-4 justify-start items-center">
      <h3 className="text-xl text-white font-semibold">{title}</h3>
      <img
        src={posterImage}
        alt={title}
        className="w-[20rem] h-[24rem] object-fill"
      />
    </div>
  );
};

export default MovieCard;
