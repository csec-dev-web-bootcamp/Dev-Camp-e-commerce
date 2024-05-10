import React from 'react'
import { useCart } from "@app/client/store/cart";
import { X } from "lucide-react";

const Carts = () => {
    const { cartProducts, removeProductFromCart } = useCart();

  return (
    <main className='  flex flex-col items-center justify-center'>
          <div>
            <h1 className='text-2xl font-semibold'>Your Carts</h1>
             <div className='flex gap-20 text-xl font-semibold mt-10'>
                <p className='mr-20'>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Sub total</p>
             </div>
          </div>

        <div className="grid gap-4 py-4 mt-10 ">
     
          {cartProducts.length > 0 ? (
            cartProducts.map((product) => (
              <div key={product.id} className="flex  mb-5 p-6 items-center gap-14 shadow-md">
                <button onClick={() => removeProductFromCart(product.id)}>
                  <X className="h-6 w-6" />
                </button>
                <img className="w-20 h-20" src={`${product.image}`} alt="" />
                <div>
                  <h6 className="text-md font-semibold">{product.title.slice(0,30)}</h6>
                </div>
                <div>
                    <p className='text-md'>${product.price}</p>
                </div>
                
                {/* <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" /> */}
              </div>
            ))
          ) : (
            <h1>Cart Empty</h1>
          )}
          </div>
    </main>
  )
}

export default Carts
