import Link from "next/link";
import React from "react";

const orders = [
  {
    id: 6523,
    date: "September 10, 2020",
    status: "Processing",
    price: "$326.63 for 3 items",
  },
  {
    id: 6524,
    date: "September 10, 2020",
    status: "Processing",
    price: "$326.63 for 3 items",
  },
  {
    id: 6525,
    date: "September 10, 2020",
    status: "Processing",
    price: "$326.63 for 3 items",
  },
  {
    id: 6526,
    date: "September 10, 2020",
    status: "Processing",
    price: "$326.63 for 3 items",
  },
  {
    id: 6527,
    date: "September 10, 2020",
    status: "Processing",
    price: "$326.63 for 3 items",
  },
];

export default function Orders() {
  return (
    <div>
      <div className="flex px-5 text-xl font-medium border-b-2 border-color-lighter items-center justify-between">
        <h1>Order</h1>
        <h1>Date</h1>
        <h1>Status</h1>
        <h1>Action</h1>
      </div>
      {orders.map((order) => (
        <div
          key={order.id}
          className="flex font-medium  p-5 border-b-2 border-color-lighter items-center justify-between text-sm"
        >
          <h2 className="text-color-chart03">#{order.id}</h2>
          <h2>{order.date}</h2>
          <h2>{order.status}</h2>
          <h2 className="py-4">
            <Link
              href={""}
              className="py-2 px-5 text-base rounded border-black border"
            >
              View
            </Link>
          </h2>
        </div>
      ))}
    </div>
  );
}
