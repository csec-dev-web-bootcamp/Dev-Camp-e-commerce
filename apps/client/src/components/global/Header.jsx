"use client";
import React from "react";
import Link from "next/link";

import { CiSearch } from "react-icons/ci";

import { Cart } from "./cart";
import Wishlist from "./Wishlist";
import CategoriesMenu from "./CategoriesMenu";
import ProfileMenu from "./ProfileMenu";
const Header = () => {
  // const cart = useCartStore((state)=> state.cart);

  return (
    <header className="w-full  mx-auto sticky top-0 z-50">
      <nav className="w-full text-sm flex justify-center items-center h-16 bg-gray-50 font-medium text-black gap-10  text-md">
        <ul className="flex gap-10 items-center">
          <Link href="/">
            <li>Logo</li>
          </Link>
          <CategoriesMenu />
          <Link href="/shop">
            <li>Shop</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <li className="flex relative">
            <input
              type="text"
              placeholder="Search"
              className="border items-center border-slate-200 rounded-md py-3 px-10  shadow-md focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            />
            <CiSearch size={24} className="absolute top-3 right-6" />
          </li>

          <Link href="/contact">
            <li>Contact</li>
          </Link>
          <Link href="/order">
            <li>Order</li>
          </Link>
        </ul>
        <ul className="flex gap-4 items-center">
          <div>
            <Wishlist />
          </div>
          {/* <Link href="">
            <MdFavoriteBorder size={30} />
          </Link> */}
          <div>
            <Cart />
          </div>

          <ProfileMenu />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
