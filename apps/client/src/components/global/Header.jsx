"use client";
import React from "react";
import Link from "next/link";
import { MdFavoriteBorder } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { useCartStore } from "@app/client/store/cart";
import { Cart } from "./cart";
import Wishlist from "./Wishlist";
const Header = () => {
  
  return (
    <header className="w-full  mx-auto sticky top-0 z-50">
      <nav className="w-full text-sm flex justify-center items-center h-16 bg-gray-50 font-medium text-black gap-10  text-md">
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
          
          <Link href="/customer">
            <li>customer</li>
          </Link>

          {/* <Link href="/dashboard">
            <li>dashbord</li>
          </Link> */}

          <Link href="/admin">Admin</Link>
          {/* <Link href="/admin">
              <select id="gender" name="gender">
                <option value="none" selected><Link href="/admin">Admin</Link></option>
                <option value="dashboard"><Link href="/dashboard">dashboard</Link></option>
                <option value="order"><Link href="/order">Orders</Link></option>
                <option value="other"><Link href="/product">product</Link></option>
                <option value="customer"><Link href="/customer">Customer</Link></option>
                <option value="other"><Link href="/buyer">Buyer</Link></option>
                <option value="buyer"><Link href="/invoice">Invoices</Link></option>
                <option value="other"><Link href="/feedback">Feedback</Link>other</option>
              </select>
          </Link> */}

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

          <Link href="/profile">
            <FiUser size={30} />
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
