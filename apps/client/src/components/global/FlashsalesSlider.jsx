"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import { jewelery } from "@app/client/api/products";
import ProductCard from "./ProductCard";
import Link from "next/link";
export default function FlashsalesSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="my-10">
      <Swiper
        style={{
          "--swiper-navigation-color": "#000000",

          "--swiper-pagination-color": "#fff",
          "--swiper-height": "5px",
          "--swiper-width": "5px",
          "--swiper-navigation-width": "5px",
        }}
        slidesPerView={4}
        spaceBetween={0}
        freeMode={true}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className=""
      >
        {jewelery.map((product, ind) => (
          <SwiperSlide key={product.id} className="m-10 w-1/2 h-1/2">
            <Link href={`/shop/${product.id}`} className="w-1/4">
              <ProductCard categore={product}>
                {ind % 2 === 0 && (
                  <div className="absolute w-20  top-5 -right-5 bg-color-primary shadow-md rounded text-sm font-bold px-2 py-1 text-white">
                    <span>{Math.trunc(Math.random() * 100)}% OFF</span>
                  </div>
                )}
              </ProductCard>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
