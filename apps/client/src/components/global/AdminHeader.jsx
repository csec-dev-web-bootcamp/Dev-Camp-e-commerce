"use client";
import Link from "next/link";
import AddProduct from "./AddProduct";
import { getMe } from "@app/client/data/users";
import { FaUser } from "react-icons/fa";
import Greeting from "../user/Greeting";
import Search from "../admin/Search";
import { CiSearch } from "react-icons/ci";
import AddProductSheet from "./AddProductSheet";
import { getManyCategories } from "@app/client/data/categories";
import { useState, useEffect } from "react";
import AdminHeaderMenu from "./AdminHeaderMenu";
import Image from "next/image";
import { logout } from "@app/client/data/auth";

export default function AdminHeader() {
  const [categories, setCategories] = useState([]);
  useEffect(function () {
    async function getCategories() {
      const data = await getManyCategories();
      setCategories(data);
    }
  });
  // const user = await getMe();
  const handleLogout = async () => {
    const result = await logout();
    if (result.message) {
      // Redirect to the login page or home page after logout
      router.push("/");
    } else {
      // Handle logout error if necessary
      console.error(result.error);
    }
  };
  return (
    <header className="w-full  mx-auto  duration-300 z-50 sticky  top-0 shadow-md">
      <nav className="w-full text-sm flex  items-center justify-between h-24  font-medium text-black gap-10  text-md">
        <ul className="flex gap-10 items-center justify-between w-full">
          <li>
            {" "}
            <img
              src="https://new.axilthemes.com/demo/template/etrade/assets/images/logo/logo.png"
              alt="logo"
            />
          </li>
          <div className="relative ">
            <input
              type="text"
              placeholder="Search here..."
              className="border border-color-light py-2.5 px-20 rounded-xl focus:outline-none"
            />
            <CiSearch
              size={24}
              className="absolute top-1/2 -translate-y-1/2 right-4"
            />
          </div>

          <div className="flex gap-4 items-center mr-4">
            <AddProductSheet categories={categories} />
            <FaUser size={30} className="rounded-full" />
            <div className="flex items-center justify-center flex-col">
              <Greeting fullName={true} />
              <span className="text-sm text-color-body">ADMIN</span>
            </div>
          </div>
        </ul>
      </nav>
    </header>
  );
}

// export default Header;
