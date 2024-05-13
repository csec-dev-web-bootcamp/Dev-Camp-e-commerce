"use client";
import React from "react";
import { jewelery } from "@app/client/api/products";
import Link from "next/link";
import ProductCard from "@app/client/components/global/ProductCard";
import Carts from "@app/client/components/global/Carts";
import { Car } from "lucide-react";
export default function Home({ params }) {
  const category = params.category;

 if (category === 'carts') return <Carts />

  const filteredProducts = jewelery.filter(
    (product) => product.category === category
  );
  console.log(filteredProducts);
  return (
    <main>
      <div className="grid grid-cols-4 gap-10">
        {filteredProducts.map((categore) => (
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
}