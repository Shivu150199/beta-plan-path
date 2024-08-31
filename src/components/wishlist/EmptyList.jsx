import React from 'react'
import { emptywishlist } from '../../assets/wishlist'

const EmptyWishlist = () => {
  return (

        <div className='p-4 flex items-center justify-center gap-4 bg-white w-[100%]  '>
<div className='border-[1px] rounded-md w-full h-[85vh] md:h-[75vh] flex flex-col items-center justify-center'>
<img src={emptywishlist} alt="" />
<p className='text-dark_violet text-[18px] font-bold'>Wishlist is empty</p>
</div>
        
        </div>
 
  )
}

export default EmptyWishlist