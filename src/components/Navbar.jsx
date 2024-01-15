import React, { useState } from "react";
import Input from "./Input";
import Logo from "../assets/Logo";
import Button from "./Button";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi2";
import { FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineShop } from "react-icons/ai";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <>
      <div className="w-full px-4 py-2 sm:p-4 bg-white dark:bg-blue-600 space-y-2 dark:text-white  ">
        <div className="container mx-auto flex items-center justify-between sm:justify-evenly">
          <Link to='/' className="font-semibold flex items-center gap-1">
          <Logo />
          </Link>
          <SearchInput
            type="search"
            placeholder="Search for Products, Brands and More"
            className={`hidden sm:block`}
          />
          <div className="flex items-center gap-1 sm:gap-4">
          <Link to='/' className="font-semibold flex items-center gap-1">
            <HiOutlineHome size={20}/>
            <span className="hidden sm:block">Home</span>
          </Link>
          <Link to='/cart' className="font-semibold flex items-center gap-1">
            <IoCartOutline size={20} />
            <span className="hidden sm:block">Cart</span>
          </Link>
          <Link to='/becomeSeller' className="font-semibold flex items-center gap-1">
            <AiOutlineShop size={20} />
            <span className="hidden sm:block">Become a seller</span>
          </Link>
          <Link to='/login' className="font-semibold flex items-center gap-1">
            <FaRegCircleUser size={20} />
            <span className="hidden sm:block">Login</span>
          </Link>
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
