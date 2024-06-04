"use client";
import AddProduct from "@app/client/components/forms/addProduct";
import CurrencyFormat from "@app/client/components/global/currencyFormater";
import { getManyOrders } from "@app/client/data/order.service";
import { getManyProducts } from "@app/client/data/products";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FaCoffee, FaDownload } from "react-icons/fa";
import * as XLSX from "xlsx";
import SelectPage from "@app/client/components/admin/SelectPage";
import PaginationButton from "@app/client/components/admin/PaginationButton";

export default function Page() {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [ordersPerPage, setOrdersPerPage] = useState(10);

  const handleDownload = () => {
    const rows = filteredOrders.map((order) => ({
      id: order.id,
      customerName: order.user.name,
      email: order.user.email,
      price: order.totalPrice,
      status: order.paymentStatus,
      date: order.createdAt.split("T")[0],
    }));

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(rows);

    XLSX.utils.book_append_sheet(workbook, worksheet, "Products");

    XLSX.utils.sheet_add_aoa(worksheet, [
      [
        "Order ID",
        "Customer Name",
        "Customer Email",
        "Total Price",
        "Payment Status",
        "Order Date",
      ],
    ]);

    XLSX.writeFile(workbook, "ReportFor2023.xlsx", { compression: true });
  };

  useEffect(() => {
    async function fetchOrders(page = 1, limit = 10) {
      const response = await getManyOrders(page, limit);
      const { orders, totalPages } = response;
      setOrders(orders);
      setFilteredOrders(orders);
      setTotalPages(totalPages);
    }

    fetchOrders(currentPage, ordersPerPage);
  }, [currentPage, ordersPerPage]);

  useEffect(() => {
    setFilteredOrders(
      orders.filter((order) =>
        order.id.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, orders]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleOrdersPerPageChange = (event) => {
    setOrdersPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl text-color-heading font-bold my-4">Orders</h1>
        <div className="text-sm text-color-body flex items-center gap-3">
          <Link
            className="hover:text-color-primary transition-all ease-in-out duration-200"
            href={"/admin/dashboard"}
          >
            Dashboard
          </Link>
          <span>{">"}</span>
          <span className="text-color-lightest">Orders</span>
        </div>
      </div>
      <div className="bg-white p-8 w-full">
        <p className="mb-4 flex text-sm items-center gap-3 text-color-body">
          <FaCoffee className="text-color-primary" />
          Tip search by Product ID: Each product is provided with a unique ID,
          which you can rely on to find the exact product you need.
        </p>
        <div className="flex w-full justify-between mb-8">
          <div className="flex items-center gap-2">
            <SelectPage
              value={ordersPerPage}
              handleProductsPerPageChange={handleOrdersPerPageChange}
            />
            <div className="relative">
              <input
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text"
                placeholder="Search here..."
                className="border border-color-light py-2.5 px-4 rounded-xl focus:outline-none"
              />
              <CiSearch
                size={24}
                className="absolute top-1/2 -translate-y-1/2 right-4"
              />
            </div>
          </div>
          <button
            onClick={handleDownload}
            className=" flex items-center gap-2 px-10 py-3.5 border rounded border-color-primary text-color-primary transition-all ease-in-out duration-200 hover:bg-color-primary hover:text-color-border-light"
          >
            <FaDownload /> Export Orders
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className="bg-[#f6f8fbcc] p-3">
                <th className="px-4 py-2">Customer Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Order ID</th>
                <th className="px-4 py-2">Total Price</th>
                <th className="px-4 py-2">Payment Status</th>
                <th className="px-4 py-2">Ordered At</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b p-3 text-color-dark odd:bg-[#f6f8fbcc] hover:bg-[#EDF1F5] transition-all ease-out duration-300"
                >
                  <Link href={`/admin/order/${order.id}`}>
                    <td className="px-4 py-2 whitespace-nowrap">
                      {order.user.firstName}
                    </td>
                  </Link>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {order.user.email}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">{order.id}</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <CurrencyFormat amount={order.totalPrice} />
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <span
                      className={`ml-2 text-sm ${
                        order.paymentStatus === "PAID"
                          ? "text-color-success border border-color-success"
                          : "text-red-600 bg-red-100"
                      } rounded font-medium py-0.5 px-2`}
                    >
                      {order.paymentStatus}
                    </span>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {order.createdAt.split("T")[0]}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">Nothing</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <PaginationButton
          onClick={handlePageChange}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
