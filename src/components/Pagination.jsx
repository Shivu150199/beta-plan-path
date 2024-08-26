import React from 'react'
import next from '../assets/pagination/next.svg'
import prev from '../assets/pagination/prev.svg'
const Pagination = () => {
  return (
    <div className='sticky bottom-0 bg-white h-[3rem] p-2 flex items-center justify-end gap-4'>
        <span className='text-[13px]'>1 - 25 of 129</span>
        <div className='flex gap-2'>
        <button className='bg-primary h-[1.5rem] w-[1.5rem] flex items-center justify-center rounded-[2px]'>
<img src={prev} alt="" />
            </button>
            <button className='border-primary border-[1px] h-[1.5rem] w-[1.5rem] flex items-center justify-center rounded-[2px]'>
<img src={next} alt="" />
            </button>
          
        </div>
    </div>
  )
}

export default Pagination