import React from 'react'
import search from '../assets/search.svg'
const Filter = () => {
  return (
    <div className='p-2 border-b-[1px] border-[#D0D0D0]'>
    <div className='flex items-center justify-between py-2'>
        <h3 className='font-[700] text-[#31225C]'>School</h3>
        <button className=''>
            <img src={search} alt="" className='w-[14px] h-[14px]' />
        </button>
    </div>
    <ul className='flex flex-col '>
        <li className='py-2'>
            <label className='flex items-center gap-2'>
                <input type="checkbox" className='w-[20px] h-[20px] border-[#D0D0D0] border-[1px] ' /><span className='font-[400] text-[14px]'>
                    East side highschool <sub>(322)</sub>
                </span>
            </label>
        </li>
        <li className='py-2'>
            <label className='flex items-center gap-2'>
                <input type="checkbox" className='w-[20px] h-[20px] border-[#D0D0D0] border-[1px]' /><span className='font-[400] text-[14px]'>
                    East side highschool <sub>(322)</sub>
                </span>
            </label>
        </li>
        <li className='py-2'>
            <label className='flex items-center gap-2'>
                <input type="checkbox" className='w-[20px] h-[20px] border-[#D0D0D0] border-[1px]' /><span className='font-[400] text-[14px]'>
                    East side highschool <sub>(322)</sub>
                </span>
            </label>
        </li>
        <li className='py-2'>
            <label className='flex items-center gap-2'>
                <input type="checkbox" className='w-[20px] h-[20px] border-[#D0D0D0] border-[1px]'/><span className='font-[400] text-[14px]'>
                    East side highschool <sub>(322)</sub>
                </span>
            </label>
        </li>
       
    </ul>
    <div className='flex justify-end'>
        <button className='text-primary capitalize text-[14px] font-medium' >show more</button>
    </div>
    </div>
  )
}

export default Filter