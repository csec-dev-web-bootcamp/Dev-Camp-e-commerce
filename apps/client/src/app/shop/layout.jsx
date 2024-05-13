"use client"; // New line at the top
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { GiFemaleVampire } from "react-icons/gi";
import { FcElectronics } from "react-icons/fc";
import { GiBigDiamondRing } from "react-icons/gi";
import Link from "next/link";
import { useCollapsed } from "@app/client/store/collapse";
import { useSelectedMenu } from "@app/client/store/selectedMenuItem";

const categories = [
  {
    slug: "mensClothing",
    Icon: MdManageAccounts,
    name: "Male Cloth",
  },
  {
    slug: "womenClothing",
    Icon: GiFemaleVampire,
    name: "Female Cloth",
  },
  {
    slug: "electronics",
    Icon: GiBigDiamondRing,
    name: "Electronics",
  },
  {
    slug: "jewelery",
    Icon: MdManageAccounts,
    name: "Jewelery",
  },
];
const About = ({ children }) => {
  const { isCollapsed, setIsCollapsed } = useCollapsed();
  const { selectedMenuItem, setSelectedMenuItem } = useSelectedMenu();

  const handleMenuClick = (menuItem) => {
    setIsCollapsed(menuItem.key);
  };

  return (
    <>
      <div className="w-full h-full">
        <div className="flex justify-around m-10">
          {categories.map(({ Icon, name, slug }, ind) => (
            <Link key={ind} href={`/shop?category=${slug}`}>
              <div className="flex px-3 py-4 bg-wishlist-header justify-center items-center gap-2 my-3 hover:text-blue-500 border-white-500">
                <div>
                  <Icon />
                </div>
                <div>{name}</div>
              </div>
            </Link>
          ))}
        </div>
        <div className="h-full w-5/6 m-auto">{children}</div>
      </div>
    </>
  );
};

export default About;
