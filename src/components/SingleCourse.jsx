import React from 'react'
import cardImaage from '../assets/card/dataStructure.svg'
import star from '../assets/card/star.svg'

const SingleCourse = () => {
    // let navigationList=['Home','My profile']
  return (
    <div className='flex gap-4 border-y-[1px] py-4 flex-col lg:flex-row'>
       

        <img src={cardImaage} alt="" className=' h-[8rem] bg-slate-200 rounded-lg' />

        <div className='flex flex-col gap-2'>
            <h2 className='font-[700] text-[28px] text-[#31225C]'>English 1 for Credit Recovery , [FL]</h2>
            <div className='flex gap-4 items-center'>
        <span className='text-[#31225C] font-[700] text-[14px]'>4.2</span>
        <ul className='flex items-center gap-1'>
            <li>
                <img src={star} alt="" />
            </li>
            <li>
                <img src={star} alt="" />
            </li>
            <li>
                <img src={star} alt="" />
            </li>
            <li>
                <img src={star} alt="" />
            </li>
            <li>
                <img src={star} alt="" />
            </li>
        </ul>
        <span className='text-[#31225C] font-[400] text-[14px]'>(3022)</span>
    </div>

    <p className='text-primary text-[18px] font-[700]'>Available Credit : <span>4</span>
    </p>
<ul className='flex flex-wrap gap-x-4'>
    <li className='flex items-center gap-2 font-[400] text-[14px]'><div className='w-[4px] h-[4px] rounded-full bg-[#525252]'></div><span>Max GPA :</span> <span>4</span></li>
    <li className='flex items-center gap-2 font-[400] text-[14px]'><div className='w-[4px] h-[4px] rounded-full bg-[#525252]'></div><span>Course Length :</span> <span>Semester</span></li>
    <li className='flex items-center gap-2 font-[400] text-[14px]'><div className='w-[4px] h-[4px] rounded-full bg-[#525252]'></div><span>State :</span> <span>CA</span></li>
    <li className='flex items-center gap-2 font-[400] text-[14px]'><div className='w-[4px] h-[4px] rounded-full bg-[#525252]'></div><span>Country :</span> <span>Santa clara</span></li>
</ul>
<div>
<button className='bg-primary text-white rounded-[4px] px-2 py-1 font-[500]'>
    Add to Cart
</button>
</div>

        </div>
    </div>
  )
}

export default SingleCourse