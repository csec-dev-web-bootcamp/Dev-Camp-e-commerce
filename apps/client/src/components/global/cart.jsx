"use client";
import { useCart } from "@app/client/store/cart";
import { BsCart2 } from "react-icons/bs";
import { Button } from "../ui/button";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import React from "react";

import CartItem from "./CartItem";

export function Cart() {
  const { cartProducts, removeProductFromCart } = useCart();
  console.log(cartProducts);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="blue" className="items-center relative">
          <span className="absolute top-0 right-1 text-sm font-bold border-black border-2 p-2 bg-white  h-3 w-3 flex items-center justify-center text-black rounded-full">
            {cartProducts.length}
          </span>
          <BsCart2 size={30} />
        </Button>
      </SheetTrigger>
      <SheetContent className=" overflow-scroll scroll-my-0">
        <div className="grid gap-4 py-4 mt-10 ">
          {cartProducts.length > 0 ? (
            cartProducts.map((product) => (
              <CartItem key={product.id} product={product} />
            ))
          ) : (
            <h1 className="flex items-center justify-center font-bold text-2xl ">
              {" "}
              Cart Empty
            </h1>
          )}
        </div>

        <SheetFooter>
          {cartProducts.length > 0 ? (
            <div className="flex gap-4">
              <Link href="carts">
                <Button>View Carts</Button>
              </Link>
              <Link href="checkout">
                <Button>Checkout</Button>
              </Link>
            </div>
          ) : (
            ""
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
