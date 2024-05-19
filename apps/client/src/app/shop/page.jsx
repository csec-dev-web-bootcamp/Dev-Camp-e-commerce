"use client";
import React, { useState } from "react";
import { jewelery } from "../../api/products";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import ProductCard from "@app/client/components/global/ProductCard";
import { useSearchParams } from "next/navigation";

import Message from "@app/client/components/global/Message";

import Rating from "@app/client/components/global/Rating";
import Link from "next/link";
import Loader from "@app/client/components/global/Loader";
export default function WomenClothingCard() {
  const parameter = useSearchParams();
  const category = parameter.get("category");
  const search = parameter.get("search");
  const [isLoading, setIsLoading] = useState(false);

  const filteredProducts = category
    ? jewelery.filter((product) => product.category === category)
    : jewelery;

  return (
    <>
      <main className="px-15 my-10">
        <h1 className="font-bold text-3xl mb-6">Explore Our Products</h1>
        <div className="grid grid-cols-4 gap-10">
          {filteredProducts.map((categore) =>
            isLoading ? (
              <Loader key={categore.id} />
            ) : (
              <Link
                href={`/shop/${categore.id}`}
                onClick={(e) => e.stopPropagation()}
                key={categore.id}
              >
                <ProductCard key={categore.id} categore={categore}>
                  <Rating rating={categore.rating.rate} />
                </ProductCard>
              </Link>
            )
          )}
        </div>
      </main>
      <Message />
    </>
  );
}
