"use client";
import React from "react";
import { jewelery } from "@app/client/api/products";
import Link from "next/link";
import Carts from "@app/client/components/global/Carts";
import ProductCard from "@app/client/components/global/ProductCard";


export default function Home({ params }) {
  const category = params.category;
  if (category === 'carts') return <Carts />

  const filteredProducts = jewelery.filter(
    (product) => product.category === category
  );



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
