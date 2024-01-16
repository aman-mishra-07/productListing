import React from "react";

const Input = ({ type, placeholder, name, onChange }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        className='block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6'
      />
    </>
  );
};

export default Input;
