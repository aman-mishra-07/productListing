import React, {useCallback, useEffect, useReducer} from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {cartReducer, ACTION} from './reducers/cartReducer'
import { CartContext } from "./contexts/CartContext";
import BecomeSeller from "./components/BecomeSeller";

const App = () => {
  const [cart, dispatch] = useReducer(
    cartReducer,
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );

  const updateLocalStorage = useCallback(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error(error);
    }
  },[cart]);
  
  useEffect(() => {
    updateLocalStorage()
  }, [cart])

  return (
    <div>
      <CartContext.Provider value={{ cart, dispatch, ACTION }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/becomeSeller" element={<BecomeSeller />}></Route>
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
};

export default App;
