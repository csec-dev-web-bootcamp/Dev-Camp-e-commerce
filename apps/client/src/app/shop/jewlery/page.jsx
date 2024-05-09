import React from 'react'
import { Button } from '../../../components/ui/button'
import { jewelery } from '../../../api/jewelery'


const jeweleryCard = () => {
  return (
  <main>
      <div className='grid grid-cols-4 gap-10'>
       {
        jewelery.map((categore)=>(
          <div key={categore.id} className='flex flex-col shadow-md items-center justify-center p-4 border rounded-xl' >
            <img src={categore.image} alt="image" className='w-28'/>
            <p className='text-center'>{categore.title.slice(0,25)}</p>
            <p className='py-2'>{categore.category}</p>
            <p className='justify-end'>{categore.rating.rate} + "  " + {categore.rating.count}</p>
            <p>{categore.price}</p>
            <p>{categore.description.slice(0,20) + "....."}</p>
            <Button>Add To Cart</Button>
            
          </div>
        ))
       }
      </div>
  </main>
  )
}

export default jeweleryCard