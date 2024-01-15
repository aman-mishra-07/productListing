import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { ACTION } from "../reducers/cartReducer";

const CartProduct = ({ product }) => {
  const { dispatch } = useContext(CartContext);
  const handleRemoveFomCart = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTION.Remove,
      payload: product,
    });
  };

  const increaseQty = () => {
    dispatch({
        type: ACTION.Increase,
        payload: product,
      });
  }
  const decreaseQty = () => {
    dispatch({
        type: ACTION.Decrease,
        payload: product,
      });
  }

  return (
    <div>
      <div className="w-80 sm:w-96 rounded-lg shadow-md shadow-zinc-200 hover:shadow-zinc-400 bg-white overflow-hidden flex">
        <img
          src={product.thumbnail}
          alt={product.description}
          className="w-32 aspect-square object-cover"
        />
        <div className="p-2 flex-1 flex flex-col justify-between sm:gap-2">
          <a href="/">
            <h5 className="text-xl font-semibold tracking-tight line-clamp-1 text-gray-900 dark:text-white">
              {product.title}
            </h5>
          </a>
          <div className="relative w-fit">
            <button type="button" className="absolute left-2 font-bold" onClick={decreaseQty}>-</button>
          <input type="number" readOnly value={product.qty}
          className="border w-16 text-center outline-none" />
            <button type="button" className="absolute right-2 font-bold" onClick={increaseQty}>+</button>
          </div>
          <div className="flex justify-between">
            <span className="text-xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              ${product.price}
            </span>
            <button
              onClick={handleRemoveFomCart}
              type="button"
              className="font-semibold self-end"
            >
              remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
