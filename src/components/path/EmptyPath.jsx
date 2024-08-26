import React from 'react'
import { emptycart } from '../../assets/cart'

const EmptyPath = () => {
  return (
    <div className='flex items-center justify-center flex-col gap-4 h-[80vh] md:border-[1px] md:mx-4 md:rounded-lg'>
<img src={emptycart} alt="" />
<h2 className='text-[18px] font-bold text-dark_violet'>No Path added yet</h2>

<p className='text-center text-dark_violet text-sm font-normal w-[90%]'>Go to course listing page to create
learning path</p>

<button className='py-2 px-4 bg-primary hover:bg-violet-500 text-white rounded-lg'>Explore courses</button>


    </div>
  )
}

export default EmptyPath