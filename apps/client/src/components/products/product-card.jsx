"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@app/client/components/ui/card";
import { useCart } from "@app/client/stores/cart-store";
import { Button } from "../ui/button";
import { useMemo } from "react";

export default function ProductCard({ product }) {
  const cart = useCart();
  
  const isAdded = useMemo(() => {
    return cart.cartProducts.find((prod) => prod.id === product.id);
  }, [cart.cartProducts]);

  return (
    
    <Card className="flex flex-col items-center justify-center pt-0">
      <CardHeader>
      </CardHeader>
      <CardContent>
      <img src={product.image} alt="" 
      className="w-20 pt-0"
      />
      </CardContent>
      <CardTitle className="font-bold py-2">{product.name}</CardTitle>
      <CardContent>
        <p>Category: {product.category}</p>
      </CardContent>
      <CardContent className="py-2 pt-0">
        <p>{product.title}</p>
      </CardContent>

      <CardContent>
        <p>price: {product.price}</p>
      </CardContent>
      
      <CardFooter className="space-x-2">
        <Button
          onClick={() =>
            isAdded ? cart.removeFromCart(product.id) : cart.addToCart(product)
          }
        >
          {isAdded ? "remove from cart" : "add to cart"}
        </Button>
      </CardFooter>
    </Card>
   
  );
}