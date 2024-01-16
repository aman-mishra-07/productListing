import React, { useState, useContext } from "react";
import Logo from "../assets/Logo";
import { Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import { authContext } from "../contexts/AuthContext";

const Login = () => {
  const { setLoggedIn } = useContext(authContext);
  const [user, setUser] = useState({});

  const handleInputchange = (e) => {
    const target = e.target;
    const targetValue = target.value;
    const targetName = target.name;
    setUser({
      ...user,
      [targetName]: targetValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };
  return (
    <>
      <div className="w-full h-96 sm:min-h-screen flex items-center justify-center sm:bg-slate-100">
        <div className="w-full max-w-xs sm:max-w-2xl flex shadow-lg shadow-slate-800 bg-white">
          <div className="hidden sm:block flex-1 relative">
            <div className="absolute inset-8 loginLogo flex items-end justify-center">
              <h2 className="font-semibold text-blue-600">
                Login to Fillcarts to fill your carts
              </h2>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex-1 ">
            <div className="p-8 flex flex-col gap-4 ">
              <span className="text-blue-800">
                <Logo />
              </span>
              <h2 className=" font-semibold text-xl">Login</h2>
              <Input
                type="email"
                name="email"
                placeholder="email"
                onChange={handleInputchange}
              />
              <Input
                type="password"
                name="password"
                placeholder="password"
                onChange={handleInputchange}
              />
              <div className=" flex flex-col space-y-2">
                <Button type="submit">Login</Button>
                <Link to="/" className="text-center">
                  Skip Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
