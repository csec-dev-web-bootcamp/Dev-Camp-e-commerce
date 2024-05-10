import React from "react";
import { X } from "lucide-react";
import { useCart } from "@app/client/store/cart";
export default function CartItem({ product }) {
  const { removeProductFromCart } = useCart();
  return (
    <div key={product.id} className="flex mb-5 relative items-center gap-4">
      <img className="w-20 h-20" src={`${product.image}`} alt="" />
      <div>
        <h6 className="text-sm">{product.title}</h6>
        <span>${product.price}</span>
      </div>
      <button
        className="absolute top-0 left-0"
        onClick={() => removeProductFromCart(product.id)}
      >
        <X className="h-6 w-6" />
      </button>
    </div>
  );
}
