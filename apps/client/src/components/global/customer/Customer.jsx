"use client";
import React, { useState, useEffect } from "react";
import { CiEdit } from "react-icons/ci";
import { AiFillDelete } from "react-icons/ai";
import { getUsers } from "@app/client/data/users";

export default function Customers() {
  const [users, setUsers] = useState([]);
  useEffect(function () {
    async function getUsersList() {
      const users = await getUsers();
      setUsers(users);
    }
    getUsersList();
  }, []);
  return (
    <div className="  bg-white ">
      <div className="py-6 px-6 customer flex   gap-3 my-5 ">
        <div className="w-20 text-xl">Id</div>
        <div className="w-20 text-xl">Photo</div>
        <div className="w-28 text-xl">Full Name</div>
        <div className="w-40 text-xl">Email</div>
        <div className="w-28 text-xl">Country</div>
        <div className="w-28 text-xl">Date</div>
        <div className="w-20 text-xl">Status</div>
        <div className=" w-20 text-xl">Actions</div>
      </div>
      <hr style={{ padding: "3px" }} />

      {users.map((user) => (
        <div
          key={user.id}
          className="py-6 customer flex items-center justify-center gap-7 bg-white border-green-500 rounded-md px-6 transition duration-200 hover:drop-shadow-2xl hover:bg-color-light text-gray hover:border-white mb-3"
        >
          <div className="w-20">#{user.id.slice(0, 3)}</div>
          <div className="w-20">
            <div className="w-12 h-12 rounded-full bg-cyan-600 justify-center flex items-center text-white">
              {user.firstName.slice(0, 1)}
            </div>
          </div>
          <div className="w-20">{`${user.firstName}  ${user.lastName}`}</div>
          <div className="w-40 mr-5">{user.email}</div>
          <div className="w-28">Ehiopia</div>
          <div className="w-28">{user.createdAt.split("T")[0]}</div>
          <div className="w-20">{`${user.blocked ? "Blocked" : "Active"}`}</div>
          <div className="w-20 flex gap-3 mr-4">
            <div>
              <CiEdit style={{ width: "40px ", height: "30px" }} />
            </div>
            <div>
              <AiFillDelete
                style={{ width: "35px ", height: "25px", color: "red" }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
