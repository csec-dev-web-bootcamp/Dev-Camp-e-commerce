import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
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

export function Cart() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="blue" className="items-center">
          Cart
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart review</SheetTitle>
          <SheetTitle>
            <hr />
          </SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>

        <div className="flex m-5">
          <div>
            <img
              src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-01.png"
              alt=""
              className="w-20"
            />
          </div>

          <div className="mx-10">
            <div>rating</div>
            <div>title</div>
            <div>price</div>
          </div>

          <div className="ml-20 my-5">
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
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
