"use client";
import React from "react";
import { Button } from "../../components/ui/button";
// import Rating from "@mui/material/Rating";
// import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
// import { Link } from "react-router-dom";
import { jewelery } from "../../api/products";
import { womenClothing } from "../../api/womenClothing";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Carts from "@app/client/components/global/Carts";
import { useCart } from "@app/client/store/cart";
import ProductCard from "@app/client/components/global/ProductCard";
const WomenClothingCard = () => {
  const parameter = useSearchParams();
  const category = parameter.get("category");
  
  if(category === 'carts') return <Carts />
  const filteredProducts = category
    ? jewelery.filter((product) => product.category === category)
    : jewelery;

  return (
    <main>
      <div className="grid grid-cols-4 gap-10">
        {filteredProducts.map((categore) => (
          <Link href={`/shop/${categore.id}`} key={categore.id}>
            <ProductCard categore={categore} />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default WomenClothingCard;
