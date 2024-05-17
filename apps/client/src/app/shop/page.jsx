"use client";
import React from "react";
import { jewelery } from "../../api/products";
import Link from "next/link";

import { useCart } from "@app/client/store/cart";
import ProductCard from "@app/client/components/global/ProductCard";
import { useSearchParams } from "next/navigation";
import Header from "@app/client/components/global/Header";
import Subscribe from "@app/client/components/global/Subscribe";
import Message from "@app/client/components/global/Message";
import Footer from "@app/client/components/global/Footer";
export default function WomenClothingCard() {
  const parameter = useSearchParams();
  const category = parameter.get("category");
  const search = parameter.get("search");

  const filteredProducts = category
    ? jewelery.filter((product) => product.category === category)
    : jewelery;

  return (
    <>
      <Header />
      <main>
        <div className="grid grid-cols-4 gap-10">
          {filteredProducts.map((categore) => (
            <Link
              href={`/shop/${categore.id}`}
              onClick={(e) => e.stopPropagation()}
              key={categore.id}
            >
              <ProductCard key={categore.id} categore={categore} />
            </Link>
          ))}
        </div>
        <Message />
        <Footer />
      </main>
    </>
  );
}
