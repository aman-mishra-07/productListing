import React from "react";

const View = () => {
  return (
    <div class="flex min-h-screen w-full gap-2 sm:px-20 sm:py-10">
      <div class="flex-1 space-y-2 border">
        <div>
          <img
            src="https://i.dummyjson.com/data/products/1/1.jpg"
            alt="img"
            class="w-full"
          />
        </div>
        <div class="w-full overflow-hidden border"></div>
      </div>
      <div class="flex-1 border">
        <h2 class="text-2xl font-semibold">iPhone 9</h2>
        <p>An apple mobile which is nothing like apple</p>
        <p>Price : 549</p>
        <p>4.69</p>
        <p>stock : 94</p>
        <p>Brand : Apple</p>
        <p>category : smartphones</p>

        <button type="button" class="w-full bg-blue-600 px-2 py-1 text-white">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default View;
