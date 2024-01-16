import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartProduct from "./CartProduct";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <>
      <div className="w-full bg-slate-100 min-h-screen p-4 sm:px-10 md:px-20 sm:py-5 md:py-10 ">
        <div className="container mx-auto space-y-4">
          <h2 className="text-2xl font-bold">Your Cart {cart.length === 0 && 'is Empty :('}</h2>
          <ul className="flex flex-wrap gap-4 items-center justify-center sm:justify-start">
            {cart && cart.map((product) => {
              return (
                <li key={product.id}>
                  <CartProduct product={product}/>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Cart;
