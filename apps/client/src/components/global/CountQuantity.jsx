import React from "react";
import { useCount } from "@app/client/store/count";
import { useCart } from "@app/client/store/cart";
export default function CountQuantity({ product }) {
  const { cartProducts, addProductAmount, minusProductAmount } = useCart();
  const { count, addCount, minusCount } = useCount();
  return (
    <div className="flex gap-4 items-center">
      <button
        className="bg-yellow-600  text-white w-8 h-8 rounded-full"
        onClick={() => (product ? addProductAmount(product.id) : addCount())}
      >
        +
      </button>
      <p className="text-base text-slate-950 font-medium w-2 flex self-center justify-center">
        {product ? product.amount : count}
      </p>
      <button
        className="bg-yellow-600 text-white w-8 h-8 rounded-full"
        onClick={() =>
          product ? minusProductAmount(product.id) : minusCount()
        }
      >
        &minus;
      </button>
    </div>
  );
}
