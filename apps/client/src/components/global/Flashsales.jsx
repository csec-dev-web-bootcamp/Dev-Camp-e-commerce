import React from "react";
import { FaFire } from "react-icons/fa";
import FlashsalesTime from "./FlashsalesTime";
import FlashsalesSlider from "./FlashsalesSlider";

export default function Flashsales() {
  return (
    <div className="mt-10 p-16">
      <div className="flex  justify-between ">
        <span className="flex items-center gap-2 text-light-primary">
          <span className="p-2 bg-light-primary rounded-full text-white">
            <FaFire />
          </span>
          Today's
        </span>
        <FlashsalesTime />
      </div>
      <h1 className="text-3xl font-bold mt-4">Flash Sale's</h1>
      <FlashsalesSlider />
    </div>
  );
}
