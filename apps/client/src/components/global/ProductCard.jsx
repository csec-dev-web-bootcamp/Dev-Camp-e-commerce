import { useCart } from "@app/client/store/cart";
import Link from "next/link";
import React from "react";
import { cn } from "@app/client/lib/utils";
import { Button, buttonVariants } from "../ui/button";
import Rating from "./Rating";
import { MdFavoriteBorder } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { useWishlist } from "@app/client/store/wishlist";
export default function ProductCard({ categore }) {
  const { addToCart, cartProducts, removeFromCart } = useCart();
  const { addToWishlist, wishlist } = useWishlist();
  const exist = cartProducts.find((cart) => cart.id === categore.id);
  const wishlistExist = wishlist.find((cart) => cart.id === categore.id);

  function handleAddToCart(product) {
    !exist && addToCart(product);
  }
  function handleAddToWishList(product) {
    !wishlistExist && addToWishlist(product);
  }
  return (
    <div className="flex flex-col p-4 border rounded-xl  transition-all cursor-pointer">
      <div className="relative overflow-hidden self-center group transition-all mb-12 ">
        <img
          src={categore.image}
          alt="image"
          className="w-36   h-36 object-fit mb-12"
        />
        <div className="flex  bg-gray-100 translate-y-16 transition-all group-hover:translate-y-0 p-2 justify-between w-full absolute bottom-0 left-0">
          <Link
            href={""}
            scroll={false}
            onClick={() => {
              handleAddToWishList(categore);
            }}
          >
            <MdFavoriteBorder size={30} />
          </Link>
          <Link
            href={""}
            scroll={false}
            onClick={() => {
              handleAddToCart(categore);
            }}
          >
            {" "}
            <BsCart2 size={30} />
          </Link>
        </div>
      </div>
      {/* <Button>Show Detail</Button> */}
      <div>
        <Rating rating={categore.rating.rate} />
        <p>{categore.title.slice(0, 25)}</p>
        <p>{categore.price}</p>
      </div>

      {/* <Link
        className={cn(buttonVariants({ variant: "outline" }))}
        href={""}
        onClick={() => {
          handleAddToCart(categore);
        }}
      >
        {exist ? "Added" : "Add To Cart"}
      </Link> */}
    </div>
  );
}
