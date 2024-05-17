"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { jewelery } from "@app/client/api/products";
import ProductDetail from "@app/client/components/global/ProductDetail";
import Message from "@app/client/components/global/Message";
import { Footer } from "antd/es/layout/layout";
import Header from "@app/client/components/global/Header";
export default function Home({ params }) {
  const router = useRouter();
  const productFiltered = jewelery.filter(
    (product) => product.id === Number(params.productId)
  );

  return (
    <>
      <Header />
      {productFiltered.map((product) => (
        <ProductDetail key={product.id} product={product} id={params.productId}>
          <button
            className="px-6 py-2 border-black font-bold absolute top-0 left-0"
            onClick={() => router.back()}
          >
            &larr; Back
          </button>
        </ProductDetail>
      ))}
      <Message />
      <Footer />
    </>
  );
}
