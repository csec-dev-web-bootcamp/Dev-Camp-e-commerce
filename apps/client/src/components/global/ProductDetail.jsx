import { useCart } from "@app/client/store/cart";
import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { jewelery } from "@app/client/api/products";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import CurrencyFormat from "./currencyFormater";
import Rating from "./Rating";
import CountQuantity from "./CountQuantity";

import { useCount } from "@app/client/store/count";
import { BsCart2 } from "react-icons/bs";
export default function ProductDetail({ product, children }) {
  const { addToCart, cartProducts } = useCart();
  const images = jewelery.map((product) => product.image);
  const exist = cartProducts.find((cart) => cart.id === product.id);
  console.log(product);
  images.length = 7;
  const { count } = useCount();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="mt-24">
      <div className="flex w-full gap-10 justify-between">
        <div className=" w-2/6 h-2/6">
          <Swiper
            style={{
              "--swiper-navigation-color": "gray",
              "--swiper-pagination-color": "#fff",
              "--swiper-height": "10px",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="h-72 "
          >
            {images.map((img, i) => (
              <SwiperSlide key={i} className="w-10 relative">
                <img
                  src={`${img}`}
                  className="w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="m-4  h-full p-4 w-full"
          >
            {images.map((img, i) => (
              <SwiperSlide
                key={i}
                className="flex items-center justify-center  p-4"
              >
                <img src={`${img}`} className="h-16 " />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex gap-4 flex-col flex-1 justify-center">
          <span className="text-gray-600">{product.category} Products</span>
          <h1 className=" text-slate-900 font-extrabold text-4xl">
            {product.title.slice(0, 30)}
          </h1>
          <span className="px-2 py-1 text-sm self-start bg-color-primary text-white rounded-full">
            In stock
          </span>
          <div className="flex gap-4 text-2xl font-medium">
            <p className="text-gray-400 line-through">
              <CurrencyFormat amount={product.price + 100} />
            </p>
            <p>
              <CurrencyFormat amount={product.price} />
            </p>
          </div>
          <Rating rating={product.rating.rate} />
          <small>Description</small>
          <p className="text-base w-3/4 text-gray-600">
            {product.description.slice(0, 270)}...
          </p>
          <div className="flex gap-10 mt-4">
            <CountQuantity />
            <button
              onClick={() => {
                !exist && addToCart(product, count);
              }}
              className="flex gap-2 items-center bg-color-primary hover:scale-110 transition-all ease-in-out duration-200 px-6 py-2 text-white rounded text-sm"
            >
              <BsCart2 size={20} /> Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
