import React from "react";
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
    Icon: LiaBuysellads,
    name: "Buyer",
    Arrow: IoIosArrowRoundForward,
    slug: "Buyers",
    href: "/admin/buyer",
  },
  {
    Icon: MdOutlinePeopleAlt,
    name: "Customer",
    Arrow: IoIosArrowRoundForward,
    slug: "Customers",
    href: "/admin/customer",
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
  {
    Icon: BsFileBarGraph,
    name: "Buyer",
    Arrow: IoIosArrowRoundForward,
    slug: "Buyers",
  },
  {
    Icon: BsFileBarGraph,
    name: "Buyer",
    Arrow: IoIosArrowRoundForward,
    slug: "Buyers",
  },
  {
    Icon: BsFileBarGraph,
    name: "Buyer",
    Arrow: IoIosArrowRoundForward,
    slug: "Buyers",
  },
  {
    Icon: BsFileBarGraph,
    name: "Buyer",
    Arrow: IoIosArrowRoundForward,
    slug: "Buyers",
  },
  {
    Icon: BsFileBarGraph,
    name: "Buyer",
    Arrow: IoIosArrowRoundForward,
    slug: "buyers",
  },
  {
    Icon: BsFileBarGraph,
    name: "Buyer",
    Arrow: IoIosArrowRoundForward,
    slug: "buyers",
  },
  {
    Icon: BsFileBarGraph,
    name: "Buyer",
    Arrow: IoIosArrowRoundForward,
    slug: "Buyers",
  },
  {
    Icon: BsFileBarGraph,
    name: "Buyer",
    Arrow: IoIosArrowRoundForward,
    slug: "Buyers",
  },
  {
    Icon: BsFileBarGraph,
    name: "Buyer",
    Arrow: IoIosArrowRoundForward,
    slug: "Buyers",
  },
];

export default function Layout({ children }) {
  return (
    <div>
      <div className="flex w-screen bg-gray-100 shadow-sm">
        <div className="mx-20 my-5">
          <h1 className="text-3xl">Admin</h1>
        </div>

        <div className="flex mx-48 my-5">
          <div className="mx-10">
            <h2 className="text-xl ">Overview</h2>
          </div>

          <div className="flex bg-white justify-center rounded">
            <div></div>
            <div>
              <form action="">
                <input
                  type="text"
                  placeholder="Search"
                  className="border items-center border-slate-200 rounded-md py-3 px-10  shadow-md focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                />
                <CiSearch size={24} className="absolute top-3 right-6" />
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-end my-5">
          <div className="mx-5 ">
            <IoIosNotificationsOutline className="w-7 h-7" />
          </div>
          <div className="mx-5 ">
            <BsCart2 className="w-7 h-7" />
          </div>
          <div className="mx-5  bg-red-500 py-2 px-5 rounded-md text-white">
            <span>+</span>
            <button>Add Product</button>
          </div>
        </div>
      </div>
      <div className="flex h-screen  bg-gray-100 ">
        <div className="  w-1/3  flex justify-center">
          <div className="flex">
            <div className="">
              <div className=" w-full h-full  scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300  overflow-y-scroll">
                <div className="border items-center bg-white rounded-md py-4 px-16  shadow-md flex hover:text-blue-500 mb-2">
                  <div>
                    <MdManageAccounts className="flex justify-items-start" />
                  </div>
                  <div>Sales Manager</div>
                </div>
                <span className="flex justify-items-start px-16 ">
                  E-comerce
                </span>

                <Link href="/admin/dashboard">
                  <div className="border  bg-white rounded-full py-3 px-16  shadow-md flex hover:text-blue-500 my-5">
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
                    <div className=" items-center   py-3 px-20     flex hover:text-blue-500 mb-3">
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
        <div className="bg-gray-50 w-full h-full overflow-y-scroll">
          {children}
        </div>
      </div>
    </div>
  );
}
