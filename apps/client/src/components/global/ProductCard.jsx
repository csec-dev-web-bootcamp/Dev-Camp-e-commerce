import { useCart } from "@app/client/store/cart";
import Link from "next/link";
import React from "react";
import { cn } from "@app/client/lib/utils";
import { Button, buttonVariants } from "../ui/button";
export default function ProductCard({ categore }) {
  const { addToCart, cartProducts } = useCart();
  function handleAddToCart(product) {
    const exist = cartProducts.find((cart) => cart.id === product.id);
    if (!exist) {
      addToCart(product);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center p-4 border rounded-xl hover:border-slate-950 transition-all cursor-pointer">
      <img src={categore.image} alt="image" className="w-28" />
      <p className="text-center">{categore.title.slice(0, 25)}</p>
      <p className="py-2">{categore.category}</p>
      {/* <Button>Show Detail</Button> */}
      <p className="justify-end">
        {`${categore.rating.rate} ${categore.rating.count}`}
      </p>
      <p>{categore.price}</p>

      <Link
        className={cn(buttonVariants({ variant: "outline" }))}
        href={""}
        onClick={() => {
          handleAddToCart(categore);
        }}
      >
        Add To Cart
      </Link>
    </div>
  );
}
