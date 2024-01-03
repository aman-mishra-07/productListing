import React, { useEffect, useState } from "react";
import Product from "../components/product";

const Home = () => {
  const [products, setProducts] = useState([]);
  const getData = async () => {
    try {
      let response = await fetch("https://dummyjson.com/products");
      if (response.status === 200 || response.ok) {
        let productArray = await response.json();
        setProducts(productArray.products);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="w-full min-h-screen bg-slate-200">
        <div className="w-full min-h-screen p-4 sm:px-20 sm:py-10">

          <ul className="w-full min-h-screen grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {products.map((item) => (
              <li key={item.id}>
                <Product itemData={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
