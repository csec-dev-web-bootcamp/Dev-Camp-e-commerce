"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.png";
import { login } from "../../data/auth";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "../global/Loader";
import { loginSchema } from "@app/client/lib/validation";

export default function Login() {
  const router = useRouter();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [statusCode, setStatusCode] = useState();

  function onChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    setStatusCode();
  }

  async function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await login(formState);
      setIsLoading(false);
      // console.log(res.error);
      if (res?.error) {
        alert(JSON.stringify(res.error));
        setStatusCode(res.error.statusCode);
      } else {
        router.push("/");
      }
    } catch (error) {
      return { error };
    }
  }

  return (
    <div className="bg-white  flex items-center justify-center mx-auto">
      <div className="flex items-center justify-center shadow-md border mt-8 lg:mt-32">
        <div className="flex   gap-4 flex-col items-center justify-center px-4 md:pr-12 h-96 pb-10 bg-login-bg bg-cover  shadow-lg">
          <Image src={Logo} className="bg-gray-200 rounded-md" />
          <h3 className="text-2xl font-bold text-gray-100">
            We offer the best products
          </h3>
          <div className=" py-4 flex justify-between ">
            <div className="flex items-center gap-6">
              <p className="text-sm text-white">Not a member ?</p>
              <Link
                className="px-8 py-3  bg-white text-blue-600 font-semibold  rounded-md "
                href={"/auth/register"}
              >
                Sign Up Now
              </Link>
            </div>
          </div>
        </div>

        <div className="flex  items-center justify-center  ">
          <div className="shadow-md h-96 py-10">
            <form action="" onSubmit={onSubmit} className="px-24 py-2">
              <h3 className="font-bold mb-3 text-2xl flex gap-4">
                Sign in to
                <Image src={Logo} className=" rounded-md" />
              </h3>
              <small className="text-color-body text-md">
                Enter detail below
              </small>
              <div className="relative mt-10 ">
                <label
                  htmlFor=""
                  className="absolute text-color-body mb-1.5 text-sm font-medium inline-block -top-3 left-5 pointer-events-none bg-white py-0 px-2.5"
                >
                  Email
                </label>
                <input
                  name="email"
                  onChange={onChange}
                  type="text"
                  className={`w-full text-sm py-3 mb-6 px-7 ${
                    statusCode === 404 ? "border-red-400" : "border-color-light"
                  } text-color-body rounded-md border`}
                />
              </div>
              <div className="relative w-full">
                <label
                  htmlFor=""
                  className="absolute  text-color-body mb-1.5 text-sm font-medium inline-block -top-3 left-5 pointer-events-none bg-white py-0 px-2.5"
                >
                  Password
                </label>
                <input
                  name="password"
                  onChange={onChange}
                  type="password"
                  className="focus:border-color-primary w-full text-sm py-3 mb-9 px-7 border-color-light text-color-body rounded-md border"
                />
              </div>
              <div className="flex justify-between  items-center gap-4">
                <button
                  className="rounded w-32 h-10 flex justify-center items-center text-white px-8 py-3 bg-blue-500 "
                  disabled={isLoading}
                >
                  {isLoading ? <Loader size={20} /> : "Sign In"}
                </button>

                <Link href="" className="text-sm font-semibold">
                  Forgot Password ?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
