"use client";
import { useCart } from "@app/client/store/cart";
import { BsCart2 } from "react-icons/bs";
import { Button } from "../ui/button";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import React from "react";

import CartItem from "./CartItem";
import CurrencyFormat from "./currencyFormater";

export function Cart() {
  const { cartProducts, removeProductFromCart } = useCart();
  const getCartProductsFromSession = () => {
    const storedState = sessionStorage.getItem("cart-products");
    if (storedState) {
      try {
        const parsedState = JSON.parse(storedState);
        return parsedState.state.cartProducts || [];
      } catch (error) {
        console.error(
          "Failed to parse cart-products from sessionStorage:",
          error
        );
        return [];
      }
    }
    return [];
  };
  const cart = getCartProductsFromSession();
  const subtotalPrice = cartProducts
    .map((product) => product.totalPrice)
    .reduce((a, b) => a + b, []);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="blue" className="items-center relative">
          <span className="absolute bg-color-primary top-0 right-1 text-xs font-bold  border-2 p-2  h-3 w-3 flex items-center justify-center text-white rounded-full">
            {cartProducts.length}
          </span>
          <BsCart2 className="" size={30} />
        </Button>
      </SheetTrigger>
      <SheetContent className="p-8 overflow-scroll ">
        <SheetTitle className="text-xl text-color-dark font-medium">
          Cart Review
        </SheetTitle>

        <div className="grid gap-4 py-4 mt-10 ">
          {cartProducts.length > 0 ? (
            cartProducts.map((product) => (
              <CartItem key={product.id} product={product} />
            ))
          ) : (
            <h1 className="flex items-center justify-center font-bold text-color-light ">
              {" "}
              Cart Empty
            </h1>
          )}
        </div>
        {cartProducts.length > 0 ? (
          <>
            <div className="flex justify-between text-xl my-5 font-bold">
              <h3 className="">Subtotal</h3>
              <p>
                <CurrencyFormat amount={subtotalPrice} />
              </p>
            </div>
            <SheetFooter>
              <div className="flex justify-between gap-4 w-full">
                <Link href="/carts">
                  <button className="bg-color-primary px-7 py-3 rounded text-white">
                    View Carts
                  </button>
                </Link>
                <Link href="/checkout">
                  <button className="bg-color-secondary px-7 py-3 rounded text-white">
                    Checkout
                  </button>
                </Link>
              </div>
            </SheetFooter>
          </>
        ) : (
          ""
        )}
      </SheetContent>
    </Sheet>
  );
}
