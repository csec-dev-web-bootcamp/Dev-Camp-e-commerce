import React from "react";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@app/client/lib/utils";

const categories = [
  {
    id: 5,
    slug: "jwellery",
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    image:
      "https://img.freepik.com/free-photo/abstract-gold-chain-jewellery-presentation_23-2149599103.jpg?t=st=1715213778~exp=1715217378~hmac=ace0d055a0b5ecc59b17ba275008351d50bcdbd25ec575f751efa241c2d6abf6&w=360",
  },
  {
    id: 9,
    slug: "electronics",
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
  },
  {
    id: 1,
    slug: "mens-clothing",
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 15,
    slug: "women-clothing",
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
  },
];

const Card = () => {
  return (
    <main>
      <div className="grid grid-cols-4 gap-10">
        {categories.map((categore) => (
          <div
            key={categore.id}
            className="flex flex-col shadow-md items-center justify-center p-4 border rounded-xl"
          >
            <img src={categore.image} alt="image" className="w-28" />
            <p className="text-center">{categore.title.slice(0, 25)}</p>
            <p className="py-2">{categore.slug}</p>
            <Link
              className={cn(buttonVariants({ variant: "link" }))}
              href={`/shop?categore=${categore.slug}`}
            >
              Show Detail
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Card;
