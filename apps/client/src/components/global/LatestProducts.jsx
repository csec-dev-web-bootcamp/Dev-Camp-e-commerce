import React from "react";
import ProductCard from "./ProductCard";

export default function LatestProducts({ products }) {
  products.length = 8;
  return (
    <div className="px-14 mt-4 mb-3">
      <h1 className="text-3xl ml-3 font-bold mb-8 text-color-heading">
        Latest Products
      </h1>
      <div className="grid gap-3 grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
