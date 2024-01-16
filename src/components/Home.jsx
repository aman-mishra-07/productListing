import React, { useContext} from "react";
import Card from "./Card";
import Crousal from "./Crousal";
import { ProductContext } from "../contexts/ProductContext";

const Home = () => {
  const { products } = useContext(ProductContext)
  return (
    <>
      <div>
        <Crousal />
          <div className="p-4 sm:px-10 sm:py-4 bg-slate-100">
            <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-2">
              {products && products.map((product) => {
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
