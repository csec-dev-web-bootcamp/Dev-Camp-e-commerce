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
import { MdFavoriteBorder } from "react-icons/md";
import { useWishlist } from "@app/client/store/wishlist";
import WishlistItem from "./WishlistItem";

export default function Wishlist() {
  const { wishlist } = useWishlist();
  console.log(wishlist);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="blue" className="items-center relative">
          <MdFavoriteBorder size={30} />
        </Button>
      </SheetTrigger>
      <SheetContent side={"bottom"} className="p-24 overflow-scroll ">
        <SheetTitle className="mb-6">My Wish List on eTrade</SheetTitle>
        <div className="w-full bg-wishlist-header">
          <div className="grid grid-cols-3 w-3/4  place-items-center p-5 text-xl ">
            <h1 className="-translate-x-14">Product</h1>
            <h1>Unit Price</h1>
            <h1>Status</h1>
          </div>
        </div>
        {wishlist.map((item) => (
          <WishlistItem key={item.id} item={item} />
        ))}
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
