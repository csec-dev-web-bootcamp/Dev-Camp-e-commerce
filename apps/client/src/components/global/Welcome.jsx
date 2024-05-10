import React from "react";
import { useCartStore } from "@app/client/store/cart";

const Welcome = () => {
  // const increment : useCartStore((state) => state.increment())

  return (
    <main className="w-full">
      <div
        className="flex items-center justify-center h-40 text-black bg-orange-400"
        style={{
          // backgroundImage: `url(/assets/black.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <h1 className="text-4xl font-bold">Welcome To E-shop</h1>
      </div>
    </main>
  );
};

export default Welcome;
