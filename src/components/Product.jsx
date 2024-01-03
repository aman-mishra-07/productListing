import React from "react";

const Product = (props) => {
   const {thumbnail, title, description, id,} = props.itemData
  return (
    <div className="w-fit max-w-sm rounded-lg bg-white overflow-hidden shadow-lg shadow-zinc-400">
      <div>
        <img
          src={thumbnail}
          alt={title}
          className="w-full aspect-video object-cover"
        />
      </div>
      <div className="px-3 py-2 flex flex-col gap-1">
        <h3 className="font-semibold line-clamp-1">{title}</h3>
        <p className="text-sm line-clamp-2">{description}</p>
        <button
          className="px-2 p-1 w-fit self-end border text-sm font-semibold rounded-md bg-blue-600 text-white"
        >
          View more..
        </button>
      </div>
    </div>
  );
};

export default Product;
