"use client";
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@app/client/components/ui/table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
];

const Customer = () => {
  const [options, setOptions] = useState({
    series: [
      {
        name: "series1",
        data: [90, 95, 100, 80, 90, 75, 95, 89],
      },
    ],
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  });

  useEffect(() => {
    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    // Clean up the chart on component unmount (optional)
    return () => chart.destroy();
  }, [options]);

  return (
    <>
      <div className="mx-56">
        <div id="chart">wws</div>
        {/* <div id="chart">sddd</div> */}
      </div>

      <div className="mx">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium my-4">
                {invoice.invoice}
              </TableCell>
              <TableCell className="my-4">{invoice.paymentStatus}</TableCell>
              <TableCell className="my-4">{invoice.paymentMethod}</TableCell>
              <TableCell className="my-4"> {invoice.paymentStatus}</TableCell>
              <TableCell className="my-4">{invoice.paymentMethod}</TableCell>
              <TableCell className="my-4">{invoice.paymentStatus}</TableCell>
              <TableCell className="text-right my-4">
                {invoice.totalAmount}
              </TableCell>
              <TableCell className="text-right  my-4">
                {invoice.totalAmount}
              </TableCell>
              <TableCell className="text-right my-4">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </div>
    </>
  );
};
export default Customer;
