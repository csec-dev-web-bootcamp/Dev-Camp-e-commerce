import { useCart } from "@app/client/store/cart";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Rating from "./Rating";
import { MdFavoriteBorder } from "react-icons/md";

import { useWishlist } from "@app/client/store/wishlist";
import CurrencyFormat from "./currencyFormater";
import { BsCart2 } from "react-icons/bs";

export default function ProductCard({ categore, children }) {
  const { addToCart, cartProducts } = useCart();
  const { addToWishlist, wishlist } = useWishlist();
  const exist = cartProducts.find((cart) => cart.id === categore.id);
  const wishlistExist = wishlist.find((cart) => cart.id === categore.id);

  function handleAddToCart(product, e) {
    e.stopPropagation();
    if (!exist) {
      addToCart(product);
    }
  }

  function handleAddToWishList(product, e) {
    e.stopPropagation();
    if (!wishlistExist) {
      addToWishlist(product);
    }
  }

  return (
    <div className=" group flex flex-col border rounded-xl p-4 transition-all cursor-pointer ">
      <div className="h-52   relative overflow-hidden w-full self-center transition-all ease-in-out mb-3 ">
        <div className=" p-4">
          {(
            <img
              src={categore.image}
              alt="image"
              className="scale-110 group-hover:scale-125 transition-all ease-in-out duration-300 w-full object-contain h-36 object-fit"
            />
          ) || <Skeleton />}
        </div>
        <div className="flex translate-y-16 transition-all duration-500 group-hover:translate-y-0 z-50 ease-in-out  p-2 gap-4 items-center justify-center w-full absolute bottom-0 left-0">
          <div>
            <button
              className="flex items-center justify-center p-2 bg-white rounded-full"
              onClick={() => handleAddToWishList(categore)}
            >
              <MdFavoriteBorder color={"#3577F0"} size={30} />
            </button>
          </div>
          <button
            className="inline-block z-50 px-5 py-2 bg-color-secondary rounded text-white text-sm"
            onClick={(e) => handleAddToCart(categore, e)}
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div>
        <p className="text-sm">{categore.title.slice(0, 25)}</p>
        {children}
        <p className="flex gap-4 font-bold">
          <span className="text-color-lightest line-through">
            {<CurrencyFormat amount={categore.price + 10} /> || <Skeleton />}
          </span>
          {<CurrencyFormat amount={categore.price} /> || <Skeleton />}
        </p>
      </div>
    </div>
  );
}
