"use client";
import React, { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { MdManageAccounts } from "react-icons/md";
import { BsFileBarGraph } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";
import { PiCarProfileLight } from "react-icons/pi";
import { LiaBuysellads } from "react-icons/lia";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { PiInvoiceThin } from "react-icons/pi";
import { VscListUnordered } from "react-icons/vsc";
import { MdOutlineFeedback } from "react-icons/md";
import Header from "../../components/global/Header";
import Link from "next/link";
import { AiFillSignal } from "react-icons/ai";

const sideBar = [
  {
    Arrow: IoIosArrowRoundForward,
    Icon: VscListUnordered,
    name: "Orders",
    slug: "Orders",
    href: "/admin/order",
  },
  {
    Arrow: IoIosArrowRoundForward,
    Icon: PiCarProfileLight,
    name: "Products",
    slug: "Products",
    href: "/admin/product",
  },
  {
    Icon: MdOutlinePeopleAlt,
    name: "Customer",
    Arrow: IoIosArrowRoundForward,
    slug: "Customers",
    href: "/admin/customer",
  },
  {
    Icon: LiaBuysellads,
    name: "Buyer",
    Arrow: IoIosArrowRoundForward,
    slug: "Buyers",
    href: "/admin/buyer",
  },

  {
    Icon: PiInvoiceThin,
    name: "Invoice ",
    Arrow: IoIosArrowRoundForward,
    slug: "Invoice",
    href: "/admin/invoices",
  },
  {
    Icon: MdOutlineFeedback,
    name: "Feedback",
    Arrow: IoIosArrowRoundForward,
    slug: "Feedback",
    href: "/admin/feedbacks",
  },
  {
    Icon: BsFileBarGraph,
    name: "Buyer",
    Arrow: IoIosArrowRoundForward,
    slug: "Buyers",
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <div className="flex">
        <div className="bg-gray-100  scrollbar-thumb-sky-700 scrollbar-track-sky-300  overflow-y-scroll fixed w-1/4  px-10">
          <div className="flex">
            <div className="">
              <div className=" w-full h-full  scrollbar ">
                <span className="flex  px-16 ">E-comerce</span>

                <Link href="/admin/dashboard">
                  <div className="border  bg-white rounded-full py-3 pl-4   shadow-md flex  hover:bg-blue-200 my-5">
                    <div>
                      {" "}
                      <AiFillSignal className="w-7 h-7 mr-4" />{" "}
                    </div>
                    <div>Dashboard</div>
                  </div>
                </Link>

                {sideBar.map(({ Icon, name, slug, href }, ind) => (
                  //
                  <Link key={ind} href={`${href ? href : ""}`}>
                    <div className="    py-3 px-20     flex hover:bg-blue-200 mb-3">
                      <div>
                        {" "}
                        <Icon className="w-7 h-7 mr-3" />{" "}
                      </div>
                      <div>{name}</div>
                      {/* <div><Arrow/></div> */}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/*  */}
        </div>
        <div className="  bg-white fixed w-3/4 right-0  h-full overflow-y-scroll overflow-x-hidden">
          {children}
        </div>
      </div>
    </>
  );
}
