import React from "react";

const MainButton = ({ buttonTitle, onClick, isLoading }) => {
  return (
    <button
      disabled={isLoading}
      className="bg-red-600 px-5 rounded-md text-xl"
      onClick={onClick}
    >
      {buttonTitle}
    </button>
  );
};

export default MainButton;
