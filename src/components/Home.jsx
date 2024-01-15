import React, { useEffect, useReducer, useState } from "react";
import products from "./Products";
import Card from "./Card";
import Crousal from "./Crousal";

const Home = () => {
  return (
    <>
      <div>
        <Crousal />
          <div className="p-4 sm:px-10 sm:py-4 bg-slate-100">
            <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-white p-2">
              {products.map((product) => {
                return (
                  <li key={product.id}>
                    <Card product={product} />
                  </li>
                );
              })}
            </ul>
          </div>

      </div>
    </>
  );
};

export default Home;
