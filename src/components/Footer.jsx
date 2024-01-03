import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="w-full bg-gray-600 text-white">
        <div class="container mx-auto p-4  space-y-4">
          <h2 class="text-2xl font-semibold">
            <a href="index.html">Fillcarts Shopping</a>
          </h2>
          <div class="w-full sm:p-8 grid grid-cols-2 gap-8 sm:flex sm:flex-row justify-around">
            <ul class="space-y-2">
              <li class="font-semibold">Get to Know us</li>
              <li class="text-sm hover:underline">
                <a href="#">About Us</a>
              </li>
              <li class="text-sm hover:underline">
                <a href="#">Careers</a>
              </li>
              <li class="text-sm hover:underline">
                <a href="#">Press release</a>
              </li>
            </ul>
            <ul class="space-y-2">
              <li class="font-semibold">Connect with us</li>
              <li class="text-sm hover:underline">
                <a href="https://www.instagram.com">Instagram</a>
              </li>
              <li class="text-sm hover:underline">
                <a href="https://www.facebook.com">Facebook</a>
              </li>
              <li class="text-sm hover:underline">
                <a href="https://www.x.com">Twitter</a>
              </li>
            </ul>
            <ul class="space-y-2">
              <li class="font-semibold">Make Money with us</li>
              <li class="text-sm hover:underline">
                <a href="#">Sell on Fillcarts</a>
              </li>
              <li class="text-sm hover:underline">
                <a href="#">Sell under Fillcarts Accelerator</a>
              </li>
              <li class="text-sm hover:underline">
                <a href="#">Protect and Build Your Brand</a>
              </li>
              <li class="text-sm hover:underline">
                <a href="#">Fillcarts Global Selling</a>
              </li>
            </ul>
            <ul class="space-y-2">
              <li class="font-semibold">Let us help You</li>
              <li class="text-sm hover:underline">
                <a href="#">COVID-19 and FillCarts</a>
              </li>
              <li class="text-sm hover:underline">
                <a href="#">Your Account</a>
              </li>
              <li class="text-sm hover:underline">
                <a href="#">100% Purchase Protection</a>
              </li>
            </ul>
          </div>
          <p class="uppercase p-4 text-center">
            COPYRIGHT &copy; 2020, All Rights reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
