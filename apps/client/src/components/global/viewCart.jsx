"use client";
import React from "react";
import { useCart } from "@app/client/store/cart";
import { X } from "lucide-react";

export default function ViewCart() {
  const { cartProducts, removeProductFromCart } = useCart();

  return (
    <main classname="flex flex-col items-center justify-center mx-auto">
      <div className="flex flex-col gap-20 items-center justify-center">
        <h1 className="text-xl">Your Carts</h1>
        <div className="flex gap-20">
          <p>Products</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Sub total</p>
        </div>
      </div>

      <div className="grid gap-4 py-4 mt-10 ">
        {cartProducts.length > 0 ? (
          cartProducts.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-center gap-10 shadow-md mx-auto p-4"
            >
              <button
                className="absolute top-0 left-0"
                onClick={() => removeProductFromCart(product.id)}
              >
                <X className="h-6 w-6" />
              </button>
              <img src={product.image} alt="image" className="w-20" />
              <p>{product.title.slice(0, 20)}</p>
              <p>${product.price}</p>
            </div>
          ))
        ) : (
          <h1 className="flex items-center justify-center font-bold text-2xl ">
            {" "}
            Cart Empty
          </h1>
        )}
      </div>
    </main>
  );
}
