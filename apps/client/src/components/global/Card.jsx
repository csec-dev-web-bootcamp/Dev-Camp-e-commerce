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
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/jewellery/product-4.png",
  },
  {
    id: 9,
    slug: "electronics",
    title: " Portable External Hard Drive - USB 3.0 ",
    image:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-01.png",
  },
  {
    id: 1,
    slug: "mens-clothing",
    title: "Denim Jacket",
    image:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-4.png",
  },
  {
    id: 15,
    slug: "women-clothing",
    title: "Women's stylish hat",
    image:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-6.png",
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
            <p className="text-center">{categore.title.slice(0, 10)}</p>
            <p className="py-2">{categore.slug}</p>
            <Link
              className={cn(buttonVariants({ variant: "link" }))}
              href={`/shop?categore=${categore.slug}`}
            >
              <Button className="">Show Detail</Button>
            </Link>
            </div>
         
        ))}
      </div>
    </main>
  );
};

export default Card;
