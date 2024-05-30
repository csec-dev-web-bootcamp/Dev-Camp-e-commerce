"use client";
import AddProduct from "@app/client/components/forms/addProduct";

import { deleteProduct, getManyProducts } from "@app/client/data/products";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaCoffee, FaTrash } from "react-icons/fa";

export default function Page() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts = await getManyProducts();
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter(
        (product) =>
          product.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, products]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl text-color-heading font-bold my-4">Products</h1>
        <div className="text-sm text-color-body flex items-center gap-3">
          <Link
            className="hover:text-color-primary transition-all ease-in-out duration-200"
            href={"/admin/dashboard"}
          >
            Dashboard
          </Link>
          <span>{">"}</span>
          <span className="text-color-lightest">Products</span>
        </div>
      </div>
      <div className="bg-white p-8 w-full">
        <p className="mb-4 flex text-sm items-center gap-3 text-color-body">
          <FaCoffee className="text-color-primary" />
          Tip search by Product ID: Each product is provided with a unique ID,
          which you can rely on to find the exact product you need.
        </p>
        <div className="flex w-full justify-between mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search here..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-color-light py-2.5 px-4 rounded-xl focus:outline-none"
            />
            <CiSearch
              size={24}
              className="absolute top-1/2 -translate-y-1/2 right-4"
            />
          </div>
          <Link
            href="/admin/addProduct"
            className="px-10 py-3.5 border rounded border-color-primary text-color-primary transition-all ease-in-out duration-200 hover:bg-color-primary hover:text-color-border-light"
          >
            + Add New
          </Link>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table-auto w-screen border-collapse">
            <thead className="p-8 mb-3">
              <tr className="bg-[#f6f8fbcc] rounded shadow">
                <th className="text-start px-4 py-2">Product</th>
                <th className="text-start px-4 py-2">Product ID</th>
                <th className="text-start px-4 py-2">Price</th>
                <th className="text-start px-4 py-2">Quantity</th>
                <th className="text-start px-4 py-2">Stock</th>
                <th className="text-start px-4 py-2">Start date</th>
                <th className="text-start px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr
                  key={product.id}
                  className="md:text-base   sm:text-sm text-xs border-b p-3 odd:bg-[#f6f8fbcc] hover:bg-[#EDF1F5] transition-all ease-out duration-300"
                >
                  <td className="px-4 mr-19 py-2 whitespace-nowrap font-bold flex items-center gap-2">
                    <img
                      src={product.images[0].url}
                      className="w-14 h-14 rounded shadow"
                      alt=""
                    />
                    {product.name.slice(0, 10)}..
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {product.id.slice(0, 15)}...
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {product.price}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {product.quantity}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <span className="ml-2 text-sm text-red-600 bg-red-100 rounded font-medium py-0.5 px-2">
                      {product.stockStatus}
                    </span>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {product.createdAt.split("T")[0]}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-red-500">
                    <button>
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
