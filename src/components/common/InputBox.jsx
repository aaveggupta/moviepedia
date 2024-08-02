import React from "react";

const InputBox = ({ type, placeholderText, value, setValue, isLoading }) => {
  return (
    <input
      type={type}
      placeholder={placeholderText}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      disabled={isLoading}
      className="bg-blue-400/25 outline-none px-4 py-3 w-[28rem] rounded-md border border-white text-xl"
    />
  );
};

export default InputBox;
