"use client";
import React from "react";
import { jewelery } from "../../api/products";
import Link from "next/link";

import { useCart } from "@app/client/store/cart";
import ProductCard from "@app/client/components/global/ProductCard";
import { useSearchParams } from "next/navigation";
export default function WomenClothingCard() {
  const parameter = useSearchParams();
  const category = parameter.get("category");
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
}
