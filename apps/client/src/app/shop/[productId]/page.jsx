"use client";
import Link from "next/link";
import { jewelery } from "@app/client/api/products";
import ProductDetail from "@app/client/components/global/ProductDetail";
import Message from "@app/client/components/global/Message";
import { Footer } from "antd/es/layout/layout";
import Header from "@app/client/components/global/Header";
import { useItemViewed } from "@app/client/store/vieweditems";
import ItemsViewed from "@app/client/components/global/ItemsViewed";
import Subscribe from "@app/client/components/global/Subscribe";

export default function Home({ params }) {
  const { addItemViewed } = useItemViewed();

  const productFiltered = jewelery.filter(
    (product) => product.id === Number(params.productId)
  );

  function handleAddToItems(product) {
    addItemViewed(product);
  }

  return (
    <>
      {productFiltered.map((product) => (
        <Link
          href={`/shop/${product.id}`}
          key={product.id}
          onClick={() => handleAddToItems(product)}
        >
          <ProductDetail product={product} id={params.productId} />
        </Link>
      ))}
    </>
  );
}
