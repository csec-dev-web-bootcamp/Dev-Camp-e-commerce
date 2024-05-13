import React from "react";
import { X, Delete } from "lucide-react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useCart } from "@app/client/store/cart";
import CountQuantity from "./CountQuantity";
export default function CartItem({ product }) {
  const { removeFromCart } = useCart();
  return (
    <div key={product.id} className="flex mb-5 relative items-center gap-4">
      <img className="w-20 h-20" src={`${product.image}`} alt="" />
      <div>
        <h6 className="text-sm">{product.title}</h6>
        <span>${product.price}</span>
      </div>
      <button
        className="absolute top-0 left-0"
        onClick={() => removeFromCart(product.id)}
      >
        <RiDeleteBin6Line className="h-6 w-6 absolute -top-3 bg-white" />
      </button>
      <CountQuantity product={product} />
    </div>
  );
}
