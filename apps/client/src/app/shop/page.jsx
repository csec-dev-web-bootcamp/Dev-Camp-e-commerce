"use client";
import React from "react";
import { Button } from "../../components/ui/button";
// import Rating from "@mui/material/Rating";
// import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
// import { Link } from "react-router-dom";
import { jewelery } from "../../api/products";
import { womenClothing } from "../../api/womenClothing";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "@app/client/store/cart";
import ProductCard from "@app/client/components/global/ProductCard";
const womenClothingCard = ({ params }) => {
  console.log(params);
  return (
    <main>
      <div className="grid grid-cols-4 gap-10">
        {jewelery.map((categore) => (
          <Link
            href={`/shop/productDetail?productId=${categore.id}`}
            key={categore.id}
          >
            <ProductCard categore={categore} />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default womenClothingCard;
