import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import Logo from "../assets/Logo";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi2";
import { FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineShop } from "react-icons/ai";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import { ProductContext } from "../contexts/ProductContext";
import { authContext } from "../contexts/AuthContext";
import Button from "./Button";

const useDebounce = (func, delay) => {
  let timer = null;
  return () => {
    clearTimeout(timer);
    let context = this;
    timer = setTimeout(() => {
      func.apply(context);
    }, delay);
  };
};

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const { cart } = useContext(CartContext);
  const { getData } = useContext(ProductContext);
  const { loggedIn, setLoggedIn } = useContext(authContext);

  useEffect(
    useDebounce(() => {
      getData(`https://dummyjson.com/products/search?q=${searchText}`);
    }, 500),
    [searchText]
  );

  return (
    <>
      <div className="w-full sticky top-0 z-50 px-4 py-2 sm:p-4 bg-white dark:bg-blue-600 space-y-2 dark:text-white shadow-md ">
        <div className="container mx-auto flex items-center justify-between sm:justify-evenly">
          <Link to="/" className="font-semibold flex items-center gap-1">
            <Logo />
          </Link>
          <SearchInput
            type="search"
            value={searchText}
            placeholder="Search for Products, Brands and More"
            className={`hidden sm:block`}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <div className="flex items-center gap-1 sm:gap-4">
            <Link to="/" className="font-semibold flex items-center gap-1">
              <HiOutlineHome size={20} />
              <span className="hidden sm:block">Home</span>
            </Link>
            <Link
              to="/cart"
              className="font-semibold flex items-center gap-1 relative"
            >
              {loggedIn && (
                <span className="absolute -top-3 left-2 h-5 w-5 rounded-full flex items-center justify-center text-xs border bg-black text-white bg-opacity-60">
                  {cart.length}
                </span>
              )}
              <IoCartOutline size={20} />
              <span className="hidden sm:block">Cart</span>
            </Link>
            <Link
              to="/becomeSeller"
              className="font-semibold flex items-center gap-1"
            >
              <AiOutlineShop size={20} />
              <span className="hidden sm:block">Become a seller</span>
            </Link>
            {loggedIn ? (
              <>
                <Link
                  to="/profile"
                  className="font-semibold flex items-center gap-1"
                >
                  <FaRegCircleUser size={20} />
                  <span className="hidden sm:block">Profile</span>
                </Link>
                <Button
                  type="button"
                  onClick={() => loggedIn && setLoggedIn(false)}
                  className="hidden sm:block"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="font-semibold flex items-center gap-1"
                >
                  <FaRegCircleUser size={20} />
                  <span className="hidden sm:block">Login</span>
                </Link>
              </>
            )}
          </div>
        </div>
        <SearchInput
          type="search"
          placeholder="Search for Products, Brands and More"
          className={`block sm:hidden`}
        />
      </div>
    </>
  );
};

export default Navbar;
