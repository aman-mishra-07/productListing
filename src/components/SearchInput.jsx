import React from "react";

const SearchInput = ({ type, placeholder, name, onChange, className }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        className={`px-4 py-2 text-black outline-none rounded-md w-full max-w-xl bg-slate-100 ${className}`}
      />
    </>
  );
};

export default SearchInput;
