import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { CiSearch } from "react-icons/ci";
import AddProduct from "../forms/addProduct";

export default function AddProductSheet({ categories }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="px-10 py-3.5 border rounded bg-color-primary text-color-white transition-all ease-in-out duration-200">
          + Add New
        </button>
      </SheetTrigger>
      <SheetContent side="center" className="p-8 overflow-scroll">
        <AddProduct categories={categories} />
      </SheetContent>
    </Sheet>
  );
}
