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

const about = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isCollapsed, setIsCollapsed } = useCollapsed();
  const { selectedMenuItem, setSelectedMenuItem } = useSelectedMenu();

  const handleMenuClick = (menuItem) => {
    setSelectedMenuItem(menuItem.key);
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Ensure state update
  };

  return (
    <>
      <div className="flex  shadow-lg h-screen scrollbar-thumb-sky-700 scrollbar-track-sky-300">
        <div className="col-span-1 bg-gray-300 p-6 px-9 ">
          <div className="p-4">side bar </div>
          <Link href="/shop/mensClothing">
            <div className="flex my-3 hover:text-blue-500 border-white-500">
              <div>
                <MdManageAccounts />
              </div>
              <div>Male Cloth</div>
            </div>
          </Link>
          <Link href="/shop/womenClothing">
            <div className="flex mb-3 hover:text-blue-500 border-white-500">
              <div>
                <GiFemaleVampire />
              </div>
              <div>Female Cloth</div>
            </div>
          </Link>
          <Link href="/shop/jewelery">
            <div className="flex mb-3 hover:text-blue-500 border-white-500">
              <div>
                <GiBigDiamondRing />
              </div>
              <div>Jewllery</div>
            </div>
          </Link>
          <Link href="/shop/electronics">
            <div className="flex mb-3 hover:text-blue-500 border-white-500">
              <div>
                <FcElectronics />
              </div>
              <div>Electronics</div>
            </div>
          </Link>
        </div>
        <div className="shadow-lg w-full h-screen scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300  overflow-y-scroll">
          <FaBars className="cursor-pointer" onClick={toggleSidebar} />
          <p>{children}</p>
        </div>
      </div>
     
    </>
  );
};

export default about;
