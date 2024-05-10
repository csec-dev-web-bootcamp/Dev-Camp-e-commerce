"use server";
import React from "react";
import { jewelery } from "@app/client/api/products";
import Link from "next/link";
import ProductCard from "@app/client/components/global/ProductCard";
async function Home({ params }) {
  const filteredProducts = jewelery.filter(
    (product) => product.id === params.productId
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
export { Home };
