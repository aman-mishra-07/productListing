import React from "react";

const Button = ({ type, children, onClick }) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        // className="px-2 py-1 font-semibold rounded-md flex items-center gap-2"
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {children}
      </button>
    </>
  );
};

export default Button;
