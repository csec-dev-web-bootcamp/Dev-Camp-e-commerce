import { useCart } from "@app/client/store/cart";
import React from "react";

export default function ProductDetail({ product, children }) {
  const { cartProducts } = useCart();
  const isCarted = cartProducts.find((item) => item.id === product.id);
  return (
    <>
      {isCarted ? (
        <p className="text-3xl text-white bg-bg-cart mb-6   px-3 py-5 block">
          {product.title} have been added to your cart
        </p>
      ) : (
        ""
      )}
      <div className=" relative flex flex-1 gap-10 justify-center items-center">
        <img
          className="object-contain flex-1 w-auto h-96"
          src={`${product.image}`}
        />
        <div className="flex gap-7 flex-col flex-1">
          <h1 className=" text-slate-900 font-extrabold text-4xl">
            {product.title}
          </h1>
          <p className="text-base">{product.description}</p>
          {children}
        </div>
      </div>
    </>
  );
}
