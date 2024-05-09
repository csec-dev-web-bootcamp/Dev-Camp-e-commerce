import React from 'react'
import Card from './Card'


const Categories = () => {
  return (
     <main className='w-full mx-auto'>
        <div className='flex flex-col gap-10 items-center justify-center'>
            <h1 className='text-3xl font-semibold'>Categories</h1>
            <Card />
        </div>
     </main>
  )
}

export default Categories
