import React from "react";
import { FaFire } from "react-icons/fa";
import FlashsalesTime from "./FlashsalesTime";
import FlashsalesSlider from "./FlashsalesSlider";
import { jewelery } from "@app/client/api/products";
import ProductSlider from "./ProductSlider";

export default function Flashsales({ children }) {
  return (
    <ProductSlider
      title="Today's"
      heading="Flash Sale's"
      products={jewelery}
      Icon={FaFire}
    >
      <FlashsalesTime />
    </ProductSlider>
  );
}
