"use client";
import { useCart } from "@app/client/store/cart";
import { BsCart2 } from "react-icons/bs";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { X } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
import React from "react";
import { AiTwotonePlusCircle } from "react-icons/ai";
import { AiTwotoneMinusCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import CountQuantity from "./CountQuantity";
import CartItem from "./CartItem";

export function Cart() {
  const { cartProducts, removeProductFromCart } = useCart();
  console.log(cartProducts);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="blue" className="items-center relative">
          <span className="absolute top-0 left-0 text-lg font-bold bg-yellow-600 p-4 w-8 h-8 flex items-center justify-center text-white rounded-full">
            {cartProducts.length}
          </span>
          <BsCart2 size={30} />
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-scroll scroll-my-0">
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

          {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div> */}
        </div>

        {/* <div className="flex m-5"> */}
        {/* <div>
            <img
              src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-01.png"
              alt=""
              className="w-40"
            />
          </div> */}

        {/* <div className="mx-10">
            <div>rating</div>
            <div>title</div>
            <div>price</div>
            <div>{cartProducts.length}</div>
          </div> */}

        {/* <div className="ml-20 my-5">
            <div className="flex ">
              <div className="mr-4">
                <AiTwotoneMinusCircle />
              </div>
              <div className="mr-4">15</div>
              <div>
                <AiTwotonePlusCircle />
              </div>
            </div>
            <div>
              <div>
                <RiDeleteBin6Line />
              </div>
            </div>
          </div>
        </div> */}
        <SheetFooter>
          {/* <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
           */}

           <Link href="shop/carts">
             <Button>View Carts</Button>
           </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
