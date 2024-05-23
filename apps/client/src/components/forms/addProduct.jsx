"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createProduct } from "@app/client/data/products";

export default function SignUp() {
  const router = useRouter();
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    price: 0,
    categoryId: "",
    rating: 0,
    imageUrl: "",
  });

  function onChange(e) {
    if (e.target.name === price || e.target.name === rating) {
      setFormState({
        ...formState,
        [e.target.name]: Number(e.target.value),
      });
    }
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e) {
    e.preventDefault();

    const res = await createProduct(formState);
    console.log({ res });
    //   if (res?.status === 200) {
    //     router.push("/");
    //   } else {
    //     alert("Error creating product");
    //   }
  }
  return (
    <div className="">
      <div className="flex gap-10 relative w-full h-svh items-center">
        <div className="flex mt-16 items-center justify-center w-full">
          <div className="w-2/3">
            <form onSubmit={onSubmit} className="w-2/3">
              <h3 className="font-bold mb-3 text-2xl">{"I'm New Here"}</h3>
              <small className="text-color-body">
                Enter Product detail below
              </small>
              <div className="relative mt-10">
                <label
                  htmlFor="name"
                  className="absolute text-color-body mb-1.5 text-sm font-medium inline-block -top-3 left-5 pointer-events-none bg-white py-0 px-2.5"
                >
                  Product Name
                </label>
                <input
                  name="name"
                  onChange={onChange}
                  type="text"
                  className="w-full text-sm py-3 mb-6 px-7 border-color-light text-color-body rounded-md border"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="description"
                  className="absolute text-color-body mb-1.5 text-sm font-medium inline-block -top-3 left-5 pointer-events-none bg-white py-0 px-2.5"
                >
                  Description
                </label>
                <input
                  name="description"
                  onChange={onChange}
                  type="text"
                  className="w-full text-sm py-3 mb-6 px-7 border-color-light text-color-body rounded-md border"
                />
              </div>
              <div className="relative w-full">
                <label
                  htmlFor="price"
                  className="absolute text-color-body mb-1.5 text-sm font-medium inline-block -top-3 left-5 pointer-events-none bg-white py-0 px-2.5"
                >
                  Price
                </label>
                <input
                  onChange={onChange}
                  name="price"
                  type="number"
                  className="w-full text-sm py-3 mb-9 px-7 border-color-light text-color-body rounded-md border"
                />
              </div>
              <div className="relative w-full">
                <label
                  htmlFor="rating"
                  className="absolute text-color-body mb-1.5 text-sm font-medium inline-block -top-3 left-5 pointer-events-none bg-white py-0 px-2.5"
                >
                  Rating
                </label>
                <input
                  onChange={onChange}
                  name="rating"
                  type="number"
                  className="w-full text-sm py-3 mb-9 px-7 border-color-light text-color-body rounded-md border"
                />
              </div>
              <div className="relative w-full">
                <label
                  htmlFor="files"
                  className="absolute focus:border-color-primary text-color-body mb-1.5 text-sm font-medium inline-block -top-3 left-5 pointer-events-none bg-white py-0 px-2.5"
                >
                  Category Id
                </label>
                <input
                  onChange={onChange}
                  name="categoryId"
                  type="text"
                  multiple
                  className="w-full text-sm py-3 mb-9 px-7 border-color-light text-color-body rounded-md border"
                />
              </div>
              <div className="relative w-full">
                <label
                  htmlFor="files"
                  className="absolute focus:border-color-primary text-color-body mb-1.5 text-sm font-medium inline-block -top-3 left-5 pointer-events-none bg-white py-0 px-2.5"
                >
                  Product Images
                </label>
                <input
                  onChange={onChange}
                  name="imageUrl"
                  type="text"
                  multiple
                  className="w-full text-sm py-3 mb-9 px-7 border-color-light text-color-body rounded-md border"
                />
              </div>
              <div className="">
                <button className="rounded-md text-color-white px-8 py-2 bg-color-primary">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
