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
      <div className="flex  shadow-lg">
        <div className="col-span-1 bg-gray-300 p-6 px-9 ">
          <div className="p-4">side bar </div>
          {categories.map(({ Icon, name, slug }, ind) => (
            <Link key={ind} href={`/shop?category=${slug}`}>
              <div className="flex my-3 hover:text-blue-500 border-white-500">
                <div>
                  <Icon />
                </div>
                <div>{name}</div>
              </div>
            </Link>
          ))}
        </div>
        <div className="shadow-lg w-full">
          <FaBars className="cursor-pointer" onClick={handleMenuClick} />
          <p>{children}</p>
        </div>
      </div>
    </>
  );
};

export default About;
