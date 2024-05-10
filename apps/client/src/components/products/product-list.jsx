import React from 'react'
import ProductCard from './product-card';

const products = [
    {
      id: 5,
      category: "jwellery",
      name:'Gold',
      price: "$10",
      title:
        "John Hardy Women's Legends ",
      image:
        "https://img.freepik.com/free-photo/abstract-gold-chain-jewellery-presentation_23-2149599103.jpg?t=st=1715213778~exp=1715217378~hmac=ace0d055a0b5ecc59b17ba275008351d50bcdbd25ec575f751efa241c2d6abf6&w=360",
    },
    {
      id: 9,
      price: "$10",
      name:'Hard Disk',
      category: "electronics",
      title: "WD 2TB Elements Portable  ",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    },
    {
      id: 1,
      price: "$10",
      name:'Bag',
      category: "mens-clothing",
      title: "Fjallraven - Foldsack ",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 15,
      price: "$10",
      name:'Hoody',
      category: "women-clothing",
      title: "BIYLACLESEN Women's ",
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    },
  ];


const ProductList = () => {
  return (
    <div className='grid grid-cols-4 gap-4 mx-auto'>
      {
        products.map((product)=>(
            <ProductCard key={product.id} product={product}/>
        ))
      }
    </div>
  )
}

export default ProductList;
