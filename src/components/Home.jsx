import React, { useContext, useState, useRef, useEffect } from "react";
import Card from "./Card";
import Crousal from "./Crousal";
import { ProductContext } from "../contexts/ProductContext";

const Home = () => {
  const { products, getData } = useContext(ProductContext);

  const [isIntersecting, setIsIntersecting] = useState(false);

  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });
    if(isIntersecting){
      getData(`https://dummyjson.com/products?skip=${products.length}&limit=10`)
    };
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isIntersecting]);
  return (
    <>
      <div>
        <section className="p-4 sm:px-10 sm:py-4 bg-slate-100">
          <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-2">
            {products &&
              products.map((product) => {                
                return (
                  <li key={product.id} >
                    <Card product={product} />
                  </li>
                );
              })}
          <li ref={ref} key='lastelement' className="opacity-0"></li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Home;
