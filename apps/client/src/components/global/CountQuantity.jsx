import React from "react";

import { useCart } from "@app/client/store/cart";
export default function CountQuantity({ product }) {
  const { cartProducts, addProductAmount, minusProductAmount } = useCart();

  return (
    <div className="flex gap-4 items-center">
      <button
        className="bg-black  text-white w-8 h-8 rounded-full"
        onClick={() => addProductAmount(product.id)}
      >
        +
      </button>
      <p className="text-lg text-slate-950 font-bold">{product.amount}</p>
      <button
        className="bg-black text-white w-8 h-8 rounded-full"
        onClick={() => minusProductAmount(product.id)}
      >
        &minus;
      </button>
    </div>
  );
}
