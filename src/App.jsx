import React, { useCallback, useEffect, useReducer, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { cartReducer, ACTION } from "./reducers/cartReducer";
import { CartContext } from "./contexts/CartContext";
import { ProductContext } from "./contexts/ProductContext";
import { authContext } from "./contexts/AuthContext";
import BecomeSeller from "./components/BecomeSeller";
import Login from "./components/Login";
import axios from "axios";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Profile from "./components/Profile";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, dispatch] = useReducer(
    cartReducer,
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );

  const getData = async (api) => {
    try {
      const response = await axios.get(api);
      if (response.status === 200) {
        const data = response.data;
        setProducts([...products, ...data.products]);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData("https://dummyjson.com/products/");
  }, []);
  const showToast = (message) => toast(message);

  const updateLocalStorage = useCallback(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error(error);
    }
  }, [cart]);

  useEffect(() => {
    updateLocalStorage();
  }, [cart]);

  return (
    <div>
      <authContext.Provider value={{ loggedIn, setLoggedIn, showToast }}>
        <ProductContext.Provider value={{ products, setProducts, getData }}>
          <CartContext.Provider value={{ cart, dispatch, ACTION }}>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/cart"
                  element={
                    <ProtectedRoutes>
                      <Cart />
                    </ProtectedRoutes>
                  }
                ></Route>
                <Route path="/becomeSeller" element={<BecomeSeller />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
              </Routes>
              <ToastContainer />
            </BrowserRouter>
          </CartContext.Provider>
        </ProductContext.Provider>
      </authContext.Provider>
    </div>
  );
};

export default App;
