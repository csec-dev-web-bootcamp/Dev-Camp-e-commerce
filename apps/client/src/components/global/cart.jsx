import React from 'react'
import { AiTwotonePlusCircle } from "react-icons/ai";
import { AiTwotoneMinusCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const cart = () => {
  return (
    <div className='flex m-5'>
      <div><img src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-01.png" alt="" className='w-20'/></div>

      <div className='mx-10'>
        <div>rating</div>
        <div>title</div>
        <div>price</div>
      </div>

      <div className='ml-20 my-5'>
        <div className='flex '>
          <div className='mr-4'>
              <AiTwotoneMinusCircle />
          </div>
          <div className='mr-4'>15</div>
          <div>
            <AiTwotonePlusCircle />
          </div>
        </div>
        <div>
          <div>
            <RiDeleteBin6Line />
          </div>
        </div>
      </div>

    </div>
  )
}

export default cart;
