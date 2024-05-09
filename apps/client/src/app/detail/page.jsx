import React from 'react'
import { Button } from '../../../components/ui/button'
// import { detail } from '../../../api/detail'


const detail =[
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
    "rate": 3.9,
    "count": 120
    }
    },
    {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
    "rate": 4.1,
    "count": 259
    }
    },
]
const detailCard = () => {
  return (
  <main>
      <div className='grid grid-cols-4 gap-10'>
      {
        detail.map((categore)=>(
          <div key={categore.id} className='flex flex-col shadow-md items-center justify-center p-4 border rounded-xl' >
            <div className='flex-row'>
              <img src={categore.image} alt="image" className='w-28'/>
              <p className='text-center'>{categore.title.slice(0,25)}</p>
              <p className='py-2'>{categore.category}</p>
              {/* <Button>Show Detail</Button> */}
              <p className='justify-end'>{categore.rating.rate} + "  " + {categore.rating.count}</p>
              <p>{categore.price}</p>
              <p>{categore.description.slice(0,20) + "....."}</p>
              <Button>Add To Cart</Button>
            </div>
          </div>
        ))
      }
      </div>
  </main>
  )
}

export default detailCard
