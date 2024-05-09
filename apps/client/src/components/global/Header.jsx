"use client"
import React from "react";
import Link from "next/link";
import { MdFavoriteBorder } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";

import { useCartStore } from "@app/client/store/store";

const Header = () => {

  // const cart = useCartStore((state)=> state.cart);

  return (
    <header className="w-full  mx-auto ">
      <nav className="w-full flex justify-center items-center h-16 bg-gray-50 font-semibold text-black gap-10 shadow-md  text-md">
        <ul className="flex gap-20 items-center">
          <Link href="/">
            <li>Logo</li>
          </Link>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/shop">
            <li>Shop</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
         <li className="flex relative">
         
         <input type="text" placeholder="Search" className="border items-center border-slate-200 rounded-md py-3 px-10  shadow-md focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1 sm:text-sm" />
         <CiSearch size={24} className="absolute top-3 right-6"/>
         </li>

          <Link href="/contact">
            <li>Contact</li>
          </Link>
          <Link href="/order">
            <li>Order</li>
          </Link>
        </ul>
        <ul className="flex gap-4 items-center">
          <Link href="/cart">
            <MdFavoriteBorder size={30} />
          </Link>
          <Link href="/cart">
            <div className="flex items-center justify-center">
            {/* <span className="bg-yellow-500 text-white p-4">{cart}</span> */}
            <BsCart2 size={30} />
            </div>
          </Link>

          <Link href="/profile">
            <FiUser size={30} />
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
